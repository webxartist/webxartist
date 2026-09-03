import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import connectMongoDB from "@/lib/mongodb";
import Location from "@/models/Location";
import locations from "@/data/locations";

import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/adminAuth";

export const runtime = "nodejs";

// --------------------------------------------------
// ADMIN AUTHENTICATION
// --------------------------------------------------

async function authenticateAdmin() {
  const cookieStore = await cookies();

  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  if (!token) {
    return null;
  }

  return verifyAdminSessionToken(token);
}

// --------------------------------------------------
// POST - IMPORT LOCATIONS
// --------------------------------------------------

export async function POST() {
  try {
    // Check admin authentication
    const admin = await authenticateAdmin();

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    // Connect MongoDB
    await connectMongoDB();

    // Check static location data
    if (!Array.isArray(locations) || locations.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No location data found to import.",
        },
        {
          status: 400,
        },
      );
    }

    // --------------------------------------------------
    // PREPARE BULK OPERATIONS
    // --------------------------------------------------

    const operations = locations.map((location, index) => ({
      updateOne: {
        filter: {
          slug: location.slug,
        },

        update: {
          $set: {
            name: location.name || location.city || "",

            slug: location.slug || "",

            city: location.city || "",

            state: location.state || "",

            country: location.country || "India",

            services: Array.isArray(location.services) ? location.services : [],

            title: location.title || "",

            shortDescription: location.shortDescription || "",

            description: location.description || "",

            heroTitle: location.heroTitle || "",

            heroSubtitle: location.heroSubtitle || "",

            localContext: location.localContext || "",

            locationDescription: location.locationDescription || "",

            relatedTopics: Array.isArray(location.relatedTopics)
              ? location.relatedTopics
              : [],

            seo: {
              title: location.seo?.title || "",

              description: location.seo?.description || "",

              keywords: Array.isArray(location.seo?.keywords)
                ? location.seo.keywords
                : [],
            },

            isActive: true,

            sortOrder:
              typeof location.id === "number" ? location.id : index + 1,
          },
        },

        upsert: true,
      },
    }));

    // --------------------------------------------------
    // IMPORT INTO MONGODB
    // --------------------------------------------------

    const result = await Location.bulkWrite(operations);

    // --------------------------------------------------
    // RESPONSE
    // --------------------------------------------------

    return NextResponse.json({
      success: true,

      message: "Locations imported successfully.",

      total: locations.length,

      inserted: result.upsertedCount || 0,

      updated: result.modifiedCount || 0,

      matched: result.matchedCount || 0,
    });
  } catch (error) {
    console.error("Import locations error:", error);

    // Duplicate slug
    if (error?.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message: "Duplicate location slug detected.",
        },
        {
          status: 409,
        },
      );
    }

    return NextResponse.json(
      {
        success: false,

        message: error?.message || "Failed to import locations.",

        error:
          process.env.NODE_ENV === "development" ? error?.stack : undefined,
      },
      {
        status: 500,
      },
    );
  }
}

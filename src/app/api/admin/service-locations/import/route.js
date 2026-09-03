import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import connectMongoDB from "@/lib/mongodb";

import Service from "@/models/Services";
import Location from "@/models/Location";
import ServiceLocation from "@/models/ServiceLocation";

import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/adminAuth";

export const runtime = "nodejs";

/**
 * --------------------------------------------------
 * Authenticate Admin
 * --------------------------------------------------
 */
async function authenticateAdmin() {
  const cookieStore = await cookies();

  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  return verifyAdminSessionToken(token);
}

/**
 * --------------------------------------------------
 * POST /api/admin/service-locations/import
 *
 * Generate Service + Location combinations
 * from all active Services and Locations.
 * --------------------------------------------------
 */
export async function POST() {
  try {
    // --------------------------------------------------
    // AUTHENTICATE ADMIN
    // --------------------------------------------------

    const admin = await authenticateAdmin();

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 },
      );
    }

    // --------------------------------------------------
    // CONNECT DATABASE
    // --------------------------------------------------

    await connectMongoDB();

    // --------------------------------------------------
    // GET ACTIVE SERVICES
    // --------------------------------------------------

    const services = await Service.find({
      isActive: true,
    })
      .sort({ sortOrder: 1, createdAt: 1 })
      .lean();

    // --------------------------------------------------
    // GET ACTIVE LOCATIONS
    // --------------------------------------------------

    const locations = await Location.find({
      isActive: true,
    })
      .sort({ sortOrder: 1, createdAt: 1 })
      .lean();

    // --------------------------------------------------
    // VALIDATION
    // --------------------------------------------------

    if (services.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No active services found",
        },
        { status: 404 },
      );
    }

    if (locations.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No active locations found",
        },
        { status: 404 },
      );
    }

    // --------------------------------------------------
    // GENERATE ALL COMBINATIONS
    // --------------------------------------------------

    const documents = [];

    for (const service of services) {
      for (const location of locations) {
        const slug = `${service.slug}/${location.slug}`.toLowerCase();

        documents.push({
          service: service._id,
          location: location._id,

          slug,

          title: "",
          metaTitle: "",
          metaDescription: "",
          keywords: [],

          heroTitle: "",
          heroSubtitle: "",

          shortDescription: "",
          description: "",
          localContext: "",

          faqs: [],

          isActive: true,
          sortOrder: 0,
        });
      }
    }

    // --------------------------------------------------
    // INSERT ONLY NEW COMBINATIONS
    // --------------------------------------------------

    let created = 0;
    let skipped = 0;

    for (const document of documents) {
      // Check service + location combination
      const existing = await ServiceLocation.findOne({
        service: document.service,
        location: document.location,
      });

      if (existing) {
        skipped++;
        continue;
      }

      try {
        await ServiceLocation.create(document);

        created++;
      } catch (error) {
        // Duplicate slug or relationship
        if (error?.code === 11000) {
          skipped++;
          continue;
        }

        throw error;
      }
    }

    // --------------------------------------------------
    // SUCCESS RESPONSE
    // --------------------------------------------------

    return NextResponse.json({
      success: true,

      message: "Service locations imported successfully",

      services: services.length,

      locations: locations.length,

      totalRequested: documents.length,

      created,

      skipped,

      totalServiceLocations: created + skipped,
    });
  } catch (error) {
    console.error("Import service locations error:", error);

    return NextResponse.json(
      {
        success: false,

        message: "Failed to import service locations",

        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}

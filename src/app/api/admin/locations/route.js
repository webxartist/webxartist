import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import connectMongoDB from "@/lib/mongodb";
import Location from "@/models/Location";

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
 * GET /api/admin/locations
 *
 * Get all locations
 * --------------------------------------------------
 */
export async function GET() {
  try {
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

    await connectMongoDB();

    const locations = await Location.find({})
      .sort({
        sortOrder: 1,
        createdAt: 1,
      })
      .lean();

    return NextResponse.json({
      success: true,
      count: locations.length,
      locations,
    });
  } catch (error) {
    console.error("Get locations error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch locations",
      },
      { status: 500 },
    );
  }
}

/**
 * --------------------------------------------------
 * POST /api/admin/locations
 *
 * Create a new location
 * --------------------------------------------------
 */
export async function POST(request) {
  try {
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

    await connectMongoDB();

    const body = await request.json();

    /**
     * --------------------------------------------------
     * Basic Fields
     * --------------------------------------------------
     */

    const city = body.city?.trim();

    const slug = body.slug?.toLowerCase().trim();

    if (!city || !slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Location city and slug are required",
        },
        { status: 400 },
      );
    }

    /**
     * --------------------------------------------------
     * Check Duplicate Slug
     * --------------------------------------------------
     */

    const existingLocation = await Location.findOne({
      slug,
    });

    if (existingLocation) {
      return NextResponse.json(
        {
          success: false,
          message: "A location with this slug already exists",
        },
        { status: 409 },
      );
    }

    /**
     * --------------------------------------------------
     * Prepare Services
     * --------------------------------------------------
     */

    const services = Array.isArray(body.services)
      ? body.services.map((service) => String(service).trim()).filter(Boolean)
      : [];

    /**
     * --------------------------------------------------
     * Prepare Related Topics
     * --------------------------------------------------
     */

    const relatedTopics = Array.isArray(body.relatedTopics)
      ? body.relatedTopics.map((topic) => String(topic).trim()).filter(Boolean)
      : [];

    /**
     * --------------------------------------------------
     * Create Location
     * --------------------------------------------------
     */

    const location = await Location.create({
      slug,

      city,

      state: body.state?.trim() || "Maharashtra",

      country: body.country?.trim() || "India",

      services,

      title: body.title?.trim() || "",

      shortDescription: body.shortDescription?.trim() || "",

      description: body.description?.trim() || "",

      heroTitle: body.heroTitle?.trim() || "",

      heroSubtitle: body.heroSubtitle?.trim() || "",

      localContext: body.localContext?.trim() || "",

      locationDescription: body.locationDescription?.trim() || "",

      relatedTopics,

      isActive: typeof body.isActive === "boolean" ? body.isActive : true,

      sortOrder: typeof body.sortOrder === "number" ? body.sortOrder : 0,
    });

    /**
     * --------------------------------------------------
     * Success
     * --------------------------------------------------
     */

    return NextResponse.json(
      {
        success: true,
        message: "Location created successfully",
        location,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Create location error:", error);

    /**
     * --------------------------------------------------
     * MongoDB Duplicate Key
     * --------------------------------------------------
     */

    if (error?.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message: "A location with this slug already exists",
        },
        { status: 409 },
      );
    }

    /**
     * --------------------------------------------------
     * Server Error
     * --------------------------------------------------
     */

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create location",

        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}

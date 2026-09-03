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
 * GET /api/admin/service-locations
 *
 * Get all service locations
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

    const serviceLocations = await ServiceLocation.find({})
      .populate({
        path: "service",
        select: "name slug",
      })
      .populate({
        path: "location",
        select: "city slug state country",
      })
      .sort({
        sortOrder: 1,
        createdAt: 1,
      })
      .lean();

    return NextResponse.json({
      success: true,
      count: serviceLocations.length,
      serviceLocations,
    });
  } catch (error) {
    console.error("Get service locations error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch service locations",
      },
      { status: 500 },
    );
  }
}

/**
 * --------------------------------------------------
 * POST /api/admin/service-locations
 *
 * Create a new service location
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
     * Required Fields
     * --------------------------------------------------
     */

    const serviceId = body.serviceId?.trim();
    const locationId = body.locationId?.trim();

    if (!serviceId || !locationId) {
      return NextResponse.json(
        {
          success: false,
          message: "Service and location are required",
        },
        { status: 400 },
      );
    }

    /**
     * --------------------------------------------------
     * Find Service
     * --------------------------------------------------
     */

    const service = await Service.findById(serviceId);

    if (!service) {
      return NextResponse.json(
        {
          success: false,
          message: "Selected service was not found",
        },
        { status: 404 },
      );
    }

    /**
     * --------------------------------------------------
     * Find Location
     * --------------------------------------------------
     */

    const location = await Location.findById(locationId);

    if (!location) {
      return NextResponse.json(
        {
          success: false,
          message: "Selected location was not found",
        },
        { status: 404 },
      );
    }

    /**
     * --------------------------------------------------
     * Check Duplicate Service + Location
     * --------------------------------------------------
     */

    const existingServiceLocation = await ServiceLocation.findOne({
      service: serviceId,
      location: locationId,
    });

    if (existingServiceLocation) {
      return NextResponse.json(
        {
          success: false,
          message:
            "A service location for this service and location already exists",
        },
        { status: 409 },
      );
    }

    /**
     * --------------------------------------------------
     * Generate Public Slug
     *
     * Example:
     * website-development/mumbai
     * --------------------------------------------------
     */

    const slug = `${service.slug}/${location.slug}`.toLowerCase();

    /**
     * --------------------------------------------------
     * Check Slug
     * --------------------------------------------------
     */

    const existingSlug = await ServiceLocation.findOne({
      slug,
    });

    if (existingSlug) {
      return NextResponse.json(
        {
          success: false,
          message: "A service location with this URL already exists",
        },
        { status: 409 },
      );
    }

    /**
     * --------------------------------------------------
     * Prepare Keywords
     * --------------------------------------------------
     */

    const keywords = Array.isArray(body.keywords)
      ? body.keywords.map((keyword) => String(keyword).trim()).filter(Boolean)
      : [];

    /**
     * --------------------------------------------------
     * Prepare FAQs
     * --------------------------------------------------
     */

    const faqs = Array.isArray(body.faqs)
      ? body.faqs
          .map((faq) => ({
            question: String(faq?.question || "").trim(),
            answer: String(faq?.answer || "").trim(),
          }))
          .filter((faq) => faq.question && faq.answer)
      : [];

    /**
     * --------------------------------------------------
     * Create Service Location
     * --------------------------------------------------
     */

    const serviceLocation = await ServiceLocation.create({
      service: serviceId,

      location: locationId,

      slug,

      title: body.title?.trim() || "",

      metaTitle: body.metaTitle?.trim() || "",

      metaDescription: body.metaDescription?.trim() || "",

      keywords,

      heroTitle: body.heroTitle?.trim() || "",

      heroSubtitle: body.heroSubtitle?.trim() || "",

      shortDescription: body.shortDescription?.trim() || "",

      description: body.description?.trim() || "",

      localContext: body.localContext?.trim() || "",

      faqs,

      isActive: typeof body.isActive === "boolean" ? body.isActive : true,

      sortOrder: typeof body.sortOrder === "number" ? body.sortOrder : 0,
    });

    /**
     * --------------------------------------------------
     * Populate Response
     * --------------------------------------------------
     */

    await serviceLocation.populate([
      {
        path: "service",
        select: "name slug",
      },
      {
        path: "location",
        select: "city slug state country",
      },
    ]);

    /**
     * --------------------------------------------------
     * Success
     * --------------------------------------------------
     */

    return NextResponse.json(
      {
        success: true,
        message: "Service location created successfully",
        serviceLocation,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Create service location error:", error);

    /**
     * --------------------------------------------------
     * MongoDB Duplicate Key
     * --------------------------------------------------
     */

    if (error?.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message:
            "A service location with this service, location, or URL already exists",
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
        message: "Failed to create service location",

        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}

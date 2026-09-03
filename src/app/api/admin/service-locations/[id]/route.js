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
 * GET
 * /api/admin/service-locations/[id]
 *
 * Get one service location
 * --------------------------------------------------
 */
export async function GET(request, { params }) {
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

    const { id } = await params;

    const serviceLocation = await ServiceLocation.findById(id)
      .populate({
        path: "service",
        select: "name slug",
      })
      .populate({
        path: "location",
        select: "city slug state country",
      })
      .lean();

    if (!serviceLocation) {
      return NextResponse.json(
        {
          success: false,
          message: "Service location not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      serviceLocation,
    });
  } catch (error) {
    console.error("Get service location error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch service location",
      },
      { status: 500 },
    );
  }
}

/**
 * --------------------------------------------------
 * PUT
 * /api/admin/service-locations/[id]
 *
 * Update one service location
 * --------------------------------------------------
 */
export async function PUT(request, { params }) {
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

    const { id } = await params;

    const body = await request.json();

    /**
     * --------------------------------------------------
     * Required Fields
     * --------------------------------------------------
     */

    const serviceId =
      typeof body.serviceId === "string" ? body.serviceId.trim() : "";

    const locationId =
      typeof body.locationId === "string" ? body.locationId.trim() : "";

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
     * Find Existing Service Location
     * --------------------------------------------------
     */

    const existingServiceLocation = await ServiceLocation.findById(id);

    if (!existingServiceLocation) {
      return NextResponse.json(
        {
          success: false,
          message: "Service location not found",
        },
        { status: 404 },
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
     *
     * Ignore the current document.
     * --------------------------------------------------
     */

    const duplicate = await ServiceLocation.findOne({
      _id: { $ne: id },
      service: serviceId,
      location: locationId,
    });

    if (duplicate) {
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
     * Generate Slug
     *
     * Example:
     * website-development/mumbai
     * --------------------------------------------------
     */

    const slug = `${service.slug}/${location.slug}`.toLowerCase();

    /**
     * --------------------------------------------------
     * Check Duplicate Slug
     * --------------------------------------------------
     */

    const duplicateSlug = await ServiceLocation.findOne({
      _id: { $ne: id },
      slug,
    });

    if (duplicateSlug) {
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
     * Update Service Location
     * --------------------------------------------------
     */

    existingServiceLocation.service = serviceId;

    existingServiceLocation.location = locationId;

    existingServiceLocation.slug = slug;

    existingServiceLocation.title =
      typeof body.title === "string" ? body.title.trim() : "";

    existingServiceLocation.metaTitle =
      typeof body.metaTitle === "string" ? body.metaTitle.trim() : "";

    existingServiceLocation.metaDescription =
      typeof body.metaDescription === "string"
        ? body.metaDescription.trim()
        : "";

    existingServiceLocation.keywords = keywords;

    existingServiceLocation.heroTitle =
      typeof body.heroTitle === "string" ? body.heroTitle.trim() : "";

    existingServiceLocation.heroSubtitle =
      typeof body.heroSubtitle === "string" ? body.heroSubtitle.trim() : "";

    existingServiceLocation.shortDescription =
      typeof body.shortDescription === "string"
        ? body.shortDescription.trim()
        : "";

    existingServiceLocation.description =
      typeof body.description === "string" ? body.description.trim() : "";

    existingServiceLocation.localContext =
      typeof body.localContext === "string" ? body.localContext.trim() : "";

    existingServiceLocation.faqs = faqs;

    existingServiceLocation.isActive =
      typeof body.isActive === "boolean"
        ? body.isActive
        : existingServiceLocation.isActive;

    existingServiceLocation.sortOrder =
      typeof body.sortOrder === "number"
        ? body.sortOrder
        : Number(body.sortOrder) || 0;

    await existingServiceLocation.save();

    /**
     * --------------------------------------------------
     * Populate Updated Response
     * --------------------------------------------------
     */

    await existingServiceLocation.populate([
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

    return NextResponse.json({
      success: true,
      message: "Service location updated successfully",
      serviceLocation: existingServiceLocation,
    });
  } catch (error) {
    console.error("Update service location error:", error);

    /**
     * MongoDB Duplicate Key
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

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update service location",

        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}

/**
 * --------------------------------------------------
 * DELETE
 * /api/admin/service-locations/[id]
 *
 * Delete one service location
 * --------------------------------------------------
 */
export async function DELETE(request, { params }) {
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

    const { id } = await params;

    const serviceLocation = await ServiceLocation.findById(id);

    if (!serviceLocation) {
      return NextResponse.json(
        {
          success: false,
          message: "Service location not found",
        },
        { status: 404 },
      );
    }

    await ServiceLocation.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Service location deleted successfully",
    });
  } catch (error) {
    console.error("Delete service location error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete service location",

        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}

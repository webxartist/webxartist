import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import connectMongoDB from "@/lib/mongodb";
import Service from "@/models/Services";

import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/adminAuth";

export const runtime = "nodejs";

/**
 * Check admin authentication
 */
function getAdmin() {
  const cookieStore = cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  return verifyAdminSessionToken(token);
}

/**
 * GET
 * Return all services
 */
export async function GET() {
  try {
    const admin = getAdmin();

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

    const services = await Service.find({})
      .sort({ sortOrder: 1, createdAt: 1 })
      .lean();

    return NextResponse.json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    console.error("Get services error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch services",
      },
      { status: 500 },
    );
  }
}

/**
 * POST
 * Create a new service
 */
export async function POST(request) {
  try {
    const admin = getAdmin();

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

    if (!body.name || !body.slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Service name and slug are required",
        },
        { status: 400 },
      );
    }

    const slug = body.slug.toLowerCase().trim();

    const existingService = await Service.findOne({ slug });

    if (existingService) {
      return NextResponse.json(
        {
          success: false,
          message: "A service with this slug already exists",
        },
        { status: 409 },
      );
    }

    const service = await Service.create({
      ...body,

      name: body.name.trim(),

      slug,

      isActive: typeof body.isActive === "boolean" ? body.isActive : true,

      sortOrder: typeof body.sortOrder === "number" ? body.sortOrder : 0,

      benefits: Array.isArray(body.benefits)
        ? body.benefits.filter(Boolean)
        : [],

      locations: Array.isArray(body.locations)
        ? body.locations.filter(Boolean)
        : [],

      features: Array.isArray(body.features) ? body.features : [],

      process: Array.isArray(body.process) ? body.process : [],

      technologies: Array.isArray(body.technologies) ? body.technologies : [],

      faqs: Array.isArray(body.faqs) ? body.faqs : [],

      seo: {
        title: body.seo?.title || "",
        description: body.seo?.description || "",
        keywords: Array.isArray(body.seo?.keywords)
          ? body.seo.keywords.filter(Boolean)
          : [],
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Service created successfully",
        service,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Create service error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create service",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}

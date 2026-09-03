import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import connectMongoDB from "@/lib/mongodb";
import Service from "@/models/Services";

import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/adminAuth";

export const runtime = "nodejs";

function authenticateAdmin() {
  const cookieStore = cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  return verifyAdminSessionToken(token);
}

/**
 * GET /api/admin/services
 *
 * Get all services
 */
export async function GET() {
  try {
    const admin = authenticateAdmin();

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
      .sort({ sortOrder: 1, createdAt: -1 })
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
 * POST /api/admin/services
 *
 * Create a new service
 */
export async function POST(request) {
  try {
    const admin = authenticateAdmin();

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
      slug,
      isActive: typeof body.isActive === "boolean" ? body.isActive : true,
      sortOrder: typeof body.sortOrder === "number" ? body.sortOrder : 0,
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
      },
      { status: 500 },
    );
  }
}

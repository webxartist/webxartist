import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import connectMongoDB from "@/lib/mongodb";
import Service from "@/models/Services";

import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/adminAuth";

export const runtime = "nodejs";

/**
 * Authenticate admin
 */
function authenticateAdmin() {
  const cookieStore = cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  return verifyAdminSessionToken(token);
}

/**
 * GET /api/admin/services/[id]
 *
 * Get one service
 */
export async function GET(request, { params }) {
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

    const service = await Service.findById(params.id).lean();

    if (!service) {
      return NextResponse.json(
        {
          success: false,
          message: "Service not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      service,
    });
  } catch (error) {
    console.error("Get service error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch service",
      },
      { status: 500 },
    );
  }
}

/**
 * PUT /api/admin/services/[id]
 *
 * Update service
 */
export async function PUT(request, { params }) {
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

    const existingService = await Service.findOne({
      slug: body.slug.toLowerCase().trim(),
      _id: { $ne: params.id },
    });

    if (existingService) {
      return NextResponse.json(
        {
          success: false,
          message: "Another service already uses this slug",
        },
        { status: 409 },
      );
    }

    const service = await Service.findByIdAndUpdate(
      params.id,
      {
        ...body,
        slug: body.slug.toLowerCase().trim(),
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!service) {
      return NextResponse.json(
        {
          success: false,
          message: "Service not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Service updated successfully",
      service,
    });
  } catch (error) {
    console.error("Update service error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update service",
      },
      { status: 500 },
    );
  }
}

/**
 * DELETE /api/admin/services/[id]
 *
 * Delete service
 */
export async function DELETE(request, { params }) {
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

    const service = await Service.findByIdAndDelete(params.id);

    if (!service) {
      return NextResponse.json(
        {
          success: false,
          message: "Service not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    console.error("Delete service error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete service",
      },
      { status: 500 },
    );
  }
}

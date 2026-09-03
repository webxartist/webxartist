import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import mongoose from "mongoose";

import connectMongoDB from "@/lib/mongodb";
import Location from "@/models/Location";

import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/adminAuth";

export const runtime = "nodejs";

// --------------------------------------------------
// AUTHENTICATE ADMIN
// --------------------------------------------------

async function authenticateAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  return verifyAdminSessionToken(token);
}

// --------------------------------------------------
// GET SINGLE LOCATION
// GET /api/admin/locations/:id
// --------------------------------------------------

export async function GET(request, { params }) {
  try {
    // Authenticate
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

    // Validate MongoDB ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid location ID",
        },
        { status: 400 },
      );
    }

    const location = await Location.findById(id).lean();

    if (!location) {
      return NextResponse.json(
        {
          success: false,
          message: "Location not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      location,
    });
  } catch (error) {
    console.error("Get location error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch location",
      },
      { status: 500 },
    );
  }
}

// --------------------------------------------------
// PUT SINGLE LOCATION
// PUT /api/admin/locations/:id
// --------------------------------------------------

export async function PUT(request, { params }) {
  try {
    // Authenticate
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

    // Validate MongoDB ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid location ID",
        },
        { status: 400 },
      );
    }

    const body = await request.json();

    // --------------------------------------------------
    // BASIC FIELDS
    // --------------------------------------------------

    const name = body.name?.trim() || "";
    const slug = body.slug?.toLowerCase().trim();

    const city = body.city?.trim() || "";
    const state = body.state?.trim() || "Maharashtra";
    const country = body.country?.trim() || "India";

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Location slug is required",
        },
        { status: 400 },
      );
    }

    // --------------------------------------------------
    // CHECK DUPLICATE SLUG
    // --------------------------------------------------

    const existingLocation = await Location.findOne({
      slug,
      _id: { $ne: id },
    });

    if (existingLocation) {
      return NextResponse.json(
        {
          success: false,
          message: "Another location already uses this slug",
        },
        { status: 409 },
      );
    }

    // --------------------------------------------------
    // UPDATE DATA
    // --------------------------------------------------

    const updateData = {
      name,

      slug,

      city,

      state,

      country,

      services: Array.isArray(body.services)
        ? body.services.map((service) => String(service).trim()).filter(Boolean)
        : [],

      title: body.title?.trim() || "",

      shortDescription: body.shortDescription?.trim() || "",

      description: body.description?.trim() || "",

      heroTitle: body.heroTitle?.trim() || "",

      heroSubtitle: body.heroSubtitle?.trim() || "",

      localContext: body.localContext?.trim() || "",

      locationDescription: body.locationDescription?.trim() || "",

      relatedTopics: Array.isArray(body.relatedTopics)
        ? body.relatedTopics
            .map((topic) => String(topic).trim())
            .filter(Boolean)
        : [],

      seo: {
        title: body.seo?.title?.trim() || "",

        description: body.seo?.description?.trim() || "",

        keywords: Array.isArray(body.seo?.keywords)
          ? body.seo.keywords
              .map((keyword) => String(keyword).trim())
              .filter(Boolean)
          : [],
      },

      isActive: typeof body.isActive === "boolean" ? body.isActive : true,

      sortOrder: typeof body.sortOrder === "number" ? body.sortOrder : 0,
    };

    // --------------------------------------------------
    // UPDATE MONGODB
    // --------------------------------------------------

    const location = await Location.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!location) {
      return NextResponse.json(
        {
          success: false,
          message: "Location not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Location updated successfully",
      location,
    });
  } catch (error) {
    console.error("Update location error:", error);

    // MongoDB duplicate key
    if (error?.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message: "A location with this slug already exists",
        },
        { status: 409 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          process.env.NODE_ENV === "development"
            ? error?.message
            : "Failed to update location",
      },
      { status: 500 },
    );
  }
}

// --------------------------------------------------
// DELETE SINGLE LOCATION
// DELETE /api/admin/locations/:id
// --------------------------------------------------

export async function DELETE(request, { params }) {
  try {
    // Authenticate
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

    // Validate MongoDB ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid location ID",
        },
        { status: 400 },
      );
    }

    const location = await Location.findByIdAndDelete(id);

    if (!location) {
      return NextResponse.json(
        {
          success: false,
          message: "Location not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Location deleted successfully",
      location,
    });
  } catch (error) {
    console.error("Delete location error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete location",
      },
      { status: 500 },
    );
  }
}

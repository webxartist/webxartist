import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Location from "@/models/Location";

// GET ALL LOCATIONS
export async function GET() {
  try {
    await dbConnect();

    const locations = await Location.find({}).sort({ createdAt: -1 }).lean();

    return NextResponse.json({
      success: true,
      locations,
    });
  } catch (error) {
    console.error("GET /api/admin/locations error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch locations",
        error: error.message,
      },
      { status: 500 },
    );
  }
}

// CREATE LOCATION
export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();

    const { name, slug, city, state, country, shortDescription, description } =
      body;

    if (!name || !slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and slug are required",
        },
        { status: 400 },
      );
    }

    const existingLocation = await Location.findOne({ slug });

    if (existingLocation) {
      return NextResponse.json(
        {
          success: false,
          message: "A location with this slug already exists",
        },
        { status: 409 },
      );
    }

    const location = await Location.create({
      name,
      slug,
      city,
      state,
      country,
      shortDescription,
      description,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Location created successfully",
        location,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /api/admin/locations error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create location",
        error: error.message,
      },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import connectMongoDB from "@/lib/mongodb";
import Service from "@/models/Services";
import services from "@/data/services";

import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/adminAuth";

export const runtime = "nodejs";

export async function POST() {
  try {
    // Check admin session
    const cookieStore = cookies();
    const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

    const admin = verifyAdminSessionToken(token);

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 },
      );
    }

    // Connect MongoDB
    await connectMongoDB();

    if (!Array.isArray(services) || services.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No services found in src/data/services.js",
        },
        { status: 400 },
      );
    }

    const results = [];

    for (let index = 0; index < services.length; index++) {
      const serviceData = services[index];

      if (!serviceData.slug || !serviceData.name) {
        results.push({
          success: false,
          name: serviceData.name || "Unknown",
          message: "Missing name or slug",
        });

        continue;
      }

      const service = await Service.findOneAndUpdate(
        {
          slug: serviceData.slug.toLowerCase().trim(),
        },
        {
          ...serviceData,

          slug: serviceData.slug.toLowerCase().trim(),

          isActive:
            typeof serviceData.isActive === "boolean"
              ? serviceData.isActive
              : true,

          sortOrder:
            typeof serviceData.sortOrder === "number"
              ? serviceData.sortOrder
              : index + 1,
        },
        {
          new: true,
          upsert: true,
          runValidators: true,
          setDefaultsOnInsert: true,
        },
      );

      results.push({
        success: true,
        id: service._id,
        name: service.name,
        slug: service.slug,
      });
    }

    return NextResponse.json({
      success: true,
      message: `${results.filter((item) => item.success).length} services imported successfully`,
      total: services.length,
      results,
    });
  } catch (error) {
    console.error("Service import error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Service import failed",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}

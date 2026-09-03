import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import connectMongoDB from "@/lib/mongodb";
import Admin from "@/models/Admin";

import {
  createAdminSessionToken,
  setAdminSessionCookie,
} from "@/lib/adminAuth";

export async function POST(request) {
  try {
    await connectMongoDB();

    const body = await request.json();

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and password are required.",
        },
        { status: 400 },
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    const admin = await Admin.findOne({
      email: normalizedEmail,
    }).select("+password");

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password.",
        },
        { status: 401 },
      );
    }

    if (!admin.isActive) {
      return NextResponse.json(
        {
          success: false,
          message: "This admin account is inactive.",
        },
        { status: 403 },
      );
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password.",
        },
        { status: 401 },
      );
    }

    // Update last login
    admin.lastLoginAt = new Date();
    await admin.save();

    // Create secure session
    const sessionToken = createAdminSessionToken(admin._id.toString());

    // Store session in HTTP-only cookie
    setAdminSessionCookie(sessionToken);

    return NextResponse.json({
      success: true,
      message: "Login successful.",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Admin login error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 },
    );
  }
}

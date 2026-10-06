import { NextResponse } from "next/server";

import {
  ADMIN_SESSION_COOKIE,
  verifyAdminSessionToken,
} from "@/lib/adminAuthEdge";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow admin login page
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Protect all other admin pages
  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;

    const session = await verifyAdminSessionToken(token);

    if (!session) {
      const loginUrl = new URL("/admin/login", request.url);

      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

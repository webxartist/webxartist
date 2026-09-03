import crypto from "crypto";
import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "webxartist_admin_session";

const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET;

if (!SESSION_SECRET) {
  throw new Error("Please define ADMIN_SESSION_SECRET in .env.local");
}

const SESSION_DURATION = 1000 * 60 * 60 * 24 * 7;

/**
 * Create a signed admin session token.
 */
export function createAdminSessionToken(adminId) {
  const timestamp = Date.now().toString();

  const data = `${adminId}.${timestamp}`;

  const signature = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(data)
    .digest("hex");

  return `${data}.${signature}`;
}

/**
 * Set secure HTTP-only admin session cookie.
 */
export function setAdminSessionCookie(token) {
  const cookieStore = cookies();

  cookieStore.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

/**
 * Clear admin session cookie.
 */
export function clearAdminSessionCookie() {
  const cookieStore = cookies();

  cookieStore.set(ADMIN_SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

/**
 * Verify admin session token.
 *
 * This function is for Node.js/server-side usage.
 * Middleware uses adminAuthEdge.js instead.
 */
export function verifyAdminSessionToken(token) {
  if (!token) {
    return null;
  }

  const parts = token.split(".");

  if (parts.length !== 3) {
    return null;
  }

  const [adminId, timestamp, signature] = parts;

  if (!adminId || !timestamp || !signature) {
    return null;
  }

  const data = `${adminId}.${timestamp}`;

  const expectedSignature = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(data)
    .digest("hex");

  if (signature.length !== expectedSignature.length) {
    return null;
  }

  const validSignature = crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature),
  );

  if (!validSignature) {
    return null;
  }

  const sessionAge = Date.now() - Number(timestamp);

  if (
    !Number.isFinite(sessionAge) ||
    sessionAge < 0 ||
    sessionAge > SESSION_DURATION
  ) {
    return null;
  }

  return {
    adminId,
  };
}

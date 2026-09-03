export const ADMIN_SESSION_COOKIE = "webxartist_admin_session";

const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET;

const SESSION_DURATION = 1000 * 60 * 60 * 24 * 7;

function arrayBufferToHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function createHmacKey() {
  if (!SESSION_SECRET) {
    throw new Error("Please define ADMIN_SESSION_SECRET in .env.local");
  }

  const encoder = new TextEncoder();

  return crypto.subtle.importKey(
    "raw",
    encoder.encode(SESSION_SECRET),
    {
      name: "HMAC",
      hash: "SHA-256",
    },
    false,
    ["sign"],
  );
}

export async function verifyAdminSessionToken(token) {
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

  const timestampNumber = Number(timestamp);

  if (!Number.isFinite(timestampNumber)) {
    return null;
  }

  const sessionAge = Date.now() - timestampNumber;

  if (sessionAge < 0 || sessionAge > SESSION_DURATION) {
    return null;
  }

  try {
    const data = `${adminId}.${timestamp}`;

    const encoder = new TextEncoder();

    const key = await createHmacKey();

    const signatureBuffer = await crypto.subtle.sign(
      "HMAC",
      key,
      encoder.encode(data),
    );

    const expectedSignature = arrayBufferToHex(signatureBuffer);

    if (signature !== expectedSignature) {
      return null;
    }

    return {
      adminId,
    };
  } catch (error) {
    console.error("Admin session verification error:", error);

    return null;
  }
}

"use client";

import { useState } from "react";

export default function ServicesImportButton() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleImport() {
    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("/api/admin/services/import", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Import failed");
      }

      setMessage(data.message);
    } catch (error) {
      setMessage(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleImport}
        disabled={loading}
        className="rounded-lg bg-black px-5 py-3 text-white disabled:opacity-50"
      >
        {loading ? "Importing..." : "Import Services"}
      </button>

      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
}

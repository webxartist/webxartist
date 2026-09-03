"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function LocationsPage() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [importing, setImporting] = useState(false);

  // --------------------------------------------------
  // FETCH LOCATIONS
  // --------------------------------------------------

  const fetchLocations = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/admin/locations", {
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to load locations");
      }

      setLocations(data.locations || []);
    } catch (err) {
      console.error("Fetch locations error:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  // --------------------------------------------------
  // IMPORT LOCATIONS
  // --------------------------------------------------

  const handleImport = async () => {
    const confirmed = window.confirm(
      "Import all locations from the static location data into MongoDB?\n\nExisting locations with the same slug will be updated.",
    );

    if (!confirmed) return;

    try {
      setImporting(true);
      setError("");

      const res = await fetch("/api/admin/locations/import", {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to import locations");
      }

      alert(
        `Locations imported successfully.\n\nTotal: ${
          data.total ?? 0
        }\nInserted: ${data.inserted ?? 0}\nUpdated: ${data.updated ?? 0}`,
      );

      await fetchLocations();
    } catch (err) {
      console.error("Import locations error:", err);

      setError(err.message || "Failed to import locations");
    } finally {
      setImporting(false);
    }
  };

  // --------------------------------------------------
  // DELETE LOCATION
  // --------------------------------------------------

  const handleDelete = async (id, name) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${name}"?\n\nThis action cannot be undone.`,
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);
      setError("");

      const res = await fetch(`/api/admin/locations/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to delete location");
      }

      setLocations((prev) => prev.filter((location) => location._id !== id));
    } catch (err) {
      console.error("Delete location error:", err);

      setError(err.message || "Failed to delete location");
    } finally {
      setDeletingId(null);
    }
  };

  // --------------------------------------------------
  // LOADING
  // --------------------------------------------------

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="mb-2 text-2xl font-bold">Locations</h1>

        <p className="text-gray-500">Loading locations...</p>
      </div>
    );
  }

  // --------------------------------------------------
  // INITIAL ERROR
  // --------------------------------------------------

  if (error && locations.length === 0) {
    return (
      <div className="p-6">
        <h1 className="mb-4 text-2xl font-bold">Locations</h1>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>

        <button
          onClick={fetchLocations}
          className="mt-4 rounded-lg bg-black px-5 py-2 text-white hover:bg-gray-800"
        >
          Try Again
        </button>
      </div>
    );
  }

  // --------------------------------------------------
  // PAGE
  // --------------------------------------------------

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Locations</h1>

          <p className="mt-1 text-gray-500">Manage your business locations.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {/* REFRESH */}
          <button
            type="button"
            onClick={fetchLocations}
            disabled={loading || importing}
            className="rounded-lg border px-5 py-3 font-medium hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Refresh
          </button>

          {/* IMPORT */}
          <button
            type="button"
            onClick={handleImport}
            disabled={importing}
            className="rounded-lg border border-blue-200 bg-blue-50 px-5 py-3 font-medium text-blue-700 hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {importing ? "Importing..." : "Import Locations"}
          </button>

          {/* ADD */}
          <Link
            href="/admin/dashboard/locations/new"
            className="rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
          >
            + Add Location
          </Link>
        </div>
      </div>

      {/* ERROR */}
      {error && (
        <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* LOCATION COUNT */}
      {locations.length > 0 && (
        <div className="mb-4 text-sm text-gray-500">
          Total locations:{" "}
          <span className="font-semibold text-gray-800">
            {locations.length}
          </span>
        </div>
      )}

      {/* EMPTY STATE */}
      {locations.length === 0 ? (
        <div className="rounded-xl border bg-white p-10 text-center">
          <h2 className="text-lg font-semibold">No locations found</h2>

          <p className="mt-2 text-gray-500">
            Import your existing locations or add your first location.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={handleImport}
              disabled={importing}
              className="rounded-lg border px-5 py-3 font-medium hover:bg-gray-50 disabled:opacity-50"
            >
              {importing ? "Importing..." : "Import Locations"}
            </button>

            <Link
              href="/admin/dashboard/locations/new"
              className="rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
            >
              + Add Location
            </Link>
          </div>
        </div>
      ) : (
        /* TABLE */
        <div className="overflow-hidden rounded-xl border bg-white">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    Name
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    Slug
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    City
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    State
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    Status
                  </th>

                  <th className="px-5 py-4 text-right text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {locations.map((location) => (
                  <tr key={location._id} className="hover:bg-gray-50">
                    {/* NAME */}
                    <td className="px-5 py-4">
                      <div className="font-medium">
                        {location.name || location.city || "Untitled"}
                      </div>
                    </td>

                    {/* SLUG */}
                    <td className="px-5 py-4">
                      <span className="text-sm text-gray-500">
                        {location.slug || "-"}
                      </span>
                    </td>

                    {/* CITY */}
                    <td className="px-5 py-4">{location.city || "-"}</td>

                    {/* STATE */}
                    <td className="px-5 py-4">{location.state || "-"}</td>

                    {/* STATUS */}
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          location.isActive === false
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {location.isActive === false ? "Inactive" : "Active"}
                      </span>
                    </td>

                    {/* ACTIONS */}
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        {/* EDIT */}
                        <Link
                          href={`/admin/dashboard/locations/${location._id}/edit`}
                          className="inline-flex rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100"
                        >
                          Edit
                        </Link>

                        {/* DELETE */}
                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(
                              location._id,
                              location.name || location.city || "this location",
                            )
                          }
                          disabled={deletingId === location._id}
                          className="inline-flex rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {deletingId === location._id
                            ? "Deleting..."
                            : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

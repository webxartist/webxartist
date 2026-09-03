"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ServiceLocationsPage() {
  const [serviceLocations, setServiceLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [importing, setImporting] = useState(false);

  // --------------------------------------------------
  // FETCH SERVICE LOCATIONS
  // --------------------------------------------------

  const fetchServiceLocations = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/admin/service-locations", {
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to load service locations");
      }

      setServiceLocations(data.serviceLocations || []);
    } catch (err) {
      console.error("Fetch service locations error:", err);

      setError(
        err.message || "Something went wrong while loading service locations",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServiceLocations();
  }, []);

  // --------------------------------------------------
  // IMPORT SERVICE LOCATIONS
  // --------------------------------------------------

  const handleImport = async () => {
    const confirmed = window.confirm(
      "Import service locations from your existing services and locations?\n\nExisting service-location combinations will be skipped.",
    );

    if (!confirmed) return;

    try {
      setImporting(true);
      setError("");

      const res = await fetch("/api/admin/service-locations/import", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to import service locations");
      }

      alert(
        `Service locations imported successfully.\n\nRequested: ${
          data.totalRequested ?? 0
        }\nCreated: ${data.created ?? 0}\nSkipped: ${data.skipped ?? 0}`,
      );

      await fetchServiceLocations();
    } catch (err) {
      console.error("Import service locations error:", err);

      setError(err.message || "Failed to import service locations");
    } finally {
      setImporting(false);
    }
  };

  // --------------------------------------------------
  // DELETE SERVICE LOCATION
  // --------------------------------------------------

  const handleDelete = async (id, name) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${name}"?\n\nThis action cannot be undone.`,
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);
      setError("");

      const res = await fetch(`/api/admin/service-locations/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to delete service location");
      }

      setServiceLocations((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Delete service location error:", err);

      setError(err.message || "Failed to delete service location");
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
        <h1 className="mb-2 text-2xl font-bold">Service Locations</h1>

        <p className="text-gray-500">Loading service locations...</p>
      </div>
    );
  }

  // --------------------------------------------------
  // INITIAL ERROR
  // --------------------------------------------------

  if (error && serviceLocations.length === 0) {
    return (
      <div className="p-6">
        <h1 className="mb-4 text-2xl font-bold">Service Locations</h1>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>

        <button
          type="button"
          onClick={fetchServiceLocations}
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
          <h1 className="text-2xl font-bold">Service Locations</h1>

          <p className="mt-1 text-gray-500">
            Manage service pages for specific locations.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {/* REFRESH */}
          <button
            type="button"
            onClick={fetchServiceLocations}
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
            {importing ? "Importing..." : "Import Service Locations"}
          </button>

          {/* ADD */}
          <Link
            href="/admin/dashboard/service-location/new"
            className="rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
          >
            + Add Service Location
          </Link>
        </div>
      </div>

      {/* ERROR */}
      {error && (
        <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* COUNT */}
      {serviceLocations.length > 0 && (
        <div className="mb-4 text-sm text-gray-500">
          Total service locations:{" "}
          <span className="font-semibold text-gray-800">
            {serviceLocations.length}
          </span>
        </div>
      )}

      {/* EMPTY STATE */}
      {serviceLocations.length === 0 ? (
        <div className="rounded-xl border bg-white p-10 text-center">
          <h2 className="text-lg font-semibold">No service locations found</h2>

          <p className="mt-2 text-gray-500">
            Import your existing service locations or add your first service
            location.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            {/* IMPORT */}
            <button
              type="button"
              onClick={handleImport}
              disabled={importing}
              className="rounded-lg border border-blue-200 bg-blue-50 px-5 py-3 font-medium text-blue-700 hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {importing ? "Importing..." : "Import Service Locations"}
            </button>

            {/* ADD */}
            <Link
              href="/admin/dashboard/service-location/new"
              className="rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
            >
              + Add Service Location
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
                    Service
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    Location
                  </th>

                  <th className="px-5 py-4 text-left text-sm font-semibold">
                    URL
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
                {serviceLocations.map((item) => {
                  const serviceName = item.service?.name || "Unknown Service";

                  const locationName =
                    item.location?.city || "Unknown Location";

                  const serviceSlug = item.service?.slug || "";

                  const locationSlug = item.location?.slug || "";

                  const pageUrl =
                    serviceSlug && locationSlug
                      ? `/services/${serviceSlug}/${locationSlug}`
                      : item.slug
                        ? `/services/${item.slug}`
                        : "-";

                  const displayName = `${serviceName} - ${locationName}`;

                  return (
                    <tr key={item._id} className="hover:bg-gray-50">
                      {/* SERVICE */}
                      <td className="px-5 py-4">
                        <div className="font-medium">{serviceName}</div>

                        {serviceSlug && (
                          <div className="mt-1 text-xs text-gray-500">
                            {serviceSlug}
                          </div>
                        )}
                      </td>

                      {/* LOCATION */}
                      <td className="px-5 py-4">
                        <div className="font-medium">{locationName}</div>

                        {item.location?.state && (
                          <div className="mt-1 text-xs text-gray-500">
                            {item.location.state}
                          </div>
                        )}
                      </td>

                      {/* URL */}
                      <td className="px-5 py-4">
                        <span className="text-sm text-gray-500">{pageUrl}</span>
                      </td>

                      {/* STATUS */}
                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            item.isActive === false
                              ? "bg-red-100 text-red-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {item.isActive === false ? "Inactive" : "Active"}
                        </span>
                      </td>

                      {/* ACTIONS */}
                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">
                          {/* EDIT */}
                          <Link
                            href={`/admin/dashboard/service-location/${item._id}/edit`}
                            className="inline-flex rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100"
                          >
                            Edit
                          </Link>

                          {/* DELETE */}
                          <button
                            type="button"
                            onClick={() => handleDelete(item._id, displayName)}
                            disabled={deletingId === item._id}
                            className="inline-flex rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {deletingId === item._id ? "Deleting..." : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

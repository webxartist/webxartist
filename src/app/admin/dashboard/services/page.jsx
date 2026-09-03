"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [importing, setImporting] = useState(false);

  // --------------------------------------------------
  // FETCH SERVICES
  // --------------------------------------------------

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/admin/services", {
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to load services");
      }

      setServices(data.services || []);
    } catch (err) {
      console.error("Fetch services error:", err);

      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // --------------------------------------------------
  // IMPORT SERVICES
  // --------------------------------------------------

  const handleImport = async () => {
    const confirmed = window.confirm(
      "Import all services from the static service data into MongoDB?\n\nExisting services with the same slug will be updated.",
    );

    if (!confirmed) return;

    try {
      setImporting(true);
      setError("");

      const res = await fetch("/api/admin/services/import", {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to import services");
      }

      alert(
        `Services imported successfully.\n\nTotal: ${
          data.total ?? 0
        }\nInserted: ${data.inserted ?? 0}\nUpdated: ${data.updated ?? 0}`,
      );

      await fetchServices();
    } catch (err) {
      console.error("Import services error:", err);

      setError(err.message || "Failed to import services");
    } finally {
      setImporting(false);
    }
  };

  // --------------------------------------------------
  // DELETE SERVICE
  // --------------------------------------------------

  const handleDelete = async (id, name) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${name}"?\n\nThis action cannot be undone.`,
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);
      setError("");

      const res = await fetch(`/api/admin/services/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to delete service");
      }

      setServices((prev) => prev.filter((service) => service._id !== id));
    } catch (err) {
      console.error("Delete service error:", err);

      setError(err.message || "Failed to delete service");
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
        <h1 className="mb-2 text-2xl font-bold">Services</h1>

        <p className="text-gray-500">Loading services...</p>
      </div>
    );
  }

  // --------------------------------------------------
  // INITIAL ERROR
  // --------------------------------------------------

  if (error && services.length === 0) {
    return (
      <div className="p-6">
        <h1 className="mb-4 text-2xl font-bold">Services</h1>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>

        <button
          onClick={fetchServices}
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
          <h1 className="text-2xl font-bold">Services</h1>

          <p className="mt-1 text-gray-500">Manage your business services.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {/* REFRESH */}
          <button
            type="button"
            onClick={fetchServices}
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
            {importing ? "Importing..." : "Import Services"}
          </button>

          {/* ADD */}
          <Link
            href="/admin/dashboard/services/new"
            className="rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
          >
            + Add Service
          </Link>
        </div>
      </div>

      {/* ERROR */}
      {error && (
        <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* SERVICE COUNT */}
      {services.length > 0 && (
        <div className="mb-4 text-sm text-gray-500">
          Total services:{" "}
          <span className="font-semibold text-gray-800">{services.length}</span>
        </div>
      )}

      {/* EMPTY STATE */}
      {services.length === 0 ? (
        <div className="rounded-xl border bg-white p-10 text-center">
          <h2 className="text-lg font-semibold">No services found</h2>

          <p className="mt-2 text-gray-500">
            Import your existing services or add your first service.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={handleImport}
              disabled={importing}
              className="rounded-lg border px-5 py-3 font-medium hover:bg-gray-50 disabled:opacity-50"
            >
              {importing ? "Importing..." : "Import Services"}
            </button>

            <Link
              href="/admin/dashboard/services/new"
              className="rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
            >
              + Add Service
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
                    Category
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
                {services.map((service) => (
                  <tr key={service._id} className="hover:bg-gray-50">
                    {/* NAME */}
                    <td className="px-5 py-4">
                      <div className="font-medium">
                        {service.name || "Untitled"}
                      </div>
                    </td>

                    {/* SLUG */}
                    <td className="px-5 py-4">
                      <span className="text-sm text-gray-500">
                        {service.slug || "-"}
                      </span>
                    </td>

                    {/* CATEGORY */}
                    <td className="px-5 py-4">{service.category || "-"}</td>

                    {/* STATUS */}
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          service.isActive === false
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {service.isActive === false ? "Inactive" : "Active"}
                      </span>
                    </td>

                    {/* ACTIONS */}
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        {/* EDIT */}
                        <Link
                          href={`/admin/dashboard/services/${service._id}/edit`}
                          className="inline-flex rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100"
                        >
                          Edit
                        </Link>

                        {/* DELETE */}
                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(
                              service._id,
                              service.name || "this service",
                            )
                          }
                          disabled={deletingId === service._id}
                          className="inline-flex rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {deletingId === service._id
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

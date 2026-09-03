"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditLocationPage() {
  const params = useParams();
  const router = useRouter();

  const id = params?.id;

  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchLocation = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`/api/admin/locations/${id}`);

        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.message || "Failed to load location");
        }

        setLocation(data.location);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLocation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");

      const res = await fetch(`/api/admin/locations/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(location),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to update location");
      }

      alert("Location updated successfully.");

      router.push("/admin/dashboard/locations");
      router.refresh();
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-6">Loading location...</div>;
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      </div>
    );
  }

  if (!location) {
    return <div className="p-6">Location not found.</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Location</h1>

        <p className="text-gray-500">Update location information.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
        <div>
          <label className="mb-2 block font-medium">Name</label>

          <input
            type="text"
            name="name"
            value={location.name || ""}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Slug</label>

          <input
            type="text"
            name="slug"
            value={location.slug || ""}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">City</label>

          <input
            type="text"
            name="city"
            value={location.city || ""}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">State</label>

          <input
            type="text"
            name="state"
            value={location.state || ""}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Country</label>

          <input
            type="text"
            name="country"
            value={location.country || ""}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Short Description</label>

          <textarea
            name="shortDescription"
            value={location.shortDescription || ""}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Description</label>

          <textarea
            name="description"
            value={location.description || ""}
            onChange={handleChange}
            rows={8}
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-black px-6 py-3 text-white disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

          <button
            type="button"
            onClick={() => router.push("/admin/dashboard/locations")}
            className="rounded-lg border px-6 py-3"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewLocationPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    city: "",
    slug: "",
    state: "Maharashtra",
    country: "India",

    title: "",
    shortDescription: "",
    description: "",

    heroTitle: "",
    heroSubtitle: "",

    localContext: "",
    locationDescription: "",

    services: "",
    relatedTopics: "",

    isActive: true,
    sortOrder: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // --------------------------------------------------
  // HANDLE INPUT
  // --------------------------------------------------

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // --------------------------------------------------
  // AUTO GENERATE SLUG
  // --------------------------------------------------

  const generateSlug = (value) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const handleCityChange = (e) => {
    const city = e.target.value;

    setForm((prev) => ({
      ...prev,
      city,
      slug: generateSlug(city),
    }));
  };

  // --------------------------------------------------
  // SUBMIT
  // --------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const city = form.city.trim();
    const slug = form.slug.trim();

    if (!city) {
      setError("City is required.");
      return;
    }

    if (!slug) {
      setError("Slug is required.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        city,
        slug,

        state: form.state.trim(),
        country: form.country.trim(),

        title: form.title.trim(),
        shortDescription: form.shortDescription.trim(),
        description: form.description.trim(),

        heroTitle: form.heroTitle.trim(),
        heroSubtitle: form.heroSubtitle.trim(),

        localContext: form.localContext.trim(),
        locationDescription: form.locationDescription.trim(),

        services: form.services
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        relatedTopics: form.relatedTopics
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        isActive: form.isActive,

        sortOrder: Number(form.sortOrder) || 0,
      };

      const res = await fetch("/api/admin/locations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to create location");
      }

      alert("Location created successfully.");

      router.push("/admin/dashboard/locations");
      router.refresh();
    } catch (err) {
      console.error("Create location error:", err);

      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // PAGE
  // --------------------------------------------------

  return (
    <div className="p-6">
      {/* HEADER */}

      <div className="mb-6">
        <div className="mb-3">
          <Link
            href="/admin/dashboard/locations"
            className="text-sm font-medium text-gray-500 hover:text-black"
          >
            ← Back to Locations
          </Link>
        </div>

        <h1 className="text-2xl font-bold">Add Location</h1>

        <p className="mt-1 text-gray-500">Create a new business location.</p>
      </div>

      {/* ERROR */}

      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* FORM */}

      <form onSubmit={handleSubmit} className="max-w-5xl space-y-6">
        {/* BASIC INFORMATION */}

        <section className="rounded-xl border bg-white p-6">
          <h2 className="mb-5 text-lg font-semibold">Basic Information</h2>

          <div className="grid gap-5 md:grid-cols-2">
            {/* CITY */}

            <div>
              <label className="mb-2 block text-sm font-medium">City *</label>

              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleCityChange}
                placeholder="Mumbai"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
                required
              />
            </div>

            {/* SLUG */}

            <div>
              <label className="mb-2 block text-sm font-medium">Slug *</label>

              <input
                type="text"
                name="slug"
                value={form.slug}
                onChange={handleChange}
                placeholder="mumbai"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
                required
              />

              <p className="mt-1 text-xs text-gray-500">
                Example: mumbai, thane, pune
              </p>
            </div>

            {/* STATE */}

            <div>
              <label className="mb-2 block text-sm font-medium">State</label>

              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* COUNTRY */}

            <div>
              <label className="mb-2 block text-sm font-medium">Country</label>

              <input
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              />
            </div>
          </div>
        </section>

        {/* SEO / PAGE INFORMATION */}

        <section className="rounded-xl border bg-white p-6">
          <h2 className="mb-5 text-lg font-semibold">Page Information</h2>

          <div className="space-y-5">
            {/* TITLE */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Page Title
              </label>

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Website Development in Mumbai"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* SHORT DESCRIPTION */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Short Description
              </label>

              <textarea
                name="shortDescription"
                value={form.shortDescription}
                onChange={handleChange}
                rows={3}
                placeholder="Short description about this location..."
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* DESCRIPTION */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Description
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={6}
                placeholder="Detailed description about the location..."
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              />
            </div>
          </div>
        </section>

        {/* HERO */}

        <section className="rounded-xl border bg-white p-6">
          <h2 className="mb-5 text-lg font-semibold">Hero Section</h2>

          <div className="space-y-5">
            {/* HERO TITLE */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Hero Title
              </label>

              <input
                type="text"
                name="heroTitle"
                value={form.heroTitle}
                onChange={handleChange}
                placeholder="Website Development Services in Mumbai"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* HERO SUBTITLE */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Hero Subtitle
              </label>

              <textarea
                name="heroSubtitle"
                value={form.heroSubtitle}
                onChange={handleChange}
                rows={3}
                placeholder="Build your business with a high-performance website..."
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              />
            </div>
          </div>
        </section>

        {/* LOCAL SEO */}

        <section className="rounded-xl border bg-white p-6">
          <h2 className="mb-5 text-lg font-semibold">Local SEO Content</h2>

          <div className="space-y-5">
            {/* LOCAL CONTEXT */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Local Context
              </label>

              <textarea
                name="localContext"
                value={form.localContext}
                onChange={handleChange}
                rows={4}
                placeholder="Information about the local business environment..."
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* LOCATION DESCRIPTION */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Location Description
              </label>

              <textarea
                name="locationDescription"
                value={form.locationDescription}
                onChange={handleChange}
                rows={5}
                placeholder="Describe the location and surrounding areas..."
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              />
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section className="rounded-xl border bg-white p-6">
          <h2 className="mb-5 text-lg font-semibold">Services & Topics</h2>

          <div className="space-y-5">
            {/* SERVICES */}

            <div>
              <label className="mb-2 block text-sm font-medium">Services</label>

              <input
                type="text"
                name="services"
                value={form.services}
                onChange={handleChange}
                placeholder="website-development, seo, digital-marketing"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              />

              <p className="mt-1 text-xs text-gray-500">
                Separate multiple services with commas.
              </p>
            </div>

            {/* RELATED TOPICS */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Related Topics
              </label>

              <input
                type="text"
                name="relatedTopics"
                value={form.relatedTopics}
                onChange={handleChange}
                placeholder="web design, local seo, business website"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              />

              <p className="mt-1 text-xs text-gray-500">
                Separate multiple topics with commas.
              </p>
            </div>
          </div>
        </section>

        {/* SETTINGS */}

        <section className="rounded-xl border bg-white p-6">
          <h2 className="mb-5 text-lg font-semibold">Settings</h2>

          <div className="grid gap-5 md:grid-cols-2">
            {/* SORT ORDER */}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Sort Order
              </label>

              <input
                type="number"
                name="sortOrder"
                value={form.sortOrder}
                onChange={handleChange}
                min="0"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* ACTIVE */}

            <div className="flex items-center gap-3 pt-8">
              <input
                type="checkbox"
                name="isActive"
                checked={form.isActive}
                onChange={handleChange}
                className="h-4 w-4"
              />

              <label className="text-sm font-medium">Location is active</label>
            </div>
          </div>
        </section>

        {/* ACTIONS */}

        <div className="flex flex-wrap justify-end gap-3">
          <Link
            href="/admin/dashboard/locations"
            className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-50"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Location"}
          </button>
        </div>
      </form>
    </div>
  );
}

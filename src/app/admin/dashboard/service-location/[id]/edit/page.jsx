"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditServiceLocationPage() {
  const params = useParams();
  const router = useRouter();

  const id = params?.id;

  const [services, setServices] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    serviceId: "",
    locationId: "",

    title: "",
    metaTitle: "",
    metaDescription: "",
    keywords: "",

    heroTitle: "",
    heroSubtitle: "",

    shortDescription: "",
    description: "",
    localContext: "",

    faqs: [],

    isActive: true,
    sortOrder: 0,
  });

  useEffect(() => {
    if (!id) return;

    loadData();
  }, [id]);

  const loadData = async () => {
    try {
      setLoading(true);
      setError("");

      const [serviceLocationsRes, servicesRes, locationsRes] =
        await Promise.all([
          fetch(`/api/admin/service-locations/${id}`, {
            cache: "no-store",
          }),
          fetch("/api/admin/services", {
            cache: "no-store",
          }),
          fetch("/api/admin/locations", {
            cache: "no-store",
          }),
        ]);

      const serviceLocationData = await serviceLocationsRes.json();

      const servicesData = await servicesRes.json();
      const locationsData = await locationsRes.json();

      if (!serviceLocationsRes.ok || !serviceLocationData.success) {
        throw new Error(
          serviceLocationData.message || "Failed to load service location",
        );
      }

      if (!servicesRes.ok || !servicesData.success) {
        throw new Error(servicesData.message || "Failed to load services");
      }

      if (!locationsRes.ok || !locationsData.success) {
        throw new Error(locationsData.message || "Failed to load locations");
      }

      const item = serviceLocationData.serviceLocation;

      setServices(servicesData.services || []);
      setLocations(locationsData.locations || []);

      setForm({
        serviceId: item.service?._id || item.service || "",

        locationId: item.location?._id || item.location || "",

        title: item.title || "",
        metaTitle: item.metaTitle || "",
        metaDescription: item.metaDescription || "",

        keywords: Array.isArray(item.keywords)
          ? item.keywords.join(", ")
          : item.keywords || "",

        heroTitle: item.heroTitle || "",
        heroSubtitle: item.heroSubtitle || "",

        shortDescription: item.shortDescription || "",

        description: item.description || "",

        localContext: item.localContext || "",

        faqs:
          Array.isArray(item.faqs) && item.faqs.length > 0
            ? item.faqs.map((faq) => ({
                question: faq.question || "",
                answer: faq.answer || "",
              }))
            : [
                {
                  question: "",
                  answer: "",
                },
              ],

        isActive: item.isActive !== false,

        sortOrder: item.sortOrder ?? 0,
      });
    } catch (err) {
      console.error("Load service location error:", err);

      setError(err.message || "Failed to load service location");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFaqChange = (index, field, value) => {
    setForm((prev) => {
      const faqs = [...prev.faqs];

      faqs[index] = {
        ...faqs[index],
        [field]: value,
      };

      return {
        ...prev,
        faqs,
      };
    });
  };

  const addFaq = () => {
    setForm((prev) => ({
      ...prev,
      faqs: [
        ...prev.faqs,
        {
          question: "",
          answer: "",
        },
      ],
    }));
  };

  const removeFaq = (index) => {
    setForm((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));
  };

  const selectedService = services.find(
    (service) => service._id === form.serviceId,
  );

  const selectedLocation = locations.find(
    (location) => location._id === form.locationId,
  );

  const pageUrl =
    selectedService?.slug && selectedLocation?.slug
      ? `/Services/${selectedService.slug}/${selectedLocation.slug}`
      : "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");

      if (!form.serviceId) {
        throw new Error("Please select a service.");
      }

      if (!form.locationId) {
        throw new Error("Please select a location.");
      }

      const keywords = form.keywords
        .split(",")
        .map((keyword) => keyword.trim())
        .filter(Boolean);

      const cleanedFaqs = form.faqs.filter(
        (faq) => faq.question.trim() !== "" || faq.answer.trim() !== "",
      );

      const payload = {
        serviceId: form.serviceId,
        locationId: form.locationId,

        title: form.title.trim(),
        metaTitle: form.metaTitle.trim(),
        metaDescription: form.metaDescription.trim(),

        keywords,

        heroTitle: form.heroTitle.trim(),
        heroSubtitle: form.heroSubtitle.trim(),

        shortDescription: form.shortDescription.trim(),

        description: form.description.trim(),

        localContext: form.localContext.trim(),

        faqs: cleanedFaqs,

        isActive: form.isActive,

        sortOrder: Number(form.sortOrder) || 0,
      };

      const res = await fetch(`/api/admin/service-locations/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to update service location");
      }

      alert("Service location updated successfully.");

      router.push("/admin/dashboard/service-location");
    } catch (err) {
      console.error("Update service location error:", err);

      setError(err.message || "Failed to update service location");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Edit Service Location</h1>

        <p className="mt-2 text-gray-500">Loading service location...</p>
      </div>
    );
  }

  if (error && !form.serviceId) {
    return (
      <div className="p-6">
        <button
          type="button"
          onClick={() => router.push("/admin/dashboard/service-location")}
          className="mb-4 text-sm font-medium text-gray-600 hover:text-black"
        >
          ← Back to Service Locations
        </button>

        <h1 className="mb-4 text-2xl font-bold">Edit Service Location</h1>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}

        <div className="mb-6">
          <button
            type="button"
            onClick={() => router.push("/admin/dashboard/service-location")}
            className="mb-4 text-sm font-medium text-gray-600 hover:text-black"
          >
            ← Back to Service Locations
          </button>

          <h1 className="text-2xl font-bold">Edit Service Location</h1>

          <p className="mt-1 text-gray-500">
            Update the service location page, SEO and content.
          </p>
        </div>

        {/* Error */}

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service & Location */}

          <section className="rounded-xl border bg-white p-6">
            <h2 className="mb-5 text-lg font-semibold">Service & Location</h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Service *
                </label>

                <select
                  name="serviceId"
                  value={form.serviceId}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
                >
                  <option value="">Select Service</option>

                  {services.map((service) => (
                    <option key={service._id} value={service._id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Location *
                </label>

                <select
                  name="locationId"
                  value={form.locationId}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
                >
                  <option value="">Select Location</option>

                  {locations.map((location) => (
                    <option key={location._id} value={location._id}>
                      {location.city}
                      {location.state ? `, ${location.state}` : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">Page URL</label>

              <div className="rounded-lg border bg-gray-50 px-4 py-3 text-sm text-gray-600">
                {pageUrl || "Select service and location"}
              </div>
            </div>
          </section>

          {/* SEO */}

          <section className="rounded-xl border bg-white p-6">
            <h2 className="mb-5 text-lg font-semibold">SEO Settings</h2>

            <div className="space-y-5">
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

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Meta Title
                </label>

                <input
                  type="text"
                  name="metaTitle"
                  value={form.metaTitle}
                  onChange={handleChange}
                  placeholder="Website Development Company in Mumbai | WebXArtist"
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Meta Description
                </label>

                <textarea
                  name="metaDescription"
                  value={form.metaDescription}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write a unique meta description..."
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Keywords
                </label>

                <input
                  type="text"
                  name="keywords"
                  value={form.keywords}
                  onChange={handleChange}
                  placeholder="website development Mumbai, web development company Mumbai"
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
                />

                <p className="mt-1 text-xs text-gray-500">
                  Separate keywords with commas.
                </p>
              </div>
            </div>
          </section>

          {/* Hero */}

          <section className="rounded-xl border bg-white p-6">
            <h2 className="mb-5 text-lg font-semibold">Hero Section</h2>

            <div className="space-y-5">
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

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Hero Subtitle
                </label>

                <textarea
                  name="heroSubtitle"
                  value={form.heroSubtitle}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Build a modern website for your business..."
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
                />
              </div>
            </div>
          </section>

          {/* Content */}

          <section className="rounded-xl border bg-white p-6">
            <h2 className="mb-5 text-lg font-semibold">Page Content</h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Short Description
                </label>

                <textarea
                  name="shortDescription"
                  value={form.shortDescription}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Short introduction..."
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Description
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={8}
                  placeholder="Main page content..."
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Local Context
                </label>

                <textarea
                  name="localContext"
                  value={form.localContext}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Location-specific content..."
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
                />
              </div>
            </div>
          </section>

          {/* FAQs */}

          <section className="rounded-xl border bg-white p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">FAQs</h2>

                <p className="mt-1 text-sm text-gray-500">
                  Add or update FAQs.
                </p>
              </div>

              <button
                type="button"
                onClick={addFaq}
                className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                + Add FAQ
              </button>
            </div>

            <div className="space-y-5">
              {form.faqs.map((faq, index) => (
                <div key={index} className="rounded-lg border bg-gray-50 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-medium">FAQ {index + 1}</h3>

                    {form.faqs.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeFaq(index)}
                        className="text-sm font-medium text-red-600 hover:text-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Question
                      </label>

                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) =>
                          handleFaqChange(index, "question", e.target.value)
                        }
                        placeholder="Enter FAQ question..."
                        className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Answer
                      </label>

                      <textarea
                        value={faq.answer}
                        onChange={(e) =>
                          handleFaqChange(index, "answer", e.target.value)
                        }
                        rows={4}
                        placeholder="Enter FAQ answer..."
                        className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-black"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Settings */}

          <section className="rounded-xl border bg-white p-6">
            <h2 className="mb-5 text-lg font-semibold">Settings</h2>

            <div className="grid gap-5 md:grid-cols-2">
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

              <div className="flex items-center pt-8">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                    className="h-5 w-5"
                  />

                  <span className="text-sm font-medium">Active</span>
                </label>
              </div>
            </div>
          </section>

          {/* Actions */}

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => router.push("/admin/dashboard/service-location")}
              disabled={saving}
              className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

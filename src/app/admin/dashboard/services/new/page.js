"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const initialForm = {
  name: "",
  slug: "",
  category: "",
  shortDescription: "",
  description: "",
  overviewdescription: "",
  heroTitle: "",
  heroSubtitle: "",
  image: "",
  heroImage: "",

  benefits: [],
  locations: [],

  features: [],
  process: [],
  technologies: [],
  faqs: [],

  seo: {
    title: "",
    description: "",
    keywords: [],
  },

  isActive: true,
  sortOrder: 0,
};

export default function AddServicePage() {
  const router = useRouter();

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function generateSlug(name) {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function handleNameChange(e) {
    const name = e.target.value;

    setForm((prev) => ({
      ...prev,
      name,
      slug: generateSlug(name),
    }));
  }

  // ---------------------------------------
  // FEATURES
  // ---------------------------------------

  function addFeature() {
    setForm((prev) => ({
      ...prev,
      features: [
        ...prev.features,
        {
          title: "",
          description: "",
        },
      ],
    }));
  }

  function updateFeature(index, field, value) {
    setForm((prev) => ({
      ...prev,
      features: prev.features.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    }));
  }

  function removeFeature(index) {
    setForm((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  }

  // ---------------------------------------
  // PROCESS
  // ---------------------------------------

  function addProcess() {
    setForm((prev) => ({
      ...prev,
      process: [
        ...prev.process,
        {
          title: "",
          description: "",
        },
      ],
    }));
  }

  function updateProcess(index, field, value) {
    setForm((prev) => ({
      ...prev,
      process: prev.process.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    }));
  }

  function removeProcess(index) {
    setForm((prev) => ({
      ...prev,
      process: prev.process.filter((_, i) => i !== index),
    }));
  }

  // ---------------------------------------
  // TECHNOLOGIES
  // ---------------------------------------

  function addTechnology() {
    setForm((prev) => ({
      ...prev,
      technologies: [
        ...prev.technologies,
        {
          title: "",
          description: "",
        },
      ],
    }));
  }

  function updateTechnology(index, field, value) {
    setForm((prev) => ({
      ...prev,
      technologies: prev.technologies.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    }));
  }

  function removeTechnology(index) {
    setForm((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index),
    }));
  }

  // ---------------------------------------
  // FAQS
  // ---------------------------------------

  function addFaq() {
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
  }

  function updateFaq(index, field, value) {
    setForm((prev) => ({
      ...prev,
      faqs: prev.faqs.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    }));
  }

  function removeFaq(index) {
    setForm((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));
  }

  // ---------------------------------------
  // BENEFITS
  // ---------------------------------------

  function addBenefit() {
    setForm((prev) => ({
      ...prev,
      benefits: [...prev.benefits, ""],
    }));
  }

  function updateBenefit(index, value) {
    setForm((prev) => ({
      ...prev,
      benefits: prev.benefits.map((item, i) => (i === index ? value : item)),
    }));
  }

  function removeBenefit(index) {
    setForm((prev) => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index),
    }));
  }

  // ---------------------------------------
  // LOCATIONS
  // ---------------------------------------

  function addLocation() {
    setForm((prev) => ({
      ...prev,
      locations: [...prev.locations, ""],
    }));
  }

  function updateLocation(index, value) {
    setForm((prev) => ({
      ...prev,
      locations: prev.locations.map((item, i) => (i === index ? value : item)),
    }));
  }

  function removeLocation(index) {
    setForm((prev) => ({
      ...prev,
      locations: prev.locations.filter((_, i) => i !== index),
    }));
  }

  // ---------------------------------------
  // VALIDATION
  // ---------------------------------------

  function validateForm() {
    for (const [index, item] of form.features.entries()) {
      if (!item.title.trim() || !item.description.trim()) {
        return `Feature ${index + 1}: title and description are required.`;
      }
    }

    for (const [index, item] of form.process.entries()) {
      if (!item.title.trim() || !item.description.trim()) {
        return `Process step ${index + 1}: title and description are required.`;
      }
    }

    for (const [index, item] of form.technologies.entries()) {
      if (!item.title.trim() || !item.description.trim()) {
        return `Technology ${index + 1}: title and description are required.`;
      }
    }

    for (const [index, item] of form.faqs.entries()) {
      if (!item.question.trim() || !item.answer.trim()) {
        return `FAQ ${index + 1}: question and answer are required.`;
      }
    }

    return null;
  }

  // ---------------------------------------
  // SUBMIT
  // ---------------------------------------

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage("");

    const validationError = validateForm();

    if (validationError) {
      setMessage(validationError);
      return;
    }

    setLoading(true);

    try {
      const cleanForm = {
        ...form,

        slug: form.slug.toLowerCase().trim(),

        benefits: form.benefits.map((item) => item.trim()).filter(Boolean),

        locations: form.locations.map((item) => item.trim()).filter(Boolean),

        features: form.features.map((item) => ({
          title: item.title.trim(),
          description: item.description.trim(),
        })),

        process: form.process.map((item) => ({
          title: item.title.trim(),
          description: item.description.trim(),
        })),

        technologies: form.technologies.map((item) => ({
          title: item.title.trim(),
          description: item.description.trim(),
        })),

        faqs: form.faqs.map((item) => ({
          question: item.question.trim(),
          answer: item.answer.trim(),
        })),
      };

      const response = await fetch("/api/admin/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanForm),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to create service");
      }

      setMessage("Service created successfully.");

      setTimeout(() => {
        router.push("/admin/dashboard/services");
        router.refresh();
      }, 700);
    } catch (error) {
      setMessage(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            Add Service
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Create a new service for your WebXArtist website.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* -------------------------------- */}
          {/* BASIC INFORMATION */}
          {/* -------------------------------- */}

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">Basic Information</h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Service Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleNameChange}
                  placeholder="Website Development"
                  required
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Slug</label>

                <input
                  type="text"
                  name="slug"
                  value={form.slug}
                  onChange={handleChange}
                  placeholder="website-development"
                  required
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Category
                </label>

                <input
                  type="text"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  placeholder="Development"
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Sort Order
                </label>

                <input
                  type="number"
                  name="sortOrder"
                  value={form.sortOrder}
                  onChange={handleChange}
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
                />
              </div>
            </div>
          </section>

          {/* -------------------------------- */}
          {/* HERO */}
          {/* -------------------------------- */}

          <section className="rounded-xl border bg-white p-6 shadow-sm">
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
                  placeholder="Website Development Services"
                  className="w-full rounded-lg border px-4 py-3"
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
                  className="w-full rounded-lg border px-4 py-3"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Main Image
                  </label>

                  <input
                    type="text"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="/webdevelopment.png"
                    className="w-full rounded-lg border px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Hero Image
                  </label>

                  <input
                    type="text"
                    name="heroImage"
                    value={form.heroImage}
                    onChange={handleChange}
                    placeholder="/services/banner.jpg"
                    className="w-full rounded-lg border px-4 py-3"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* -------------------------------- */}
          {/* CONTENT */}
          {/* -------------------------------- */}

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">Service Content</h2>

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
                  className="w-full rounded-lg border px-4 py-3"
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
                  rows={6}
                  className="w-full rounded-lg border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Overview Description
                </label>

                <textarea
                  name="overviewdescription"
                  value={form.overviewdescription}
                  onChange={handleChange}
                  rows={6}
                  className="w-full rounded-lg border px-4 py-3"
                />
              </div>
            </div>
          </section>

          {/* -------------------------------- */}
          {/* FEATURES */}
          {/* -------------------------------- */}

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Features</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Add the main features included in this service.
                </p>
              </div>

              <button
                type="button"
                onClick={addFeature}
                className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
              >
                + Add Feature
              </button>
            </div>

            <div className="space-y-4">
              {form.features.length === 0 && (
                <p className="rounded-lg border border-dashed p-5 text-center text-sm text-gray-500">
                  No features added yet.
                </p>
              )}

              {form.features.map((feature, index) => (
                <div key={index} className="rounded-lg border bg-gray-50 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-medium">Feature {index + 1}</h3>

                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="text-sm font-medium text-red-600"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text"
                      value={feature.title}
                      onChange={(e) =>
                        updateFeature(index, "title", e.target.value)
                      }
                      placeholder="Feature title"
                      className="w-full rounded-lg border px-4 py-3"
                    />

                    <textarea
                      value={feature.description}
                      onChange={(e) =>
                        updateFeature(index, "description", e.target.value)
                      }
                      placeholder="Feature description"
                      rows={3}
                      className="w-full rounded-lg border px-4 py-3"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* -------------------------------- */}
          {/* PROCESS */}
          {/* -------------------------------- */}

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Process</h2>

                <p className="mt-1 text-sm text-gray-500">
                  Explain how this service is delivered.
                </p>
              </div>

              <button
                type="button"
                onClick={addProcess}
                className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
              >
                + Add Process Step
              </button>
            </div>

            <div className="space-y-4">
              {form.process.length === 0 && (
                <p className="rounded-lg border border-dashed p-5 text-center text-sm text-gray-500">
                  No process steps added yet.
                </p>
              )}

              {form.process.map((item, index) => (
                <div key={index} className="rounded-lg border bg-gray-50 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-medium">Step {index + 1}</h3>

                    <button
                      type="button"
                      onClick={() => removeProcess(index)}
                      className="text-sm font-medium text-red-600"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) =>
                        updateProcess(index, "title", e.target.value)
                      }
                      placeholder="Process step title"
                      className="w-full rounded-lg border px-4 py-3"
                    />

                    <textarea
                      value={item.description}
                      onChange={(e) =>
                        updateProcess(index, "description", e.target.value)
                      }
                      placeholder="Process step description"
                      rows={3}
                      className="w-full rounded-lg border px-4 py-3"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* -------------------------------- */}
          {/* TECHNOLOGIES */}
          {/* -------------------------------- */}

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Technologies</h2>

                <p className="mt-1 text-sm text-gray-500">
                  Add technologies used for this service.
                </p>
              </div>

              <button
                type="button"
                onClick={addTechnology}
                className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
              >
                + Add Technology
              </button>
            </div>

            <div className="space-y-4">
              {form.technologies.length === 0 && (
                <p className="rounded-lg border border-dashed p-5 text-center text-sm text-gray-500">
                  No technologies added yet.
                </p>
              )}

              {form.technologies.map((item, index) => (
                <div key={index} className="rounded-lg border bg-gray-50 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-medium">Technology {index + 1}</h3>

                    <button
                      type="button"
                      onClick={() => removeTechnology(index)}
                      className="text-sm font-medium text-red-600"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) =>
                        updateTechnology(index, "title", e.target.value)
                      }
                      placeholder="Technology name"
                      className="w-full rounded-lg border px-4 py-3"
                    />

                    <textarea
                      value={item.description}
                      onChange={(e) =>
                        updateTechnology(index, "description", e.target.value)
                      }
                      placeholder="Technology description"
                      rows={3}
                      className="w-full rounded-lg border px-4 py-3"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* -------------------------------- */}
          {/* BENEFITS */}
          {/* -------------------------------- */}

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Benefits</h2>

                <p className="mt-1 text-sm text-gray-500">
                  Add the key benefits customers get from this service.
                </p>
              </div>

              <button
                type="button"
                onClick={addBenefit}
                className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
              >
                + Add Benefit
              </button>
            </div>

            <div className="space-y-3">
              {form.benefits.length === 0 && (
                <p className="rounded-lg border border-dashed p-5 text-center text-sm text-gray-500">
                  No benefits added yet.
                </p>
              )}

              {form.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    type="text"
                    value={benefit}
                    onChange={(e) => updateBenefit(index, e.target.value)}
                    placeholder={`Benefit ${index + 1}`}
                    className="flex-1 rounded-lg border px-4 py-3"
                  />

                  <button
                    type="button"
                    onClick={() => removeBenefit(index)}
                    className="rounded-lg border px-4 text-sm font-medium text-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* -------------------------------- */}
          {/* FAQS */}
          {/* -------------------------------- */}

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">FAQs</h2>

                <p className="mt-1 text-sm text-gray-500">
                  Add frequently asked questions for this service.
                </p>
              </div>

              <button
                type="button"
                onClick={addFaq}
                className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
              >
                + Add FAQ
              </button>
            </div>

            <div className="space-y-4">
              {form.faqs.length === 0 && (
                <p className="rounded-lg border border-dashed p-5 text-center text-sm text-gray-500">
                  No FAQs added yet.
                </p>
              )}

              {form.faqs.map((faq, index) => (
                <div key={index} className="rounded-lg border bg-gray-50 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-medium">FAQ {index + 1}</h3>

                    <button
                      type="button"
                      onClick={() => removeFaq(index)}
                      className="text-sm font-medium text-red-600"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text"
                      value={faq.question}
                      onChange={(e) =>
                        updateFaq(index, "question", e.target.value)
                      }
                      placeholder="Frequently asked question"
                      className="w-full rounded-lg border px-4 py-3"
                    />

                    <textarea
                      value={faq.answer}
                      onChange={(e) =>
                        updateFaq(index, "answer", e.target.value)
                      }
                      placeholder="Answer"
                      rows={4}
                      className="w-full rounded-lg border px-4 py-3"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* -------------------------------- */}
          {/* LOCATIONS */}
          {/* -------------------------------- */}

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Service Locations</h2>

                <p className="mt-1 text-sm text-gray-500">
                  Add locations where this service is available.
                </p>
              </div>

              <button
                type="button"
                onClick={addLocation}
                className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
              >
                + Add Location
              </button>
            </div>

            <div className="space-y-3">
              {form.locations.length === 0 && (
                <p className="rounded-lg border border-dashed p-5 text-center text-sm text-gray-500">
                  No locations added yet.
                </p>
              )}

              {form.locations.map((location, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => updateLocation(index, e.target.value)}
                    placeholder="Mumbai"
                    className="flex-1 rounded-lg border px-4 py-3"
                  />

                  <button
                    type="button"
                    onClick={() => removeLocation(index)}
                    className="rounded-lg border px-4 text-sm font-medium text-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* -------------------------------- */}
          {/* SEO */}
          {/* -------------------------------- */}

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">SEO</h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  SEO Title
                </label>

                <input
                  type="text"
                  value={form.seo.title}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      seo: {
                        ...prev.seo,
                        title: e.target.value,
                      },
                    }))
                  }
                  className="w-full rounded-lg border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  SEO Description
                </label>

                <textarea
                  value={form.seo.description}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      seo: {
                        ...prev.seo,
                        description: e.target.value,
                      },
                    }))
                  }
                  rows={4}
                  className="w-full rounded-lg border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  SEO Keywords
                </label>

                <input
                  type="text"
                  placeholder="SEO Services, SEO Company, SEO Mumbai"
                  value={form.seo.keywords.join(", ")}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      seo: {
                        ...prev.seo,
                        keywords: e.target.value
                          .split(",")
                          .map((item) => item.trim())
                          .filter(Boolean),
                      },
                    }))
                  }
                  className="w-full rounded-lg border px-4 py-3"
                />
              </div>
            </div>
          </section>

          {/* -------------------------------- */}
          {/* STATUS */}
          {/* -------------------------------- */}

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold">Service Status</h2>

                <p className="mt-1 text-sm text-gray-500">
                  Control whether this service is visible publicly.
                </p>
              </div>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      isActive: e.target.checked,
                    }))
                  }
                  className="h-5 w-5"
                />

                <span className="text-sm font-medium">Active</span>
              </label>
            </div>
          </section>

          {/* -------------------------------- */}
          {/* MESSAGE */}
          {/* -------------------------------- */}

          {message && (
            <div
              className={`rounded-lg border px-4 py-3 text-sm ${
                message.includes("successfully")
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          {/* -------------------------------- */}
          {/* SUBMIT */}
          {/* -------------------------------- */}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => router.push("/admin/dashboard/services")}
              className="rounded-lg border px-5 py-3 text-sm font-medium"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Service"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

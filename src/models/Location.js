import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema(
  {
    // Public location identifier
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    state: {
      type: String,
      default: "",
      trim: true,
    },

    country: {
      type: String,
      default: "India",
      trim: true,
    },

    // Services available in this location
    services: {
      type: [String],
      default: [],
    },

    title: {
      type: String,
      default: "",
      trim: true,
    },

    shortDescription: {
      type: String,
      default: "",
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    heroTitle: {
      type: String,
      default: "",
      trim: true,
    },

    heroSubtitle: {
      type: String,
      default: "",
    },

    localContext: {
      type: String,
      default: "",
    },

    locationDescription: {
      type: String,
      default: "",
    },

    relatedTopics: {
      type: [String],
      default: [],
    },

    // Admin control
    isActive: {
      type: Boolean,
      default: true,
    },

    // Website ordering
    sortOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Location =
  mongoose.models.Location || mongoose.model("Location", LocationSchema);

export default Location;

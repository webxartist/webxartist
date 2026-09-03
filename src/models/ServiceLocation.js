import mongoose from "mongoose";

const FaqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },

    answer: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const ServiceLocationSchema = new mongoose.Schema(
  {
    // --------------------------------------------------
    // SERVICE
    // --------------------------------------------------
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },

    // --------------------------------------------------
    // LOCATION
    // --------------------------------------------------
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },

    // --------------------------------------------------
    // PUBLIC URL SLUG
    // Example:
    // website-development/mumbai
    // --------------------------------------------------
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // --------------------------------------------------
    // PAGE TITLE
    // --------------------------------------------------
    title: {
      type: String,
      default: "",
      trim: true,
    },

    // --------------------------------------------------
    // SEO
    // --------------------------------------------------
    metaTitle: {
      type: String,
      default: "",
      trim: true,
    },

    metaDescription: {
      type: String,
      default: "",
      trim: true,
    },

    keywords: {
      type: [String],
      default: [],
    },

    // --------------------------------------------------
    // HERO
    // --------------------------------------------------
    heroTitle: {
      type: String,
      default: "",
      trim: true,
    },

    heroSubtitle: {
      type: String,
      default: "",
      trim: true,
    },

    // --------------------------------------------------
    // PAGE CONTENT
    // --------------------------------------------------
    shortDescription: {
      type: String,
      default: "",
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    localContext: {
      type: String,
      default: "",
    },

    // --------------------------------------------------
    // FAQ
    // --------------------------------------------------
    faqs: {
      type: [FaqSchema],
      default: [],
    },

    // --------------------------------------------------
    // ADMIN CONTROL
    // --------------------------------------------------
    isActive: {
      type: Boolean,
      default: true,
    },

    sortOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// --------------------------------------------------
// ONE SERVICE + ONE LOCATION = ONE PAGE
// --------------------------------------------------

ServiceLocationSchema.index(
  {
    service: 1,
    location: 1,
  },
  {
    unique: true,
  },
);

const ServiceLocation =
  mongoose.models.ServiceLocation ||
  mongoose.model("ServiceLocation", ServiceLocationSchema);

export default ServiceLocation;

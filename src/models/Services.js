import mongoose from "mongoose";

const FeatureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const ProcessSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

const TechnologySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false },
);

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

const SeoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      default: "",
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    keywords: {
      type: [String],
      default: [],
    },
  },
  { _id: false },
);

const ServiceSchema = new mongoose.Schema(
  {
    // Public service identifier
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      default: "",
    },

    heroImage: {
      type: String,
      default: "",
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

    overviewdescription: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "",
      trim: true,
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

    features: {
      type: [FeatureSchema],
      default: [],
    },

    process: {
      type: [ProcessSchema],
      default: [],
    },

    technologies: {
      type: [TechnologySchema],
      default: [],
    },

    benefits: {
      type: [String],
      default: [],
    },

    faqs: {
      type: [FaqSchema],
      default: [],
    },

    locations: {
      type: [String],
      default: [],
    },

    seo: {
      type: SeoSchema,
      default: () => ({}),
    },

    // Admin control
    isActive: {
      type: Boolean,
      default: true,
    },

    // Useful for ordering services in the website
    sortOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Service =
  mongoose.models.Service || mongoose.model("Service", ServiceSchema);

export default Service;

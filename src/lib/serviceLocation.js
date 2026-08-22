import services from "@/data/services";

/*
|--------------------------------------------------------------------------
| SERVICE LOCATIONS
|--------------------------------------------------------------------------
|
| These are the locations for which service-location landing pages
| can be generated.
|
| Keep the location slug exactly the same as the values used inside
| service.locations.
|
*/

const locations = [
  {
    slug: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",

    description:
      "WebXArtist provides website development, SEO, digital marketing, advertising, social media, content, and other digital services for businesses in Mumbai.",

    localContext:
      "Mumbai is a major business and commercial hub with businesses ranging from startups and professional services to retailers, restaurants, manufacturers, and established companies. A strong digital presence can help businesses communicate their services, reach relevant customers, and compete effectively in the local market.",

    locationDescription:
      "Businesses in Mumbai can use digital services to build a stronger online presence, improve search visibility, generate enquiries, and create better customer experiences across websites, search engines, advertising platforms, and social media.",

    relatedTopics: [
      "Website Development",
      "SEO Services",
      "Google Ads",
      "Meta Ads",
      "Google Business Profile",
      "Social Media Management",
      "Content Creation",
    ],
  },

  {
    slug: "thane",
    city: "Thane",
    state: "Maharashtra",
    country: "India",

    description:
      "WebXArtist provides website development, SEO, digital marketing, Google Ads, social media, and other digital solutions for businesses in Thane.",

    localContext:
      "Thane has a diverse business environment that includes local businesses, professional services, startups, retailers, restaurants, educational organizations, and growing companies. Businesses in the area can benefit from a clear online presence that helps customers discover and understand their products and services.",

    locationDescription:
      "For businesses in Thane, the right digital strategy can support local visibility, customer enquiries, website traffic, brand awareness, and long-term online growth.",

    relatedTopics: [
      "Website Development",
      "SEO Services",
      "Google Ads",
      "Meta Ads",
      "Local SEO",
      "Google Business Profile",
      "Social Media Management",
    ],
  },

  {
    slug: "navi-mumbai",
    city: "Navi Mumbai",
    state: "Maharashtra",
    country: "India",

    description:
      "WebXArtist provides digital services for businesses in Navi Mumbai, including website development, SEO, online advertising, social media, and content solutions.",

    localContext:
      "Navi Mumbai has businesses across professional services, retail, education, healthcare, technology, real estate, hospitality, and other sectors. A well-structured digital presence can help these businesses present their offerings clearly and connect with customers online.",

    locationDescription:
      "Businesses in Navi Mumbai can use website development, SEO, advertising, social media, and content strategies to improve online visibility and support customer acquisition.",

    relatedTopics: [
      "Website Development",
      "SEO Services",
      "Google Ads",
      "Meta Ads",
      "Local SEO",
      "Content Creation",
      "Social Media Management",
    ],
  },

  {
    slug: "mumbra",
    city: "Mumbra",
    state: "Maharashtra",
    country: "India",

    description:
      "WebXArtist provides website development, SEO, digital marketing, advertising, and other online business solutions for businesses in Mumbra.",

    localContext:
      "Mumbra has a growing base of local businesses, service providers, retailers, professionals, and entrepreneurs. An accessible and trustworthy online presence can help local businesses make their services easier to discover and contact.",

    locationDescription:
      "Businesses in Mumbra can use digital services to improve their online presence, communicate their offerings, reach nearby customers, and build a stronger local brand.",

    relatedTopics: [
      "Website Development",
      "SEO Services",
      "Google Business Profile",
      "Google Ads",
      "Meta Ads",
      "Social Media Management",
      "Content Creation",
    ],
  },

  {
    slug: "panvel",
    city: "Panvel",
    state: "Maharashtra",
    country: "India",

    description:
      "WebXArtist provides digital solutions for businesses in Panvel, including websites, SEO, online advertising, social media management, and content creation.",

    localContext:
      "Panvel serves a broad and developing business market with local companies, retailers, service providers, professionals, and growing organizations. Digital visibility can help businesses communicate their value and connect with customers searching online.",

    locationDescription:
      "Businesses in Panvel can use digital solutions to improve search visibility, generate enquiries, strengthen branding, and create a reliable online customer journey.",

    relatedTopics: [
      "Website Development",
      "SEO Services",
      "Google Ads",
      "Meta Ads",
      "Google Business Profile",
      "Content Creation",
      "Social Media Management",
    ],
  },

  {
    slug: "pune",
    city: "Pune",
    state: "Maharashtra",
    country: "India",

    description:
      "WebXArtist provides website development, SEO, digital marketing, advertising, social media, and content services for businesses in Pune.",

    localContext:
      "Pune has a broad business ecosystem spanning technology, education, professional services, manufacturing, retail, hospitality, startups, and established companies. Businesses in this competitive market can benefit from a clear and well-structured digital presence.",

    locationDescription:
      "Businesses in Pune can use website development, SEO, paid advertising, social media, and content strategies to reach relevant audiences and support sustainable digital growth.",

    relatedTopics: [
      "Website Development",
      "SEO Services",
      "Google Ads",
      "Meta Ads",
      "Social Media Management",
      "Content Creation",
      "Local SEO",
    ],
  },

  {
    slug: "kalyan",
    city: "Kalyan",
    state: "Maharashtra",
    country: "India",

    description:
      "WebXArtist provides digital solutions for businesses in Kalyan, including website development, SEO, digital marketing, advertising, and social media services.",

    localContext:
      "Kalyan has a diverse local business community including retailers, service providers, professionals, restaurants, educational organizations, and growing businesses. Online visibility can help these businesses reach customers beyond traditional channels.",

    locationDescription:
      "Businesses in Kalyan can strengthen their online presence through search-friendly websites, local visibility strategies, paid advertising, social media, and useful business content.",

    relatedTopics: [
      "Website Development",
      "SEO Services",
      "Google Business Profile",
      "Google Ads",
      "Meta Ads",
      "Social Media Management",
      "Content Creation",
    ],
  },

  {
    slug: "dombivli",
    city: "Dombivli",
    state: "Maharashtra",
    country: "India",

    description:
      "WebXArtist provides website development, SEO, digital marketing, advertising, and social media solutions for businesses in Dombivli.",

    localContext:
      "Dombivli has a growing community of local businesses, professionals, retailers, service providers, and entrepreneurs. A strong digital presence can make it easier for potential customers to discover businesses and understand what they offer.",

    locationDescription:
      "Businesses in Dombivli can use digital services to improve online visibility, customer engagement, local discovery, and lead generation.",

    relatedTopics: [
      "Website Development",
      "SEO Services",
      "Google Business Profile",
      "Google Ads",
      "Meta Ads",
      "Content Creation",
      "Social Media Management",
    ],
  },

  {
    slug: "bhiwandi",
    city: "Bhiwandi",
    state: "Maharashtra",
    country: "India",

    description:
      "WebXArtist provides digital solutions for businesses in Bhiwandi, including website development, SEO, online advertising, social media, and content services.",

    localContext:
      "Bhiwandi has a strong commercial and industrial ecosystem alongside local retailers, service providers, logistics businesses, manufacturers, and other organizations. Digital visibility can help businesses communicate their capabilities and connect with customers and partners.",

    locationDescription:
      "Businesses in Bhiwandi can use digital platforms to present their services, improve search visibility, generate enquiries, and strengthen their online credibility.",

    relatedTopics: [
      "Website Development",
      "SEO Services",
      "Google Ads",
      "Meta Ads",
      "Google Business Profile",
      "Content Creation",
      "Social Media Management",
    ],
  },

  {
    slug: "mira-road",
    city: "Mira Road",
    state: "Maharashtra",
    country: "India",

    description:
      "WebXArtist provides website development, SEO, digital marketing, advertising, social media, and content solutions for businesses in Mira Road.",

    localContext:
      "Mira Road has a wide range of residential and commercial businesses, including professional services, retailers, restaurants, clinics, education providers, and local entrepreneurs. Digital visibility can help these businesses connect with nearby customers.",

    locationDescription:
      "Businesses in Mira Road can use websites, local SEO, Google Business Profile optimization, advertising, and social media to strengthen their online presence.",

    relatedTopics: [
      "Website Development",
      "SEO Services",
      "Local SEO",
      "Google Business Profile",
      "Google Ads",
      "Meta Ads",
      "Social Media Management",
    ],
  },

  {
    slug: "vasai",
    city: "Vasai",
    state: "Maharashtra",
    country: "India",

    description:
      "WebXArtist provides digital solutions for businesses in Vasai, including website development, SEO, advertising, social media management, and content creation.",

    localContext:
      "Vasai has a varied business community that includes local retailers, service providers, professionals, restaurants, manufacturers, and growing companies. A strong online presence can help businesses improve discoverability and customer communication.",

    locationDescription:
      "Businesses in Vasai can use digital marketing and web solutions to increase online visibility, present their services clearly, and create more opportunities for customer enquiries.",

    relatedTopics: [
      "Website Development",
      "SEO Services",
      "Google Business Profile",
      "Google Ads",
      "Meta Ads",
      "Content Creation",
      "Social Media Management",
    ],
  },

  {
    slug: "virar",
    city: "Virar",
    state: "Maharashtra",
    country: "India",

    description:
      "WebXArtist provides website development, SEO, digital marketing, advertising, social media, and content services for businesses in Virar.",

    localContext:
      "Virar has a growing local business ecosystem with retailers, professionals, service providers, restaurants, educational organizations, and entrepreneurs. Digital channels can help these businesses reach customers and build stronger brand visibility.",

    locationDescription:
      "Businesses in Virar can use websites, SEO, local search optimization, advertising, social media, and content to improve their digital presence and customer reach.",

    relatedTopics: [
      "Website Development",
      "SEO Services",
      "Google Business Profile",
      "Google Ads",
      "Meta Ads",
      "Social Media Management",
      "Content Creation",
    ],
  },
];

/*
|--------------------------------------------------------------------------
| Get Location
|--------------------------------------------------------------------------
*/

export function getLocation(locationSlug) {
  if (!locationSlug) {
    return null;
  }

  return locations.find((location) => location.slug === locationSlug);
}

/*
|--------------------------------------------------------------------------
| Get Service
|--------------------------------------------------------------------------
*/

export function getService(serviceSlug) {
  if (!serviceSlug) {
    return null;
  }

  return services.find((service) => service.slug === serviceSlug);
}

/*
|--------------------------------------------------------------------------
| Check Service ↔ Location Relationship
|--------------------------------------------------------------------------
*/

export function isServiceAvailableInLocation(service, locationSlug) {
  if (!service || !locationSlug) {
    return false;
  }

  if (!Array.isArray(service.locations)) {
    return false;
  }

  return service.locations.includes(locationSlug);
}

/*
|--------------------------------------------------------------------------
| Get One Service Location Page
|--------------------------------------------------------------------------
*/

export function getServiceLocation(serviceSlug, locationSlug) {
  const service = getService(serviceSlug);

  if (!service) {
    return null;
  }

  const location = getLocation(locationSlug);

  if (!location) {
    return null;
  }

  if (!isServiceAvailableInLocation(service, locationSlug)) {
    return null;
  }

  return {
    service,
    location,
  };
}

/*
|--------------------------------------------------------------------------
| Get All Valid Service ↔ Location Pages
|--------------------------------------------------------------------------
*/

export function getAllServiceLocationPages() {
  const pages = [];

  for (const service of services) {
    if (!Array.isArray(service.locations)) {
      continue;
    }

    for (const locationSlug of service.locations) {
      const location = getLocation(locationSlug);

      if (!location) {
        continue;
      }

      pages.push({
        service,
        location,
      });
    }
  }

  return pages;
}

/*
|--------------------------------------------------------------------------
| Get Locations Available For A Service
|--------------------------------------------------------------------------
*/

export function getServiceLocations(serviceSlug) {
  const service = getService(serviceSlug);

  if (!service || !Array.isArray(service.locations)) {
    return [];
  }

  return service.locations
    .map((locationSlug) => getLocation(locationSlug))
    .filter(Boolean);
}

/*
|--------------------------------------------------------------------------
| Get Services Available In A Location
|--------------------------------------------------------------------------
*/

export function getLocationServices(locationSlug) {
  const location = getLocation(locationSlug);

  if (!location) {
    return [];
  }

  return services.filter((service) =>
    isServiceAvailableInLocation(service, locationSlug),
  );
}

/*
|--------------------------------------------------------------------------
| Export Locations
|--------------------------------------------------------------------------
*/

export { locations };

import services from "@/data/services";
import locations from "@/data/locations";

export function getAllServiceLocationPages() {
  const pages = [];

  services.forEach((service) => {
    if (!service.locations) return;

    service.locations.forEach((locationSlug) => {
      const location = locations.find((loc) => loc.slug === locationSlug);

      if (!location) return;

      pages.push({
        service,
        location,
      });
    });
  });

  return pages;
}

export function getServiceLocation(serviceSlug, locationSlug) {
  const service = services.find((item) => item.slug === serviceSlug);

  const location = locations.find((item) => item.slug === locationSlug);

  if (!service || !location) return null;

  return {
    service,
    location,
  };
}

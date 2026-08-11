import services from "@/data/services";
import locations from "@/data/locations";

/*
|--------------------------------------------------------------------------
| Get all valid Service + Location pages
|--------------------------------------------------------------------------
|
| A page is generated only when BOTH sides agree:
|
| Service → locations includes the location
| Location → services includes the service
|
*/

export function getAllServiceLocationPages() {
  const pages = [];

  services.forEach((service) => {
    locations.forEach((location) => {
      const serviceAllowsLocation =
        !service.locations || service.locations.includes(location.slug);

      const locationAllowsService =
        !location.services || location.services.includes(service.slug);

      if (serviceAllowsLocation && locationAllowsService) {
        pages.push({
          service,
          location,
        });
      }
    });
  });

  return pages;
}

/*
|--------------------------------------------------------------------------
| Get one Service + Location page
|--------------------------------------------------------------------------
*/

export function getServiceLocation(serviceSlug, locationSlug) {
  const service = services.find((item) => item.slug === serviceSlug);

  const location = locations.find((item) => item.slug === locationSlug);

  // Service or location does not exist
  if (!service || !location) {
    return null;
  }

  // Check Service → Location relationship
  const serviceAllowsLocation =
    !service.locations || service.locations.includes(location.slug);

  // Check Location → Service relationship
  const locationAllowsService =
    !location.services || location.services.includes(service.slug);

  // Invalid combination
  if (!serviceAllowsLocation || !locationAllowsService) {
    return null;
  }

  return {
    service,
    location,
  };
}

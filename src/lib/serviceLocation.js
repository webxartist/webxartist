import services from "@/data/services";
import locations from "@/data/locations";

/*
|--------------------------------------------------------------------------
| Check whether a service is allowed in a location
|--------------------------------------------------------------------------
*/

function isServiceAllowedForLocation(service, location) {
  const serviceAllowsLocation =
    !service.locations || service.locations.includes(location.slug);

  const locationAllowsService =
    !location.services || location.services.includes(service.slug);

  return serviceAllowsLocation && locationAllowsService;
}

/*
|--------------------------------------------------------------------------
| Get all valid Service + Location pages
|--------------------------------------------------------------------------
|
| A page is generated only when:
|
| 1. The service allows the location
| 2. The location allows the service
|
|--------------------------------------------------------------------------
*/

export function getAllServiceLocationPages() {
  const pages = [];

  for (const service of services) {
    for (const location of locations) {
      if (isServiceAllowedForLocation(service, location)) {
        pages.push({
          service,
          location,
        });
      }
    }
  }

  return pages;
}

/*
|--------------------------------------------------------------------------
| Get one valid Service + Location page
|--------------------------------------------------------------------------
*/

export function getServiceLocation(serviceSlug, locationSlug) {
  if (!serviceSlug || !locationSlug) {
    return null;
  }

  const service = services.find((item) => item.slug === serviceSlug);

  const location = locations.find((item) => item.slug === locationSlug);

  /*
  |--------------------------------------------------------------------------
  | Service or location does not exist
  |--------------------------------------------------------------------------
  */

  if (!service || !location) {
    return null;
  }

  /*
  |--------------------------------------------------------------------------
  | Validate Service ↔ Location relationship
  |--------------------------------------------------------------------------
  */

  if (!isServiceAllowedForLocation(service, location)) {
    return null;
  }

  return {
    service,
    location,
  };
}

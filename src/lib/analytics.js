export const GA_MEASUREMENT_ID = "G-29NBKJ07ZZ";

export function event(name, params = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag !== "function") {
    console.warn("Google Analytics is not loaded yet.");
    return;
  }

  window.gtag("event", name, params);
}

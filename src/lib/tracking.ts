/**
 * Appends all current URL query params to a destination URL.
 * Existing params on the destination are preserved (current URL params take precedence).
 * Safe for SSR (returns original href if window is unavailable).
 */
export const appendTrackingParams = (href: string): string => {
  if (typeof window === "undefined") return href;
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }

  const currentParams = new URLSearchParams(window.location.search);
  if ([...currentParams.keys()].length === 0) return href;

  try {
    // Resolve relative URLs against current origin so URL() doesn't throw
    const url = new URL(href, window.location.origin);
    currentParams.forEach((value, key) => {
      url.searchParams.set(key, value);
    });
    // Preserve original format for same-origin relative links
    if (href.startsWith("/") || !href.includes("://")) {
      return url.pathname + url.search + url.hash;
    }
    return url.toString();
  } catch {
    return href;
  }
};

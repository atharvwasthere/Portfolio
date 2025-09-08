export function cdnSrc(path) {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;

  const base = "https://cdn.atharvsingh.me"; // hardcoded CDN
  const normalized = path.startsWith("/") ? path : `/${path}`;

  // Prefer .avif on CDN if available by convention
  const avif = normalized.replace(/\.(jpg|jpeg|png|webp)$/i, ".avif");
  return `${base}${avif}`;
}

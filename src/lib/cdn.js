export function cdnSrc(path) {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;

  const base = import.meta.env.VITE_IMG_BASE?.replace(/\/+$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (!base) return normalized; // local dev → public

  // Prefer .avif on CDN if available by convention
  const avif = normalized.replace(/\.(jpg|jpeg|png|webp)$/i, ".avif");
  return `${base}${avif}`;
}

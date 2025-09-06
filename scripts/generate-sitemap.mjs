import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const SRC_DIR = path.join(ROOT, "src");

const BASE_URL =
  process.env.SITE_URL ||
  readPkgHomepage(ROOT) ||
  "https://atharvsingh.me";

const PROJECT_PREFIX = "/project/"; // <-- singular route

const CORE_ROUTES = [
  "/", "/projects", "/blogs", "/about", "/resume", "/value", "/background", "/contact",
];

/* ---------------- utils ---------------- */
function readPkgHomepage(root) {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
    return pkg.homepage || null;
  } catch { return null; }
}
function todayIST() {
  const now = new Date();
  const ist = new Date(now.getTime() + 5.5 * 60 * 60 * 1000);
  const y = ist.getUTCFullYear();
  const m = String(ist.getUTCMonth() + 1).padStart(2, "0");
  const d = String(ist.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
function walkSync(dir, exts, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walkSync(full, exts, out);
    else if (exts.includes(path.extname(e.name))) out.push(full);
  }
  return out;
}
function url(loc, lastmod, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
}

/* ------------ slug discovery ------------- */
function discoverProjectSlugs() {
  const slugs = new Set();
  const add = (s) => {
    const v = String(s || "").trim().replace(/^\//, "");
    if (v) slugs.add(v);
  };

  // Prefer your actual data file(s) — include .jsx
  const candidates = [
    path.join(SRC_DIR, "data", "ProjectData.jsx"),
    path.join(SRC_DIR, "data", "ProjectData.js"),
    path.join(SRC_DIR, "data", "projectsData.jsx"),
    path.join(SRC_DIR, "data", "projectsData.js"),
    path.join(SRC_DIR, "data", "projects.json"),
  ];

  for (const p of candidates) {
    if (!fs.existsSync(p)) continue;
    const txt = fs.readFileSync(p, "utf8");

    // If it's JSON object: { "airwise": {...}, "web-crawler": {...} }
    if (p.endsWith(".json")) {
      try {
        const json = JSON.parse(txt);
        if (json && typeof json === "object" && !Array.isArray(json)) {
          Object.keys(json).forEach(add);
          return Array.from(slugs).sort();
        }
      } catch {}
    }

    // JS/JSX object: export const projectsData = { "airwise": {...}, ... }
    // or export default { "airwise": {...} }
    const objMatch =
      txt.match(/projects?Data\s*=\s*\{([\s\S]*?)\}\s*;?/i) ||
      txt.match(/export\s+default\s*\{([\s\S]*?)\}\s*;?/i);

    if (objMatch) {
      const body = objMatch[1];
      const keyRx = /["'`]([a-z0-9\-_/]+)["'`]\s*:/gi;
      let m;
      while ((m = keyRx.exec(body)) !== null) add(m[1]);
      if (slugs.size) return Array.from(slugs).sort();
    }

    // Also accept explicit "/project/<slug>" strings inside that file
    const linkRx = new RegExp(
      `[\"'\`]${PROJECT_PREFIX.replace(/\//g, "\\/")}([a-z0-9\\-_/]+)[\"'\`]`,
      "gi"
    );
    let m;
    while ((m = linkRx.exec(txt)) !== null) add(m[1]);
    if (slugs.size) return Array.from(slugs).sort();
  }

  // Fallback: scan src/**/*.jsx?ts? for "/project/<slug>"
  const files = walkSync(SRC_DIR, [".js", ".jsx", ".ts", ".tsx", ".md", ".mdx"]);
  const linkRx = new RegExp(
    `[\"'\`]${PROJECT_PREFIX.replace(/\//g, "\\/")}([a-z0-9\\-_/]+)[\"'\`]`,
    "gi"
  );
  for (const f of files) {
    const txt = fs.readFileSync(f, "utf8");
    let m;
    while ((m = linkRx.exec(txt)) !== null) add(m[1]);
  }
  return Array.from(slugs).sort();
}

/* ------------- write files -------------- */
function generateSitemapXML(routes, projectSlugs) {
  const lastmod = todayIST();

  const coreXml = routes.map((r, i) =>
    url(`${BASE_URL}${r}`, lastmod, i === 0 ? "1.0" : "0.8")
  );
  const projXml = projectSlugs.map((slug) =>
    url(`${BASE_URL}${PROJECT_PREFIX}${slug}`, lastmod, "0.8")
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${coreXml.join("\n")}
${projXml.join("\n")}
</urlset>
`;
}
function ensurePublicDir() {
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}
function writeRobotsTxt() {
  const robots = `User-agent: *
Allow: /
Sitemap: ${BASE_URL}/sitemap.xml
`;
  fs.writeFileSync(path.join(PUBLIC_DIR, "robots.txt"), robots, "utf8");
}
function writeSitemapXml(xml) {
  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), xml, "utf8");
}

/* ---------------- main ------------------ */
(function main() {
  ensurePublicDir();
  const slugs = discoverProjectSlugs();
  const xml = generateSitemapXML(CORE_ROUTES, slugs);
  writeSitemapXml(xml);
  writeRobotsTxt();

  console.log(`✔ public/sitemap.xml -> ${CORE_ROUTES.length + slugs.length} URLs`);
  console.log(`✔ public/robots.txt   -> Sitemap ${BASE_URL}/sitemap.xml`);
  console.log(slugs.length ? `✔ Projects: ${slugs.join(", ")}` : "ℹ No project slugs found.");
})();

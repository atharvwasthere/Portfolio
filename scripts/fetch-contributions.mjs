// Build-time fetch of GitHub contributions for a fixed window.
// Scrapes the public (unauthenticated) contributions HTML — no PAT, no secret.
// Writes src/data/contributions.json consumed by <ContributionGraph>.
//
// Resilient by design: if the network fetch fails but a cached JSON already
// exists, keep the cache and exit 0 so CI builds never break on a flaky scrape.

import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const USER = "InternAtharv";
const FROM = "2025-11-19"; // inclusive
const TO = "2026-05-27"; // inclusive

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../src/data/contributions.json");

async function main() {
  const url = `https://github.com/users/${USER}/contributions`;
  const res = await fetch(url, {
    headers: { "x-requested-with": "XMLHttpRequest" },
  });
  if (!res.ok) throw new Error(`GitHub returned ${res.status}`);
  const html = await res.text();

  // Each day: <td ... data-date="YYYY-MM-DD" id="contribution-day-component-R-C" data-level="N" ...>
  const cells = [...html.matchAll(
    /data-date="(\d{4}-\d{2}-\d{2})"\s+id="(contribution-day-component-\d+-\d+)"\s+data-level="(\d)"/g
  )].map((m) => ({ date: m[1], id: m[2], level: Number(m[3]) }));

  if (cells.length === 0) throw new Error("parsed 0 day cells — HTML shape changed");

  // Counts live in the tooltip: <tool-tip for="<id>">N contributions on ...</tool-tip>
  const countById = new Map();
  for (const m of html.matchAll(
    /<tool-tip[^>]*for="(contribution-day-component-\d+-\d+)"[^>]*>([^<]*)<\/tool-tip>/g
  )) {
    const text = m[2];
    const num = /^No contributions/.test(text) ? 0 : Number((text.match(/^(\d+)/) || [])[1] || 0);
    countById.set(m[1], num);
  }

  const days = cells
    .filter((c) => c.date >= FROM && c.date <= TO)
    .map((c) => ({ date: c.date, count: countById.get(c.id) ?? 0, level: c.level }))
    .sort((a, b) => (a.date < b.date ? -1 : 1));

  if (days.length === 0) throw new Error(`no days in window ${FROM}..${TO}`);

  const total = days.reduce((s, d) => s + d.count, 0);

  // Longest run of consecutive active days within the window.
  let streak = 0;
  let run = 0;
  for (const d of days) {
    run = d.count > 0 ? run + 1 : 0;
    if (run > streak) streak = run;
  }

  const payload = { user: USER, from: FROM, to: TO, total, streak, days };
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(payload, null, 2) + "\n");
  console.log(`contributions: ${total} total, ${streak}-day streak, ${days.length} days -> ${OUT}`);
}

main().catch((err) => {
  console.error(`[fetch-contributions] ${err.message}`);
  if (existsSync(OUT)) {
    console.warn("[fetch-contributions] keeping existing cache, continuing build.");
    process.exit(0);
  }
  process.exit(1);
});

// src/components/projectsUI/table-of-contents.jsx
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const cx = (...xs) => xs.filter(Boolean).join(" ");
const baseSlug = (s = "") =>
  s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

// Measure the space above first real content heading (responsive: desktop/mobile)
function calcHeaderPx(article) {
  if (!article) return 0;
  const articleTop = article.getBoundingClientRect().top + window.scrollY;
  const firstH = article.querySelector("h2, h3");
  if (firstH) {
    const hTop = firstH.getBoundingClientRect().top + window.scrollY;
    return Math.max(0, Math.round(hTop - articleTop));
  }
  const hero = article.querySelector("header");
  if (hero) return Math.max(0, Math.round(hero.getBoundingClientRect().height));
  return 0;
}

export function TableOfContents({ rootSelector = "#page-content", className = "" }) {
  const [items, setItems] = useState([]);     // [{ id, title, level }]
  const [active, setActive] = useState("");
  const [headerPx, setHeaderPx] = useState(0);

  const nodesRef = useRef([]);                // heading nodes
  const offsRef  = useRef([]);                // absolute Y offsets for headings
  const rafRef   = useRef(0);

  // TOC auto-scroll bits
  const navRef   = useRef(null);              // scrollable TOC <nav>
  const itemRefs = useRef({});                // id -> <a> element
  const humanRef = useRef(0);                 // last time user interacted with TOC (ms)

  // Build list + offsets + responsive header offset
  useEffect(() => {
    const article = document.querySelector(rootSelector);
    if (!article) return;

    const computeHeader = () => setHeaderPx(calcHeaderPx(article));
    computeHeader();

    // Recompute header offset when layout changes
    let ro;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(computeHeader);
      article.querySelectorAll("header, h1, .mb-12, .bg-gray-50").forEach((el) => ro.observe(el));
      ro.observe(article);
    }

    // Collect headings, ensure unique IDs
    const nodes = Array.from(article.querySelectorAll("h2, h3"));
    const seen = new Map();
    nodes.forEach((h) => {
      const t = h.textContent || "";
      let slug = baseSlug(t) || "section";
      const n = (seen.get(slug) || 0) + 1;
      seen.set(slug, n);
      if (n > 1) slug = `${slug}-${n}`;
      if (!h.id) h.id = slug;
    });

    nodesRef.current = nodes;
    setItems(nodes.map((h) => ({
      id: h.id,
      title: h.textContent || "",
      level: Number(h.tagName.slice(1)), // 2/3
    })));

    const computeOffsets = () => {
      nodes.forEach((h) => (h.style.scrollMarginTop = `${headerPx + 8}px`));
      offsRef.current = nodes.map((h) => Math.floor(h.getBoundingClientRect().top + window.scrollY));
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY + headerPx;
        const offs = offsRef.current;
        let idx = 0;
        for (let i = 0; i < offs.length; i++) {
          if (offs[i] <= y) idx = i; else break;
        }
        const id = nodesRef.current[idx]?.id || nodesRef.current[0]?.id || "";
        setActive(id);
      });
    };

    computeOffsets();
    onScroll();

    const onResize = () => { computeHeader(); computeOffsets(); onScroll(); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
  }, [rootSelector, headerPx]);

  // Auto-scroll the TOC so the active item stays visible.
  // Pauses if the user recently interacted with the TOC (wheel/touch/scroll/hover).
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const markHuman = () => { humanRef.current = Date.now(); };
    const handlers = ["wheel", "touchstart", "pointerdown", "scroll", "mouseenter", "keydown"];
    handlers.forEach((ev) => nav.addEventListener(ev, markHuman, { passive: true }));

    return () => handlers.forEach((ev) => nav.removeEventListener(ev, markHuman));
  }, []);

  useEffect(() => {
    const el = itemRefs.current[active];
    const nav = navRef.current;
    if (!el || !nav) return;

    // If the user touched the TOC in the last 900ms, don't auto-scroll it.
    if (Date.now() - humanRef.current < 900) return;

    el.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [active]);

  const handleClick = (id) => (e) => {
    e.preventDefault();
    const idx = nodesRef.current.findIndex((n) => n.id === id);
    if (idx === -1) return;
    const y = offsRef.current[idx] - headerPx - 8;
    // prefer Lenis if available
    // @ts-ignore
    if (window.lenis?.scrollTo) window.lenis.scrollTo(y);
    else window.scrollTo({ top: y, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <aside
      aria-label="Table of contents"
      className={cx("hidden xl:block sticky top-24 h-[calc(100vh-7rem)]", className)}
    >
      <nav
        ref={navRef}
        className="text-left max-h-full overflow-auto"
      >
        <div className="mb-3 px-2 text-xs font-semibold uppercase tracking-wide text-black dark:text-white">
          On this page
        </div>
        <ul className="space-y-1.5 pr-1">
          {items.map((it) => {
            const isActive = it.id === active;
            return (
              <li key={it.id}>
                <a
                  ref={(node) => { if (node) itemRefs.current[it.id] = node; }}
                  href={`#${it.id}`}
                  onClick={handleClick(it.id)}
                  className={cx(
                    "block pl-3 pr-2 py-1.5 border-l-2 truncate transition-colors",
                    it.level === 3 ? "ml-3 text-sm" : "text-base",
                    isActive
                      ? "border-blue-600 text-black dark:text-white font-medium"
                      : "border-transparent text-black/85 dark:text-white/85 hover:text-black dark:hover:text-white"
                  )}
                >
                  {it.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

TableOfContents.propTypes = {
  rootSelector: PropTypes.string,
  className: PropTypes.string,
};

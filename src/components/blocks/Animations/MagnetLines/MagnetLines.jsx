/*
	jsrepo 1.36.0
	Installed from https://reactbits.dev/tailwind/
	16-2-2025
*/
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function MagnetLines({
  rows = 9,
  columns = 9,
  maxSize = 480,            // px cap
  minSize = 220,            // px floor
  lineColor,
  baseAngle = -10,
  className = "",
  style = {},
}) {
  const containerRef = useRef(null);
  const [size, setSize] = useState(320);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      const s = Math.max(minSize, Math.min(w, maxSize));
      setSize(s);
    });
    ro.observe(el.parentElement || el);
    return () => ro.disconnect();
  }, [minSize, maxSize]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = container.querySelectorAll("span");

    const onPointerMove = (pointer) => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;
        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.hypot(a, b) || 1;
        const r = (Math.acos(b / c) * 180 / Math.PI) * (pointer.y > centerY ? 1 : -1);
        item.style.setProperty("--rotate", `${r}deg`);
      });
    };

    window.addEventListener("pointermove", onPointerMove);
    if (items.length) {
      const mid = Math.floor(items.length / 2);
      const rect = items[mid].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  // Scaling sticks with the container size
  const lineWidthPx  = Math.round(size * 0.02); // ~2% of box
  const lineHeightPx = Math.round(size * 0.11); // ~11% of box

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      className="block origin-center"
      style={{
        backgroundColor: lineColor,
        width: `${lineWidthPx}px`,
        height: `${lineHeightPx}px`,
        "--rotate": `${baseAngle}deg`,
        transform: "rotate(var(--rotate))",
        willChange: "transform",
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className={`grid place-items-center ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
    >
      {spans}
    </div>
  );
}

MagnetLines.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
  maxSize: PropTypes.number,
  minSize: PropTypes.number,
  lineColor: PropTypes.string,
  baseAngle: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

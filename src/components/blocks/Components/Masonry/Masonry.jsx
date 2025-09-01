import { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from "@react-spring/web";
import PropTypes from "prop-types";

/* -------------------- Desktop: your original masonry -------------------- */
function DesktopMasonry({ data = [] }) {
  const [columns, setColumns] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(min-width: 1500px)").matches) {
        setColumns(5);
      } else if (window.matchMedia("(min-width: 1000px)").matches) {
        setColumns(4);
      } else if (window.matchMedia("(min-width: 600px)").matches) {
        setColumns(3);
      } else {
        setColumns(1);
      }
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const ref = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) setWidth(ref.current.offsetWidth);
    };
    const timer = setTimeout(handleResize, 100);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const [heights, gridItems] = useMemo(() => {
    if (!data.length || width === 0) {
      return [new Array(columns).fill(0), []];
    }
    let heights = new Array(columns).fill(0);
    let gridItems = data
      .sort((a, b) => (b.priority || 0) - (a.priority || 0))
      .map((child) => {
        const column = heights.indexOf(Math.min(...heights));
        const x = (width / columns) * column;
        const aspectRatio =
          child.width && child.height ? child.width / child.height : 1;
        const baseHeight = child.height || 300;
        const finalHeight = baseHeight / 2;
        const y = (heights[column] += finalHeight) - finalHeight;
        return {
          ...child,
          x,
          y,
          width: width / columns,
          height: finalHeight,
          aspectRatio,
        };
      });
    return [heights, gridItems];
  }, [columns, data, width]);

  const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);

  const transitions = useTransition(gridItems, {
    keys: (item) => item.id || item.image,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
    onRest: () => setIsLoading(false),
  });

  if (!data.length) {
    return (
      <div className="w-full h-32 flex items-center justify-center text-gray-500">
        No images to display
      </div>
    );
  }

  return (
    <>
      <div
        ref={ref}
        className="relative w-full h-full"
        style={{ height: Math.max(...heights) || "auto" }}
      >
        {transitions((style, item) => (
          <a.div
            key={item.id || item.image}
            style={style}
            className="absolute p-4 [will-change:transform,width,height,opacity]"
          >
            <div
              className="relative w-full h-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-none"
              style={{ backgroundColor: "#ffffff" }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={item.image}
                alt={item.alt || item.caption || `Image ${item.id || "unknown"}`}
                loading={item.loading || "lazy"}
                decoding="async"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </a.div>
        ))}
      </div>

      {hoveredItem && hoveredItem.caption && (
        <div
          className="fixed pointer-events-none z-50 bg-green-100/10 text-green-400 dark:text-cyan-400 dark:bg-teal-200/10 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-white/20"
          style={{ left: cursorPos.x + 15, top: cursorPos.y + 15 }}
        >
          {hoveredItem.caption}
        </div>
      )}
    </>
  );
}

/* -------------------- Mobile: square, collapsible -------------------- */
function MobileMasonry({ data = [], initialCount = 6 }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [columns, setColumns] = useState(2);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width || 0;
      setWidth(w);
    });
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (width >= 560) setColumns(3);
    else setColumns(2);
  }, [width]);

  const visible = expanded ? data : data.slice(0, initialCount);

  const [heights, items] = useMemo(() => {
    if (!visible.length || width === 0) {
      return [new Array(columns).fill(0), []];
    }
    const colW = width / columns;
    const h = new Array(columns).fill(0);

    const list = visible.map((child) => {
      const col = h.indexOf(Math.min(...h));
      const tileW = colW;
      const tileH = tileW; // square
      const x = tileW * col;
      const y = h[col];
      h[col] += tileH;
      return { ...child, x, y, width: tileW, height: tileH };
    });
    return [h, list];
  }, [visible, width, columns]);

  const transitions = useTransition(items, {
    keys: (it) => it.id || it.image,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 420, friction: 90 },
    trail: 20,
  });

  if (!data.length) {
    return (
      <div className="w-full h-24 flex items-center justify-center text-gray-500">
        No images to display
      </div>
    );
  }

  return (
    <>
      <div
        ref={ref}
        className="relative w-full"
        style={{ height: Math.max(...heights, 0) }}
      >
        {transitions((style, item) => (
          <a.div
            key={item.id || item.image}
            style={style}
            className="absolute p-2"
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg bg-neutral-900/20">
              <img
                src={item.image}
                alt={item.alt || item.caption || "Photo"}
                loading={item.loading || "lazy"}
                decoding="async"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </a.div>
        ))}
      </div>

      {!expanded && data.length > initialCount && (
        <div className="mt-4 flex justify-center p-4">
          <button
            onClick={() => setExpanded(true)}
            className="rounded-xl px-4 py-2  w-fit font-cabinet text-lg
             bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/20
             dark:bg-cyan-500/10 dark:text-cyan-400 dark:hover:bg-cyan-500/20
             transition-colors"
            aria-label="View all photos"
          >
            View all photos
          </button>
        </div>
      )}
    </>
  );
}

/* -------------------- Responsive switch -------------------- */
export default function Masonry(props) {
  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const onR = () => setW(window.innerWidth);
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);
  const isMobile = w < 640;
  return isMobile ? <MobileMasonry {...props} /> : <DesktopMasonry {...props} />;
}
export { DesktopMasonry, MobileMasonry };

DesktopMasonry.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool
};
MobileMasonry.propTypes = {
  data: PropTypes.array,
  initialCount: PropTypes.number
};
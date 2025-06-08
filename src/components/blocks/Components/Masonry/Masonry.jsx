import { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from "@react-spring/web";

// eslint-disable-next-line react/prop-types
function Masonry({ data = [] }) {
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
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    // Initial width calculation with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      handleResize();
    }, 100);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const [heights, gridItems] = useMemo(() => {
    // Return empty array if no data or width is 0
    if (!data.length || width === 0) {
      return [new Array(columns).fill(0), []];
    }

    let heights = new Array(columns).fill(0);
    let gridItems = data
      .sort((a, b) => (b.priority || 0) - (a.priority || 0))
      .map((child) => {
        const column = heights.indexOf(Math.min(...heights));
        const x = (width / columns) * column;
        const aspectRatio = child.width && child.height ? child.width / child.height : 1;
        // Use a default height if not provided
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

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const transitions = useTransition(gridItems, {
    keys: (item) => item.id || item.image, // Fallback to image if no id
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
    onRest: () => setIsLoading(false),
  });

  // Don't render anything if no data
  if (!data.length) {
    return <div className="w-full h-32 flex items-center justify-center text-gray-500">No images to display</div>;
  }

  return (
    <>
      <div
        ref={ref}
        className="relative w-full h-full"
        style={{ height: Math.max(...heights) || 'auto' }}
      >
        {transitions((style, item) => (
          <a.div
            key={item.id || item.image}
            style={style}
            className="absolute p-4 [will-change:transform,width,height,opacity]"
          >
            <div
              className="relative w-full h-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-none"
              style={{
                backgroundColor: "#ffffff",
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={item.image}
                alt={item.alt || item.caption || `Image ${item.id || 'unknown'}`}
                loading={item.loading || "lazy"}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Handle broken images
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </a.div>
        ))}
      </div>

      {/* Floating caption tooltip */}
      {hoveredItem && hoveredItem.caption && (
        <div
          className="fixed pointer-events-none z-50bg-green-100/10 text-green-400  dark:text-cyan-400 dark:bg-teal-200/10 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-white/20"
          style={{
            left: cursorPos.x + 15,
            top: cursorPos.y + 15,
            transform: 'translate(0, 0)',
          }}
        >
          {hoveredItem.caption}
        </div>
      )}
    </>
  );
}

export default Masonry;
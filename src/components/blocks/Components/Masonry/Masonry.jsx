import { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from "@react-spring/web";

function Masonry({ data }) {
  const [columns, setColumns] = useState(2);
  const [isLoading, setIsLoading] = useState(true);

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

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = data
      .sort((a, b) => (b.priority || 0) - (a.priority || 0))
      .map((child) => {
        const column = heights.indexOf(Math.min(...heights));
        const x = (width / columns) * column;
        const aspectRatio = child.width ? child.width / child.height : 1;
        const finalHeight = child.height / 2;
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

  const transitions = useTransition(gridItems, {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
    onRest: () => setIsLoading(false),
  });

  return (
    <div
      ref={ref}
      className="relative w-full h-full"
      style={{ height: Math.max(...heights) }}
    >
      {transitions((style, item) => (
        <a.div
          key={item.id}
          style={style}
          className="absolute p-4 [will-change:transform,width,height,opacity]"
        >
          <div
            className="group relative w-full h-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <img
              src={item.image}
              alt={item.alt || `Image ${item.id}`}
              loading={item.loading || "lazy"}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay with metadata */}
            <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-60">
              <div className="absolute inset-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.caption && (
                  <h3 className="text-lg font-semibold mb-2">{item.caption}</h3>
                )}
                {item.description && (
                  <p className="text-sm mb-2">{item.description}</p>
                )}
                {item.photographer && (
                  <p className="text-xs mt-auto">© {item.photographer}</p>
                )}
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </a.div>
      ))}
    </div>
  );
}

export default Masonry;
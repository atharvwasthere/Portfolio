import { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import { cn } from "@/lib/utils"

export function TableOfContents({ className }) {
  const [tocItems, setTocItems] = useState([])
  const [activeId, setActiveId] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const observerRef = useRef(null)

  useEffect(() => {
    // Get all headings and create refs for them
    const headings = document.querySelectorAll("h2, h3")
    const items = Array.from(headings).map((heading) => ({
      id: heading.id,
      title: heading.textContent || "",
      level: Number.parseInt(heading.tagName.charAt(1), 10),
      ref: { current: heading },
    }))
    setTocItems(items)

    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    // Create new intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const intersectingEntries = entries.filter((entry) => entry.isIntersecting)

        if (intersectingEntries.length > 0) {
          const sortedEntries = intersectingEntries.sort((a, b) => {
            if (b.intersectionRatio !== a.intersectionRatio) {
              return b.intersectionRatio - a.intersectionRatio
            }
            return a.boundingClientRect.top - b.boundingClientRect.top
          })

          setActiveId(sortedEntries[0].target.id)
        }
      },
      {
        rootMargin: "-10% 0% -50% 0%",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    // Observe all headings
    headings.forEach((heading) => {
      if (observerRef.current) {
        observerRef.current.observe(heading)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const scrollToSection = (id) => {
    const item = tocItems.find((item) => item.id === id)
    if (item?.ref.current) {
      setActiveId(id)
      item.ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div
      className={cn("fixed right-8 top-1/4 z-10", className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div
        className={cn(
          "transition-all duration-300 overflow-hidden",
          isVisible
            ? "opacity-100 w-64 bg-black/90 p-4 rounded-lg shadow-lg"
            : "opacity-40 w-8 bg-black/70 p-2 rounded-lg"
        )}
      >
        {!isVisible ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-4 h-0.5 bg-gray-400 rounded"></div>
            <div className="w-4 h-0.5 bg-gray-400 rounded"></div>
            <div className="w-4 h-0.5 bg-gray-400 rounded"></div>
          </div>
        ) : (
          <nav className="space-y-1">
            {tocItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "block w-full text-left text-sm py-2 px-3 rounded transition-all duration-200 border-l-2",
                  item.level === 3 && "ml-4 text-xs",
                  activeId === item.id
                    ? "text-blue-400 border-blue-400 font-medium bg-blue-400/10"
                    : "text-gray-400 border-transparent hover:text-gray-200 hover:border-gray-500 hover:bg-gray-800/50"
                )}
              >
                {item.title}
              </button>
            ))}
          </nav>
        )}
      </div>
    </div>
  )
}

TableOfContents.propTypes = {
  className: PropTypes.string,
}

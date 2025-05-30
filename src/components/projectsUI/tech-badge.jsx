import { cn } from "@/lib/utils"
import PropTypes from 'prop-types'

TechBadge.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["frontend", "backend", "database", "tool", "language"]),
  className: PropTypes.string,
}

export function TechBadge({ name, type = "tool", className }) {
  const typeStyles = {
    frontend: "bg-blue-100 text-blue-800 border-blue-200",
    backend: "bg-green-100 text-green-800 border-green-200",
    database: "bg-purple-100 text-purple-800 border-purple-200",
    tool: "bg-gray-100 text-gray-800 border-gray-200",
    language: "bg-orange-100 text-orange-800 border-orange-200",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
        typeStyles[type],
        className,
      )}
    >
      {name}
    </span>
  )
}

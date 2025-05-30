import PropTypes from 'prop-types'
import { cn } from "@/lib/utils"


NotionCallout.propTypes = {
  type: PropTypes.oneOf(["info", "warning", "success", "error", "note"]),
  icon: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}


export function NotionCallout({ type = "info", icon, title, children, className }) {
  const typeStyles = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
    success: "bg-green-50 border-green-200 text-green-900",
    error: "bg-red-50 border-red-200 text-red-900",
    note: "bg-gray-50 border-gray-200 text-gray-900",
  }

  const defaultIcons = {
    info: "💡",
    warning: "⚠️",
    success: "✅",
    error: "❌",
    note: "📝",
  }

  return (
    <div className={cn("border-l-4 p-4 rounded-r-lg", typeStyles[type], className)}>
      <div className="flex items-start gap-3">
        <span className="text-lg flex-shrink-0">{icon || defaultIcons[type]}</span>
        <div className="flex-1">
          {title && <div className="font-semibold mb-1">{title}</div>}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}

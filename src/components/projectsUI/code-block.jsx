import { cn } from "@/lib/utils"
import PropTypes from 'prop-types'

export function CodeBlock({ children, language = "javascript", title, className }) {
  return (
    <div className={cn("rounded-lg overflow-hidden border border-gray-200", className)}>
      {title && (
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 text-sm font-mono text-gray-700 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span>{title}</span>
        </div>
      )}
      <div className="bg-gray-900 text-gray-100 p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  )
}

CodeBlock.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
}

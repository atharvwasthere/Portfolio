import PropTypes from 'prop-types'
import { cn } from "@/lib/utils"

TerminalBlock.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
}

export function TerminalBlock({ children, title, className }) {
  return (
    <div className={cn("bg-gray-900 rounded-lg overflow-hidden border border-gray-700", className)}>
      {title && (
        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-300 text-sm font-mono ml-2">{title}</span>
          </div>
        </div>
      )}
      <div className="p-4 font-mono text-sm text-gray-100 overflow-x-auto">
        <pre className="whitespace-pre-wrap">{children}</pre>
      </div>
    </div>
  )
}

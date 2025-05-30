import PropTypes from 'prop-types'
import { cn } from "@/lib/utils"

NotionQuote.propTypes = {
  children: PropTypes.node.isRequired, // required
  author: PropTypes.string,
  className: PropTypes.string,
}

export function NotionQuote({ children, author, className }) {
  return (
    <blockquote
      className={cn("border-l-4 border-gray-300 pl-4 py-2 italic text-gray-700 bg-gray-50 rounded-r", className)}
    >
      <div className="text-lg leading-relaxed">{children}</div>
      {author && <cite className="text-sm text-gray-500 not-italic mt-2 block">— {author}</cite>}
    </blockquote>
  )
}

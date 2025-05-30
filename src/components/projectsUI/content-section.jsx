import { cn } from "@/lib/utils"
import PropTypes from 'prop-types'


export function ContentSection({ id, title, children, className }) {
  return (
    <section id={id} className={cn("scroll-mt-20", className)}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">{title}</h2>
      <div className="prose prose-gray max-w-none">{children}</div>
    </section>
  )
}

ContentSection.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
}
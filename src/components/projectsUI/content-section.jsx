import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const slug = (s) =>
  s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

export function ContentSection({ id, title, children, className }) {
  const headingId = id || slug(title || "");
  return (
    <section id={headingId} className={cn("scroll-mt-20", className)}>
      <h2
        id={headingId}
        className="scroll-mt-28 text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2"
      >
        {title}
      </h2>
      <div className="prose prose-gray max-w-none">{children}</div>
    </section>
  );
}

ContentSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node, // <- allow nodes, not just string
  className: PropTypes.string,
};

import { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"

export default function LazyWhenVisible({ loader, rootMargin = "200px" }) {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setShow(true)),
      { rootMargin }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [rootMargin])
  return <div ref={ref}>{show ? loader() : null}</div>
}

LazyWhenVisible.propTypes = {
  loader: PropTypes.func.isRequired,
  rootMargin: PropTypes.string
}

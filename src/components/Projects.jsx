import { useEffect, lazy, Suspense } from "react"
import LogoMarquee from "./LogoMarquee.jsx"
import Lenis from "lenis"

// 🔻 lazy chunk for heavy cards grid
const ProjectsSection = lazy(() => import("./ProjectsSection.tsx"))

// tiny skeleton (replace with your shadcn/ui skeleton if you have one)
function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-52 rounded-xl bg-neutral-800/40 animate-pulse" />
      ))}
    </div>
  )
}

const Projects = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <section className="mt-16 md:mt-24 p-2">
      {/* LOGOS */}
      <LogoMarquee className="m-4" />

      {/* HEADINGS */}
      <h1 className="px-1 sm:px-0 font-display font-light text-large md:text-huge text-start leading-[0.975]">
        Some of the <strong>Projects</strong>
      </h1>
      <h1 className="px-1 sm:px-0 font-display font-light text-large md:text-huge text-start leading-[0.975]">
        I&apos;ve worked on
      </h1>

      {/* PROJECTS CARDS (lazy) */}
      <div className="px-1 sm:px-0 flex flex-col justify-center my-8 -ml-4">
        <Suspense fallback={<ProjectsSkeleton />}>
          <ProjectsSection />
        </Suspense>
      </div>
    </section>
  )
}

export default Projects

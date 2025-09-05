// BEFORE: direct imports for Projects, Value, Background, About, Contact, Masonry, Pics
import { useRef, useState, useEffect, lazy, Suspense } from "react"
import Header from "@/components/Header"
import Nav from "@/components/Nav"
import IntroText from "@/components/IntroText"
import Footer from "@/components/Footer"
import SplashScreen from "@/components/SplashScreen"
import { useUI } from "@/components/ui/globalSeen"
import LazyWhenVisible from "@/components/lazyWhenVisible"

// lazy chunks for heavy/below-the-fold sections
const Projects = lazy(() => import("@/components/Projects"))
const Value = lazy(() => import("@/components/Values"))
const Background = lazy(() => import("@/components/Background"))
const About = lazy(() => import("@/components/About"))
const Contact = lazy(() => import("@/components/Contact"))
const MasonryGallery = lazy(() => import("@/components/MasonryGallery.jsx"))

export default function Landing() {
  const splashSeen = useUI((s) => s.splashSeen)
  const markSplashSeen = useUI((s) => s.markSplashSeen)
  const [contentVisible, setContentVisible] = useState(() => splashSeen)

  useEffect(() => {
    if (splashSeen) {
      const t = setTimeout(() => setContentVisible(true), 300)
      return () => clearTimeout(t)
    }
  }, [splashSeen])

  const introRef = useRef(null)
  const projectsRef = useRef(null)
  const valueRef = useRef(null)
  const backgroundRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref?.current) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 72
      const elementPosition = ref.current.offsetTop - headerHeight
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
  }

  const showSplash = !splashSeen

  return (
    <div className="min-h-screen min-w-full bg-background text-foreground">
      {showSplash && <SplashScreen onFinish={markSplashSeen} />}

      <div
        style={{
          opacity: contentVisible ? 1 : 0,
          transition: "opacity 300ms ease-in",
          visibility: contentVisible ? "visible" : "hidden",
        }}
      >
        <Header
          scrollToSection={scrollToSection}
          introSection={introRef}
          projectsSection={projectsRef}
          valueSection={valueRef}
          backgroundSection={backgroundRef}
          aboutSection={aboutRef}
          contactSection={contactRef}
        />

        <div className="flex">
          <Nav
            scrollToSection={scrollToSection}
            introSection={introRef}
            projectsSection={projectsRef}
            valueSection={valueRef}
            backgroundSection={backgroundRef}
            aboutSection={aboutRef}
            contactSection={contactRef}
          />

          <main className="flex-1 mt-16 md:ml-48">
            {/* Above-the-fold stays inline + light */}
            <div ref={introRef}>
              <IntroText />
            </div>

            <div className="mt-[200px] md:mt-0" />

            {/* Below-the-fold: load on visibility */}
            <div ref={projectsRef}>
              <Suspense fallback={null}>
                <LazyWhenVisible loader={() => <Projects />} />
              </Suspense>
            </div>

            <div ref={valueRef}>
              <Suspense fallback={null}>
                <LazyWhenVisible loader={() => <Value />} />
              </Suspense>
            </div>

            <div ref={backgroundRef}>
              <Suspense fallback={null}>
                <LazyWhenVisible loader={() => <Background />} />
              </Suspense>
            </div>

            <div ref={aboutRef}>
              <Suspense fallback={null}>
                <LazyWhenVisible loader={() => <MasonryGallery />} />
              </Suspense>
              <Suspense fallback={null}>
                <LazyWhenVisible loader={() => <About />} />
              </Suspense>
            </div>

            <div ref={contactRef}>
              <Suspense fallback={null}>
                <LazyWhenVisible loader={() => <Contact />} />
              </Suspense>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </div>
  )
}

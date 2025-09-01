import Header from "@/components/Header";
import Nav from "@/components/Nav";
import IntroText from "@/components/IntroText";
import Projects from "@/components/Projects";
import Value from "@/components/Values";
import Background from "@/components/Background";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useUI } from "@/components/ui/globalSeen";
import SplashScreen from "@/components/SplashScreen";
import Masonry from "@/components/blocks/Components/Masonry/Masonry";
import { Pics } from "@/data/Data";
import { useRef, useState, useEffect } from "react";

const Landing = () => {
  const splashSeen = useUI((s) => s.splashSeen);
  const markSplashSeen = useUI((s) => s.markSplashSeen);

  const [contentVisible, setContentVisible] = useState(() => splashSeen);

  useEffect(() => {
    if (splashSeen) {
      const t = setTimeout(() => setContentVisible(true), 300);
      return () => clearTimeout(t);
    }
  }, [splashSeen]);

  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const valueRef = useRef(null);
  const backgroundRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 72;
      const elementPosition = ref.current.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const showSplash = !splashSeen;

  return (
    <div className="min-h-screen min-w-full bg-background text-foreground">
      {showSplash && (
        <SplashScreen
          // 🟢 when splash finishes, flip the global flag
          onFinish={markSplashSeen}
        />
      )}

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
            <div ref={introRef}>
              <IntroText />
            </div>
            <div className="mt-[200px] md:mt-0" />
            <div ref={projectsRef}>
              <Projects />
            </div>
            <div ref={valueRef}>
              <Value />
            </div>
            <div ref={backgroundRef}>
              <Background />
            </div>
            <div ref={aboutRef}>
              <Masonry data={Pics} />
              <About />
            </div>
            <div ref={contactRef}>
              <Contact />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;

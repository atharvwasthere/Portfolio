import Header from "@/components/Header";
import Nav from "@/components/Nav";
import IntroText from "@/components/IntroText";
import Projects from "@/components/Projects";
import Value from "@/components/Values";
import Background from "@/components/Background";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useRef } from "react";

const Landing = () => {
    // Adding References for each sections
    const introRef = useRef(null);
    const projectsRef = useRef(null);
    const valueRef = useRef(null);
    const backgroundRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref?.current) {
            // offset for header
            // 1256 * 72 is the dimension of the header
            const headerHeight = document.querySelector('header')?.offsetHeight || 72;
            const elementPosition = ref.current.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen min-w-full bg-background text-foreground">
            <Header />
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
                    <div className="mt-[400px] md:mt-0" />
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
                        <About />
                    </div>
                    <div ref={contactRef}>
                        <Contact />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Landing;
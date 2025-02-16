import Header from "@/components/Header";
import Nav from "@/components/Nav";
import IntroText from "@/components/IntroText";
import Projects from "@/components/Projects";
import Value from "@/components/Values";
import Background from "@/components/Background";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SplashScreen from "@/components/SplashScreen";
import { useRef, useState, useEffect } from "react";

const Landing = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [contentVisible, setContentVisible] = useState(false);

    // References for each section
    const introRef = useRef(null);
    const projectsRef = useRef(null);
    const valueRef = useRef(null);
    const backgroundRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        // Add a slight delay before showing content to ensure smooth transition
        if (!showSplash) {
            const timer = setTimeout(() => {
                setContentVisible(true);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [showSplash]);

    const scrollToSection = (ref) => {
        if (ref?.current) {
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
            {showSplash && (
                <SplashScreen 
                    onFinish={() => setShowSplash(false)} 
                    duration={5000} // Match the duration from your splash screen
                />
            )}
            <div 
                style={{
                    opacity: contentVisible ? 1 : 0,
                    transition: 'opacity 300ms ease-in',
                    visibility: contentVisible ? 'visible' : 'hidden'
                }}
            >
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
        </div>
    );
};

export default Landing;
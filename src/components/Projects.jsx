import ProjectsSection from "./ProjectsSection.tsx";
import LogoMarquee from "./LogoMarquee.jsx";
import  { useEffect } from 'react';
import Lenis from 'lenis'; // Smooth scrolling library

const Projects = () => {
    useEffect(() => {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });
    
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
    
        requestAnimationFrame(raf);
    
        return () => {
          lenis.destroy();
        };
      }, []);
    return (
        <section className=" mt-32 p-2">
            {/* LOGO's*/}
                    <LogoMarquee className="m-4"/>
            {/* PROJECTS TEXT */}
            <h1 className="font-title text-large md:text-huge text-start leading-[0.975]">Some of the Projects </h1>
            <h1 className="font-title text-large md:text-huge text-start leading-[0.975]">I&apos;ve worked on</h1>
            {/* PROJECTS CARDS */}
            <div className="flex flex-col justify-center my-8 -ml-4">
              
                <ProjectsSection />
            </div>

        </section>
    )
}

export default Projects;

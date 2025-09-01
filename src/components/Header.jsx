import { useState } from "react";
import PropTypes from "prop-types";
import { Menu } from "lucide-react";
import AnimatedName from "./AnimatedName";
import { ModeToggle } from "./mode-toggle";
import MobileNavDrawer from "./ui/MobileNavDrawer";

const Header = ({
  scrollToSection,
  introSection, projectsSection, valueSection,
  backgroundSection, aboutSection, contactSection,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="w-full mx-auto px-4 flex justify-between items-center py-4">
          <div className="-mx-1 sm:mx-3 font-header text-2xl md:text-4xl">
            <AnimatedName firstName="Atharv" lastName="Singh" />
          </div>
          <div className="flex items-center gap-2">
            <button className="px-2 md:hidden flex items-center" onClick={() => setOpen(true)}>
              <Menu />
            </button>
            <ModeToggle />
          </div>
        </div>
      </header>

            {/* SIBLING of header, not inside it */}
      <MobileNavDrawer
        open={open}
        setOpen={setOpen}
        scrollToSection={scrollToSection}
        introSection={introSection}
        projectsSection={projectsSection}
        valueSection={valueSection}
        backgroundSection={backgroundSection}
        aboutSection={aboutSection}
        contactSection={contactSection}
      />
    </>

  );
  
};

Header.propTypes = {
  scrollToSection: PropTypes.func,
  introSection: PropTypes.any,
  projectsSection: PropTypes.any,
  valueSection: PropTypes.any,
  backgroundSection: PropTypes.any,
  aboutSection: PropTypes.any,
  contactSection: PropTypes.any,
};

export default Header;

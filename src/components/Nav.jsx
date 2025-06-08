import { NavLink } from "react-router";
import { NotebookPen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedUnderline from "./ui/AnimatedUnderline";

const NavItem = ({ label, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        onClick={onClick}
        className="hidden md:block font-medium opacity-65 hover:opacity-100 hover:cursor-pointer hover:font-bold py-1"
      >
        {label}
      </a>
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute -bottom-[1px] left-0 right-0 h-[1px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
              <motion.path
                d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                stroke="#7043EC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                  strokeDasharray: 84.20591735839844,
                  strokeDashoffset: 84.20591735839844,
                }}
                animate={{
                  strokeDashoffset: 0,
                }}
                transition={{
                  duration: 1,
                }}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BlogLink = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <NavLink 
        to="/Blogs" 
        className="hidden md:block font-medium opacity-65 hover:opacity-100 hover:cursor-pointer hover:font-bold flex items-center gap-2"
      >
        <span>Blogs</span>
        <NotebookPen className="primary opacity-100" />
      </NavLink>
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute -bottom-[1px] left-0 right-0 h-[1px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
              <motion.path
                d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                stroke="#7043EC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                  strokeDasharray: 84.20591735839844,
                  strokeDashoffset: 84.20591735839844,
                }}
                animate={{
                  strokeDashoffset: 0,
                }}
                transition={{
                  duration: 1,
                }}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Nav = ({ scrollToSection, introSection, projectsSection, valueSection, backgroundSection, aboutSection, contactSection }) => {
  const navItems = ['Intro', 'Projects', 'Value', 'Background', 'About', 'Contact'];
  
  const getSectionRef = (section) => {
    switch(section) {
      case 'Intro':
        return introSection;
      case 'Projects':
        return projectsSection;
      case 'Value':
        return valueSection;
      case 'Background':
        return backgroundSection;
      case 'About':
        return aboutSection;
      case 'Contact':
        return contactSection;  
      default:
        return introSection;
    }
  };

  return (
    <aside id="nav" className="font-satoshiMedium fixed flex flex-col top-32 left-6 text-start">
      <ul className="py-.5 space-y-0.5">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavItem
              label={item}
              onClick={() => scrollToSection(getSectionRef(item))}
            />
          </li>
        ))}
      </ul>
      <ul className="py-16">
        <BlogLink />
      </ul>
    </aside>
  );
};

export default Nav;
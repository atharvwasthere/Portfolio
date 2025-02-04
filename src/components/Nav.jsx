import { NavLink } from "react-router";
import { NotebookPen } from "lucide-react";

// eslint-disable-next-line react/prop-types
const Nav = ({ scrollToSection, introSection, projectsSection, valueSection, backgroundSection, aboutSection, contactSection }) => {
    const navItems = ['Intro', 'Projects', 'Value', 'Background', 'About', 'Contact'];
    
    // adding function to get the section reference
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
        <aside id="nav" className="fixed flex flex-col top-32 left-6 text-start">
            <ul className="py-1.5">
                {navItems.map((item, index) => (
                    <a 
                        key={index} 
                        onClick={() => scrollToSection(getSectionRef(item))} 
                        className="hidden md:block font-medium opacity-65 hover:opacity-100 hover:cursor-pointer hover:font-bold"
                    >
                        {item}
                    </a>
                ))}
            </ul>
            <ul className="py-16">
                <NavLink to="/Blogs" className="hidden md:block font-medium opacity-65 hover:opacity-100 hover:cursor-pointer hover:font-bold">
                    Blogs
                    <NotebookPen className="primary opacity-100" />
                </NavLink>
            </ul>
        </aside>
    );
};

export default Nav;
import { NavLink } from "react-router";
import { NotebookPen } from "lucide-react";
const Nav = () => {
    const navItems = ['Intro', 'Projects', 'Value', 'Background', 'About', 'Contact'];

    return (
        <aside id="nav" className=" fixed flex flex-col top-32 left-6 text-start">
            <ul className="py-1.5">
                {navItems.map((item, index) => (
                        <li key={index} className="hidden md:block font-medium opacity-65 hover:opacity-100 hover:cursor-pointer hover:font-bold ">{item}</li>
                ))}
            </ul>
            <ul className="py-16">
                        <NavLink to="/Blogs" className="hidden md:block font-medium opacity-65 hover:opacity-100 hover:cursor-pointer hover:font-bold ">Blogs
                            <NotebookPen classname ="primary opacity-100"/>

                        </NavLink>
            </ul>


        </aside>

    )
}

export default Nav
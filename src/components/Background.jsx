import { Education, Experience } from "@/data/Data"
import { ChevronRight } from 'lucide-react';
import { useState } from "react";
// import { SvgColor } from "./ui/svgColor";
import { VitLogo } from "./ui/vitLogo";
import { SgLogo } from "./ui/SgLogo";



const Background = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const [isExpHovered, setIsExpHovered] = useState(false);
    const [isExpExpanded, setIsExpExpanded] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);

    };
    const handleMouseLeave = () => {
        if (!isExpanded) {
            setIsHovered(false);
        }
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);

    }

    const handleExpMouseEnter = () => {
        setIsExpHovered(true);
    };

    const handleExpMouseLeave = () => {
        if (!isExpExpanded) {
            setIsExpHovered(false);
        }
    };

    const toggleExpExpand = () => {
        setIsExpExpanded(!isExpExpanded);
    };
    return (
        <section id="main-outer-border" className=" text-start flex flex-col mt-28  text-primary p-4 ">
            <div id="title" className='font-display text-large md:text-huge mb-8 '>Background</div>
            <div id="logo" className="flex items-center justify-start py-2 md:py-4">
                {/* <div id="logo-image" className="py-4 dark:hidden"> */}
                {/* <SvgColor  className="w-48 h-48" /> */}

                <div>
                    <SgLogo className="h-10 w-auto md:h-14" />
                </div>
            </div>

            <div
                className="relative font-satoshi mb-8"
                onMouseEnter={handleExpMouseEnter}
                onMouseLeave={handleExpMouseLeave}
            >
                <div id="Role" className="py-2 ">
                    <div className="flex items-center text-3xl md:text-4xl">
                        <h1><u className="bg-emerald-500/10 text-emerald-600 px-1 py-1 rounded-md font-medium dark:bg-cyan-500/10 dark:text-cyan-400">SDE Intern</u></h1>
                        {(isExpHovered || isExpExpanded) && (
                            <button
                                onClick={toggleExpExpand}
                                className="ml-4 transition-transform duration-300 focus:outline-none"
                            >
                                <ChevronRight
                                    className={`w-6 h-6 transform ${isExpExpanded ? 'rotate-90' : ''}`}
                                />
                            </button>
                        )}
                    </div>
                    {isExpExpanded && (
                        <div className="mt-4 py-2 px-4 text-popover-foreground text-20px rounded-md transition-all duration-300 ease-in-out">
                            <li type="bullet">Built and shipped end-to-end billing and usage tracking systems in production, including credits and quota enforcement.</li>
                            <li type="bullet">Implemented job and quota visibility on the frontend, improving transparency and reliability across workflows.</li>
                        </div>
                    )}
                </div>
                <div id="when&where" className="flex flex-rows gap-4 py-2 ">
                    <div id="time" className="flex ">
                        {Experience[0].time}
                    </div>
                    <div id="location" className="flex ">
                        {Experience[0].location}
                    </div>
                </div>
            </div>
            <div id="logo" className="flex items-center justify-start h-32 w-32 ">
                {/* <div id="logo-image" className="py-4 dark:hidden"> */}
                {/* <SvgColor  className="w-48 h-48" /> */}

                <div>
                    <VitLogo />
                </div>
            </div>
            <div
                className="relative font-satoshi"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}

            >
                <div id="institution-name" className="font-cabinet  pt-8 text-3xl ">
                    {Education[0].institution_name}
                </div>
                <div id="Degree" className="py-5 ">
                    <div className="flex items-center text-3xl md:text-4xl">
                        <h1>BTech in <u className="bg-emerald-500/10 text-emerald-600 px-1 py-1 rounded-md font-medium dark:bg-cyan-500/10 dark:text-cyan-400">Computer Science</u> and Engineering </h1>
                        {(isHovered || isExpanded) && (
                            <button
                                onClick={toggleExpand}
                                className="ml-4 transition-transform duration-300 focus:outline-none"
                            >
                                <ChevronRight
                                    className={`w-6 h-6 transform ${isExpanded ? 'rotate-90' : ''}`}
                                />
                            </button>
                        )}
                    </div>
                    {isExpanded && (
                        <div className="mt-4 py-2 px-4 text-popover-foreground text-20px rounded-md transition-all duration-300 ease-in-out">
                            <li type="bullet">Current CGPA 8.5</li>

                        </div>
                    )}
                </div>
                <div id="when&where" className="flex flex-rows gap-4 py-2 ">
                    <div id="time" className="flex ">
                        {Education[0].time}
                    </div>
                    <div id="location" className="flex ">
                        {Education[0].location}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Background
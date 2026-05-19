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
                    {!isExpExpanded && (
                        <p className="mt-2 text-sm md:text-base text-muted-foreground font-satoshi">
                            Credit ledger <span className="text-emerald-600 dark:text-cyan-400">·</span> Vertex pipeline (<strong className="text-foreground">-90%</strong> runtime) <span className="text-emerald-600 dark:text-cyan-400">·</span> FB caching (<strong className="text-foreground">-75%</strong> cost) <span className="text-emerald-600 dark:text-cyan-400">·</span> +7 more
                        </p>
                    )}
                    {isExpExpanded && (
                        <ul className="mt-4 py-2 px-6 text-popover-foreground text-lg list-disc space-y-2 rounded-md transition-all duration-300 ease-in-out marker:text-emerald-500 dark:marker:text-cyan-400">
                            <li>
                                <strong>Built the credit ledger</strong> <code className="text-emerald-600 dark:text-cyan-400 font-mono text-sm">Reserve → Commit → Release</code>. Handles grants, deductions, clawbacks, idempotent events. Nothing double-charges.
                            </li>
                            <li>
                                <strong>Designed the Facebook Ad Library caching layer</strong> TTL strategy, piggyback execution so duplicate fetches don&apos;t stack, fire-and-forget async caching for raw data, achieving 40% cache hits and cutting costs by ~75%.
                            </li>
                            <li>
                                <strong>Vertex AI batch pipeline</strong> for 50K+ ad videos through Gemini, parent-child job orchestration over GCP Pub/Sub. Cut runtime ~90% (13K rows: 5h → 14-24 min) and cost ~50%.
                            </li>
                            <li>
                                <strong>Migrated billing</strong> from dollar-based to credit-based pricing. Backward compatible, audit history intact.
                            </li>
                            <li>
                                <strong>Billing page was taking 4s to load.</strong> Traced it to a 3-step <code className="text-emerald-600 dark:text-cyan-400 font-mono text-sm">useEffect</code> waterfall + a new connection on every request. Switched to persistent <code className="text-emerald-600 dark:text-cyan-400 font-mono text-sm">httpx.AsyncClient</code>, got it under 1s.
                            </li>
                            <li>
                                <strong>Built a dashboard preset engine</strong> that remaps columns by ID, name, and type so when datasets change, widgets degrade cleanly instead of just breaking.
                            </li>
                            <li>
                                <strong>Soft delete system</strong> via SQLAlchemy event hooks  <code className="text-emerald-600 dark:text-cyan-400 font-mono text-sm">before_flush</code> and <code className="text-emerald-600 dark:text-cyan-400 font-mono text-sm">do_orm_execute</code>. Every SELECT gets <code className="text-emerald-600 dark:text-cyan-400 font-mono text-sm">deleted_at IS NULL</code> injected automatically.
                            </li>
                            <li>
                                <strong>Bulk job cancellation</strong> for delete flows. Bulk UPDATE + Redis, ORM bypassed where it&apos;d just slow things down.
                            </li>
                            <li>
                                <strong>Resolved production bugs in real time</strong> typical TAT under 30 minutes from report to deploy, across billing, dashboards, and sync flows.
                            </li>
                            <li>
                                <strong>Polished the overall look & feel of the app</strong> tightened spacing, typography, and interaction states across core surfaces so the product reads as production-grade, not prototype.
                            </li>
                        </ul>
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
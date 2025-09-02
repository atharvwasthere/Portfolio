import { useTheme } from "./theme-provider";
import { useEffect, useMemo, useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router";
// import MagnetLines from './blocks/Animations/MagnetLines/MagnetLines';

const Value = () => {
    const Values = { description: "Useful. Reliable. Scalable. Well made" };
    const { theme, resolvedTheme } = useTheme();
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const CTA = currentTheme === "dark" ? "cta/fastlane-dark.svg" : "cta/hireme-light.svg";
    const ROTATE_MS = 6000; // 6s

    // 3 CTAs × (light/dark SVG per CTA)
    const CTAS = useMemo(() => [
        {
            label: "Join Fastlane waitlist",
            href: "/fastlane",
            svgLight: "/cta/fastlane-light.svg",
            svgDark: "/cta/fastlane-dark.svg",
        },
        {
            label: "Work with me",
            href: "/contact",
            svgLight: "/cta/hireme-light.svg",
            svgDark: "/cta/hireme-dark.svg",
        },
        {
            label: "Read latest writeup",
            href: "/Blogs",
            svgLight: "/cta/Currently-light.svg",
            svgDark: "/cta/Currently-dark.svg",
        },
    ], []);

    // rotation state
    const [idx, setIdx] = useState(0);
    const timerRef = useRef(null);

    const item = useMemo(() => CTAS[idx % CTAS.length], [idx, CTAS]);
    const svgSrc = currentTheme === "dark" ? item.svgDark : item.svgLight;

    useEffect(() => {
        const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReduced) return;

        timerRef.current = setInterval(() => {
            setIdx((i) => (i + 1) % CTAS.length); // 0→1→2→0…
        }, ROTATE_MS);

        return () => clearInterval(timerRef.current);
    }, [CTAS.length]);

    // swap image instantly on theme change
    useEffect(() => {
        setIdx((i) => i);
    }, [currentTheme]);

    return (
        <section
            id="main-outer-border"
            className="mt-28 grid grid-col-1 row-auto md:grid-cols-2 grid-rows-2 gap-0 ">
            {/* VAlues */}
            <div className="md:pb-12 flex-grow items-center justify-center text-start text-values md:text-huge text-primary">
                {Values.description.split(". ").map((text, index) => (
                    <h1
                        key={index}
                        className="md:font-light text-italic font-display pl-4 text-primary leading-[1.2] md:leading-none "
                    >
                        {text.trim()}
                    </h1>
                ))}
            </div>
            {/* Top-right lottie */}
            <div className="hidden md:flex md:items-center md:justify-center text-primary">
                <DotLottieReact
                    src="https://lottie.host/6413339e-759b-4fba-90d2-effbab9baf24/TLjKxApvNT.lottie"
                    loop
                    autoplay
                    color="currentColor"

                />
            </div>
            {/* Bottom grid */}
            <div className=" grid grid-col-1 row-auto  -mt-8 md:-mt-0   md:grid-cols-2 grid-rows-2 text-primary">
                <div id="1" className="relative"></div>
                <div id="2" className="relative ">

                    <button
                        id="Desktop"
                        size="lg"
                        className="hidden md:flex absolute md:bottom-0 md:left-0 h-auto origin-bottom-right gap-2 rounded-md  p-2 font-medium w-fit font-cabinet text-2xl bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:bg-cyan-500/10 dark:text-cyan-400 dark:hover:bg-cyan-500/20 transition-colors"
                    >
                        {item.label}
                    </button>

                </div>
                <div id="3" className="relative ">
                    <img
                        id="Mobile"
                        src={svgSrc}
                        width={250}
                        alt=""
                        className="sm:hidden -rotate-[15deg] grid items-center h-auto m-4 mx-8"
                    />
                    <img
                        id="Desktop"
                        src={svgSrc}
                        width={250}
                        alt=""
                        className="hidden sm:grid absolute  -rotate-[15deg] -top-24 -right-16  h-auto "
                    />

                    <Link
                        to={item.href}
                        id="Mobile"
                        size="lg"
                        className="sm:hidden absolute top-16 right-8 md:top-12 md:right-0 h-auto origin-bottom-right gap-2 rounded-md p-2 font-medium w-fit font-cabinet text-2xl bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:bg-cyan-500/10 dark:text-cyan-400 dark:hover:bg-cyan-500/20 transition-colors"
                    >
                        {item.label}
                    </Link>
                </div>
                <div id="4" className="relative ">
                    {/* manual controls (optional, hidden on mobile) */}
                    <div className="hidden md:flex absolute   items-bottom-right gap-2 bottom-0 right-0 ">
                        <button
                            onClick={() => setIdx((i) => (i + CTAS.length - 1) % CTAS.length)}
                            className="px-2 py-1 text-lg rounded bg-black/5 dark:bg-white/5"
                        > 
                            ‹ 
                        </button>
                        <button
                            onClick={() => setIdx((i) => (i + 1) % CTAS.length)}
                            className="px-2 py-1 text-lg rounded bg-black/5 dark:bg:white/5"
                        >
                            › 
                        </button>
                    </div>

                </div>
            </div>

            {/* Paragraph */}
            <div className=" flex items-center justify-evenly text-start text-primary pt-8 px-4 md:pr-4">
                <p className="font-satoshi text-small text-foreground leading-relaxed">
                    These are my{" "}
                    <span className="font-autography text-4xl text-foreground font-semibold">
                        Core development values
                    </span>
                    , and I strive to bring them into every project I work on. I&apos;ve
                    learned a lot from <em>building projects from the ground up</em>, and
                    this hands-on experience has fueled my drive to{" "}
                    <em> leave no stone unturned</em>. I&apos;m passionate about crafting{" "}
                    <span className="bg-emerald-500/10 text-emerald-600 px-1 py-0.5 rounded-md font-medium dark:bg-cyan-500/10 dark:text-cyan-400">
                        {" "}
                        efficient, reliable, and scalable solutions
                    </span>{" "}
                    that meet real needs, blending{" "}
                    <em>functionality with thoughtful design</em>. <br />
                    <br />I believe{" "}
                    <span className="font-cabinetMedium text-xl text-foreground font-semibold">
                        1 + 1 &gt; 2
                    </span>{" "}
                    —{" "}
                    <span className="text-emerald-500 dark:text-cyan-400 font-light">
                        {" "}
                        collaboration leads to outcomes far greater than what we can achieve
                        individually
                    </span>
                    . I like to <em>think big</em>, work quickly yet thoughtfully, and
                    always keep an eye on the <em>bigger picture</em>. I&apos;m constantly{" "}
                    <em> growing, improving</em>, and pushing myself to{" "}
                    <span className="bg-emerald-500/10 text-emerald-600 px-1 py-0.5 rounded-md font-medium dark:bg-cyan-500/10 dark:text-cyan-400">
                        {" "}
                        execute at the highest level
                    </span>
                    .
                </p>
            </div>
        </section>
    );
};

export default Value;

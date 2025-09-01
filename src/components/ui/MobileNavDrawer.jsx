import { useEffect } from "react";
import { Link } from "react-router-dom";               
import { AnimatePresence, motion } from "framer-motion";
import { X, NotebookPen, ArrowUpRight } from "lucide-react";
import PropTypes from "prop-types";

export default function MobileNavDrawer({
  open, setOpen, scrollToSection,
  introSection, projectsSection, valueSection,
  backgroundSection, aboutSection, contactSection,
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, setOpen]);

  // 👇 use `to` for internal routes, `href` for true externals
  const items = [
    { label: "Intro", ref: introSection },
    { label: "Projects", ref: projectsSection },
    { label: "Value", ref: valueSection },
    { label: "Background", ref: backgroundSection },
    { label: "About", ref: aboutSection },
    { label: "Resume", href: "https://mycv.blob.core.windows.net/atharv/Resume.pdf", external: true, resume: true },
    { label: "Contact", ref: contactSection },
    { label: "Blogs", to: "/Blogs", blog: true },       
  ];

  const overlayV = { hidden:{opacity:0}, show:{opacity:1, transition:{duration:0.18}}, exit:{opacity:0, transition:{duration:0.15}} };
  const panelV   = { hidden:{x:"100%"}, show:{x:0, transition:{type:"spring", stiffness:420, damping:38}}, exit:{x:"100%", transition:{duration:0.2}} };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay" initial="hidden" animate="show" exit="exit" variants={overlayV}
            className="fixed font-satoshi inset-0 z-[9998] bg-black/10 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.aside
            key="panel" initial="hidden" animate="show" exit="exit" variants={panelV}
            className="fixed right-0 top-0 z-[9999] h-dvh w-[80vw] max-w-xs bg-background text-foreground shadow-2xl"
          >
            <div className="flex items-center justify-end p-4">
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="size-6" />
              </button>
            </div>

            <nav className="px-6 pb-10">
              <ul className="grid gap-7 text-2xl">
                {items.map((it) => (
                  <li key={it.label} className="leading-none">
                    {it.to ? (
                      // ✅ internal route: Link (no full reload)
                      <Link
                        to={it.to}
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center gap-1.5 hover:text-primary"
                      >
                        {it.label}
                        {it.blog && <NotebookPen className="w-[16px] h-[16px] relative top-[1px]" strokeWidth={1.6} />}
                      </Link>
                    ) : it.href ? (
                      // 🌐 true external: anchor
                      <a
                        href={it.href}
                        target={it.external ? "_blank" : "_self"}
                        rel={it.external ? "noopener noreferrer" : undefined}
                        onClick={() => setOpen(false)}
                        className={
                          it.resume
                            ? "group inline-flex items-center gap-1.5 text-green-400 hover:text-green-300"
                            : "inline-flex items-center gap-1.5 hover:text-primary"
                        }
                      >
                        {it.label}
                        {it.resume && (
                          <ArrowUpRight
                            className="w-[13px] h-[13px] relative top-[1px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            strokeWidth={1.6}
                          />
                        )}
                      </a>
                    ) : (
                      // 🔽 in-page scroll
                      <button
                        onClick={() => {
                          it.ref?.current && scrollToSection(it.ref);
                          setOpen(false);
                        }}
                        className="text-left hover:text-primary"
                      >
                        {it.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

MobileNavDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  scrollToSection: PropTypes.func.isRequired,
  introSection: PropTypes.object,
  projectsSection: PropTypes.object,
  valueSection: PropTypes.object,
  backgroundSection: PropTypes.object,
  aboutSection: PropTypes.object,
  contactSection: PropTypes.object,
};

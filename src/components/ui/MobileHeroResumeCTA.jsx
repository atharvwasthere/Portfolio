import { useTheme } from "../theme-provider";

export default function MobileHeroResumeCTA() {

const { theme, resolvedTheme } = useTheme();
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const ARROW = currentTheme === "dark" ? "ArrowCTAd.svg" : "ArrowCTA.svg";
  

  return (
    // width capped at 440px; centered; anything beyond is clipped
    <div className="sm:hidden mx-auto w-full max-w-[440px]  overflow-hidden">
      {/* arrow box with fixed height */}
      <div className="relative h-36">
        <img
          src={ARROW}
          alt=""
          aria-hidden="true"
          width={512}
          height={512}
          className="pointer-events-none absolute left-2 bottom-2
                     w-[clamp(120px,32vw,220px)] aspect-square opacity-90
                     motion-safe:animate-sway"
          style={{ transformOrigin: "20% 75%" }}
        />
      </div>

      {/* independent CTA row */}
      <div className="-mt-12 flex justify-end pr-4">
        <a
          href="https://mycv.blob.core.windows.net/atharv/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open resume (PDF, 1 page)"
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium
                     ring-1 ring-cyan-500/50 dark:bg-cyan-900/20 dark:text-cyan-100
                     bg-emerald-100/60 text-emerald-800 hover:bg-emerald-100"
          onClick={() => window?.gtag?.('event','resume_open',{ where:'hero_mobile' })}
        >
          <span>Resume</span>
          <svg className="size-4 -translate-y-[1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
          </svg>
        </a>
      </div>
      <div className="h-14" />

      <style>{`
        @keyframes sway { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(-2.5deg)} }
        @media (prefers-reduced-motion: reduce){ .animate-sway{ animation:none !important; } }
      `}</style>
    </div>
  );
}

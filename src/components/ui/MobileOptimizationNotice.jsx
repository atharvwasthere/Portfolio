import { useEffect, useState } from 'react';
import { MessageCircleWarning } from 'lucide-react';

const STORAGE_KEY = "mobile_notice_dismissed_v1";

export default function MobileOptimizationNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // already dismissed this session?
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;

    const mm = window.matchMedia("(max-width: 640px)");
    const update = () => setShow(mm.matches);

    update();
    mm.addEventListener?.("change", update);
    return () => mm.removeEventListener?.("change", update);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 bottom-3 z-[9999] px-3 sm:hidden"
    >
      <div
        className="mx-auto max-w-[460px] rounded-2xl border border-emerald-300/40
                   bg-emerald-100/80 dark:bg-emerald-900/40 backdrop-blur
                   shadow-lg ring-1 ring-emerald-400/30 p-3 pr-2
                   flex items-start gap-3"
      >
        <MessageCircleWarning className="mt-0.5 size-5 shrink-0 text-emerald-800 dark:text-emerald-200" />

        <div className="text-sm leading-5 text-emerald-900 dark:text-emerald-100">
          <strong className="font-semibold">Heads-up:</strong>{" "}
          This site is optimized for a wider screen. Mobile works, but desktop offers the best experience.
        </div>

        <button
          type="button"
          onClick={dismiss}
          className="ml-auto inline-flex items-center justify-center rounded-xl px-2.5 py-1.5
                     text-xs font-medium text-emerald-900 dark:text-emerald-100
                     hover:bg-emerald-200/70 dark:hover:bg-emerald-800/60 focus:outline-none
                     focus-visible:ring-2 focus-visible:ring-emerald-500/60"
          aria-label="Dismiss notice"
        >
          Got it &nbsp;&nbsp;↗
        </button>
      </div>
    </div>
  );
}

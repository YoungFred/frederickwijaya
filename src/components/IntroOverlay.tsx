import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const SESSION_KEY = "intro-shown";

export function IntroOverlay() {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(SESSION_KEY)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.sessionStorage.setItem(SESSION_KEY, "1");
      return;
    }
    setShow(true);
    document.body.style.overflow = "hidden";
    const leaveTimer = window.setTimeout(() => setLeaving(true), 2200);
    const doneTimer = window.setTimeout(() => {
      setShow(false);
      window.sessionStorage.setItem(SESSION_KEY, "1");
      document.body.style.overflow = "";
    }, 3000);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${leaving ? "opacity-0" : "opacity-100"}`}
      aria-hidden="true"
    >
      {/* FIXED LINE BELOW: Changed src to load directly from the public folder */}
      <img src="/logo-eagle.png" alt="Frederick Wijaya eagle logo" className="animate-rise h-20 w-auto md:h-28 object-contain" />
      <h1
        className="animate-rise mt-8 text-center font-display text-[clamp(2.5rem,9vw,7rem)] leading-[0.95] tracking-tight"
        style={{ animationDelay: "0.25s" }}
      >
        Frederick <span className="italic text-accent">Wijaya</span>
        <span className="text-accent">.</span>
      </h1>
      <p className="animate-rise mt-4 text-label" style={{ animationDelay: "0.5s" }}>
        {t.intro.greeting} · 黄瑞鹏
      </p>
      <span className="mt-10 h-px w-40 overflow-hidden bg-separator">
        <span className="block h-full w-full origin-left animate-[intro-line_2.2s_cubic-bezier(0.22,1,0.36,1)_forwards] bg-accent" />
      </span>
    </div>
  );
}
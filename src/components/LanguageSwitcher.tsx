import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { languages } from "@/i18n/translations";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = languages.find((l) => l.code === lang);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 p-2 text-mono text-[0.7rem] uppercase text-muted-foreground transition-colors hover:text-accent"
        aria-label="Change language"
        aria-expanded={open}
      >
        <Globe size={18} />
        <span>{current?.short}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-36 border border-separator bg-background/95 py-1 shadow-lg backdrop-blur-xl animate-fade-in">
          {languages.map((option) => (
            <button
              key={option.code}
              onClick={() => { setLang(option.code); setOpen(false); }}
              className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:text-accent ${option.code === lang ? "text-accent" : "text-muted-foreground"}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

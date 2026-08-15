import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { Lang, translations, languages } from "./translations";
import { experience as baseExperience, education as baseEducation, skillGroups as baseSkills, profile as baseProfile, ExperienceGroup } from "@/data/resume";

const htmlLang: Record<Lang, string> = { en: "en", zh: "zh-Hant", ja: "ja", fr: "fr" };

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)["en"];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("lang") as Lang | null;
  if (stored && languages.some((l) => l.code === stored)) return stored;
  const nav = window.navigator.language.toLowerCase();
  if (nav.startsWith("zh")) return "zh";
  if (nav.startsWith("ja")) return "ja";
  if (nav.startsWith("fr")) return "fr";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => setLangState(detectLang()), []);

  useEffect(() => {
    document.documentElement.lang = htmlLang[lang];
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("lang", next);
  };

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

/** Resume data merged with the active language's translated copy. */
export function useResume() {
  const { t } = useLanguage();

  return useMemo(() => {
    const profile = { ...baseProfile, title: t.profile.title, summary: t.profile.summary, location: t.profile.location };

    const experience = baseExperience.map((entry, index) => {
      const localized = t.experience[index];
      return localized ? { ...entry, ...localized } : entry;
    });

    const experienceByOrganization = experience.reduce<ExperienceGroup[]>((groups, entry) => {
      const existing = groups.find((group) => group.organization === entry.organization);
      if (existing) existing.entries.push(entry);
      else groups.push({ organization: entry.organization, entries: [entry] });
      return groups;
    }, []);

    const education = baseEducation.map((entry) => ({ ...entry, program: t.education.program, description: t.education.description, location: t.profile.location }));

    const skillGroups = baseSkills.map((group, index) => ({ ...group, label: t.skillLabels[index] ?? group.label }));

    return { profile, experience, experienceByOrganization, education, skillGroups };
  }, [t]);
}

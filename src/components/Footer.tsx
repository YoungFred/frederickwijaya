import { Link } from "react-router-dom";
import { useLanguage, useResume } from "@/i18n/LanguageContext";

interface FooterProps { variant?: "default" | "echelon"; }

export function Footer({ variant = "default" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const { profile } = useResume();

  if (variant === "echelon") {
    return (
      <footer className="mt-auto border-t border-separator">
        <div className="container-wide grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:gap-12 md:py-16">
          <div className="space-y-3"><p className="text-label">{t.nav.location}</p><p className="text-sm text-foreground">{profile.location}</p></div>
          <div className="space-y-3"><p className="text-label">{t.nav.explore}</p><div className="space-y-1 text-sm"><Link to="/about" className="block hover:text-accent transition-colors">{t.nav.resume}</Link><Link to="/work" className="block hover:text-accent transition-colors">{t.nav.projects}</Link><Link to="/contact" className="block hover:text-accent transition-colors">{t.nav.contact}</Link></div></div>
          <div className="space-y-3"><p className="text-label">{t.nav.contactLabel}</p><a href={`mailto:${profile.email}`} className="block text-sm hover:text-accent transition-colors">{profile.email}</a></div>
          <div className="space-y-3"><p className="text-label">{t.nav.legal}</p><p className="text-sm text-muted-foreground">© {currentYear} Frederick WIjaya</p></div>
        </div>
        <div className="overflow-hidden border-t border-separator py-6 md:py-8"><div className="flex w-max animate-marquee-slow whitespace-nowrap">{Array.from({ length: 8 }).map((_, i) => <span key={i} className="mx-10 font-display text-6xl text-foreground/80 md:text-8xl lg:text-[9rem]">Frederick <span className="italic text-accent">Wijaya</span></span>)}</div></div>
      </footer>
    );
  }

  return <footer className="border-t border-separator"><div className="container-wide flex flex-col justify-between gap-8 py-12 md:flex-row md:items-end md:py-16"><div><p className="font-display text-2xl">Frederick Wijaya 黄瑞鹏</p><p className="mt-2 text-sm text-muted-foreground">{profile.title}</p></div><div className="flex gap-8 text-sm text-muted-foreground"><Link to="/about" className="hover:text-accent">{t.nav.resume}</Link><Link to="/work" className="hover:text-accent">{t.nav.projects}</Link><Link to="/contact" className="hover:text-accent">{t.nav.contact}</Link></div><div className="text-sm text-muted-foreground"><p>© {currentYear} Frederick WIjaya</p><p className="mt-1">{profile.location}</p></div></div></footer>;
}

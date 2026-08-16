import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ParticleField } from "@/components/ParticleField";
import { Ticker } from "@/components/Ticker";
import { projects } from "@/data/projects";
import { useLanguage, useResume } from "@/i18n/LanguageContext";

const tickerItems = [
  "Engineering student",
  "NTHU",
  "Operations",
  "Process optimization",
  "Event planning",
  "Master of Ceremonies",
  "Chassis Division",
  "Autodesk Inventor",
  "Data cataloging",
  "Protocol training",
];

const Index = () => {
  const { t } = useLanguage();
  const { education, experience, profile, skillGroups } = useResume();
  const featuredProjects = projects.slice(0, 3);
  const currentRoles = experience.filter((_, index) => [1, 2, 3].includes(index)).slice(0, 3);
  const [whoBefore, whoAfter] = t.home.whoText.split("{word}");

  return (
    <Layout hideFooter noPadding>
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        <ParticleField />
        <div className="container-wide relative z-10 flex min-h-screen flex-1 flex-col">
          <div className="flex items-start justify-between pt-28 md:pt-32">
            <p className="text-label">{profile.location}</p>
            <p className="text-label">{t.home.est}</p>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
            <h1 className="animate-rise font-display text-[clamp(3rem,11vw,10rem)] leading-[0.9] tracking-tight">
              Frederick <span className="italic text-accent">Wijaya</span>
              <span className="text-accent">.</span>
            </h1>
            <p className="animate-rise mt-4 text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "0.15s" }}>
              黄瑞鹏
            </p>
            <p
              className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ animationDelay: "0.3s" }}
            >
              {profile.summary}
            </p>
            <div className="animate-rise mt-12 flex flex-col items-center gap-5" style={{ animationDelay: "0.45s" }}>
              <a
                href={profile.resumeUrl}
                download="Frederick_WIjaya_CV.pdf"
                className="inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                <Download size={18} />
                {t.common.downloadCv}
              </a>
              <span className="text-label">{t.common.scroll}</span>
              <span className="h-12 w-px bg-accent animate-scroll-hint" />
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <Ticker items={tickerItems} />
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-separator py-24 md:py-36">
        <div className="container-wide">
          <p className="text-label mb-10 text-accent">{t.home.whoLabel}</p>
          <p className="max-w-4xl font-display text-3xl leading-[1.25] md:text-5xl">
            {whoBefore}
            <span className="italic text-accent">{t.home.whoWord}</span>
            {whoAfter}
          </p>
        </div>
        <p className="pointer-events-none mt-16 select-none text-center font-display text-[clamp(4rem,18vw,16rem)] italic leading-none text-accent/25">
          {t.home.whoWord}
        </p>
      </section>

      <section className="border-b border-separator py-20 md:py-28">
        <div className="container-wide">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-label mb-4 text-accent">{t.home.nowLabel}</p>
              <h2 className="text-headline">{t.home.nowTitle}</h2>
            </div>
            <Link to="/about" className="hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent sm:flex">
              {t.home.fullExperience} <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 border-t border-separator md:grid-cols-3">
            {currentRoles.map((entry) => (
              <article
                key={`${entry.organization}-${entry.role}`}
                className="border-b border-separator py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"
              >
                <p className="text-label mb-6">{entry.period}</p>
                <h3 className="font-display text-2xl leading-tight">{entry.role}</h3>
                <p className="mt-3 text-sm text-accent">{entry.organization}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-separator py-20 md:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="text-label mb-4 text-accent">{t.home.projectsLabel}</p>
              <h2 className="text-headline max-w-md">{t.home.projectsTitle}</h2>
              <Link
                to="/work"
                className="text-mono mt-8 inline-flex items-center gap-2 border-b border-foreground pb-2 text-xs uppercase transition-colors hover:border-accent hover:text-accent"
              >
                {t.home.exploreProjects} <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <Link to={`/work/${project.id}`} key={project.id} className="group">
                  <div className={`overflow-hidden bg-secondary ${index === 1 ? "sm:mt-12" : ""}`}>
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl transition-colors group-hover:text-accent">{project.title}</h3>
                      <p className="text-label mt-1">{project.category}</p>
                    </div>
                    <span className="text-label">{project.year}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="text-label mb-4 text-accent">{t.home.toolkitLabel}</p>
              <h2 className="text-headline">{t.home.toolkitTitle}</h2>
            </div>
            <div className="space-y-8">
              {skillGroups.slice(0, 3).map((group) => (
                <div key={group.label} className="border-t border-separator pt-5">
                  <p className="text-label mb-3">{group.label}</p>
                  <p className="text-lg leading-relaxed text-muted-foreground">{group.skills.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 border-t border-separator pt-8 text-sm md:grid-cols-2">
            <div>
              <p className="text-label mb-3">{t.common.education}</p>
              <p className="font-display text-2xl">{education[0].organization}</p>
              <p className="mt-1 text-muted-foreground">{education[0].program}</p>
            </div>
            <Link
              to="/contact"
              className="group flex items-end justify-between border-b border-foreground pb-3 text-lg transition-colors hover:border-accent hover:text-accent"
            >
              <span>{t.common.letsConnect}</span>
              <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

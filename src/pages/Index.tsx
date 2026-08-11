import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { education, experience, profile, skillGroups } from "@/data/resume";
import { projects } from "@/data/projects";

const Index = () => {
  const featuredProjects = projects.slice(0, 3);
  const currentRoles = experience.filter((entry) => entry.period.includes("Present")).slice(0, 3);

  return (
    <Layout hideFooter noPadding>
      <main>
        <section className="relative min-h-screen border-b border-separator overflow-hidden">
          <div className="container-wide relative z-10 flex min-h-screen flex-col justify-between py-28 md:py-36">
            <div className="max-w-5xl animate-fade-in-up">
              <p className="text-label mb-8 text-accent">Personal portfolio / resume</p>
              <h1 className="font-display max-w-4xl text-[clamp(3.5rem,10vw,9rem)] font-bold leading-[0.88] tracking-tight">
                Frederick<br />
                <span className="text-accent">WIjaya</span>
                <span className="ml-3 align-top text-[0.32em] font-medium tracking-normal text-muted-foreground">黄瑞鹏</span>
              </h1>
              <div className="mt-10 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-[1fr_16rem] md:items-end">
                <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                  {profile.summary}
                </p>
                <div className="border-l border-accent pl-5 text-sm leading-relaxed text-foreground">
                  <p>{profile.title}</p>
                  <p className="mt-1 text-muted-foreground">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 items-end gap-10 pb-6 md:grid-cols-3">
              <Link to="/about" className="group inline-flex items-center gap-3 text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors">
                <span className="flex h-10 w-10 items-center justify-center border border-foreground/30 transition-colors group-hover:border-accent">
                  <ArrowDown size={16} />
                </span>
                View resume
              </Link>
              <p className="hidden text-sm leading-relaxed text-muted-foreground md:block">
                A work-in-progress record of engineering, operations, events, and creative projects.
              </p>
              <div className="justify-self-start text-label md:justify-self-end">
                <span className="text-foreground">01</span> / introduction
              </div>
            </div>
          </div>
          <div className="absolute right-[-8rem] top-1/2 hidden h-[32rem] w-[20rem] -translate-y-1/2 rotate-[12deg] border border-accent/30 md:block" />
          <div className="absolute right-[-4rem] top-1/2 hidden h-[32rem] w-[20rem] -translate-y-1/2 rotate-[12deg] bg-accent/10 md:block" />
        </section>

        <section className="border-b border-separator py-20 md:py-28">
          <div className="container-wide">
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="text-label mb-4 text-accent">02 / now</p>
                <h2 className="text-headline">What I’m doing</h2>
              </div>
              <Link to="/about" className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors sm:flex">
                Full experience <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 border-t border-separator md:grid-cols-3">
              {currentRoles.map((entry) => (
                <article key={`${entry.organization}-${entry.role}`} className="border-b border-separator py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
                  <p className="text-label mb-6">{entry.period}</p>
                  <h3 className="font-display text-2xl font-semibold leading-tight">{entry.role}</h3>
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
                <p className="text-label mb-4 text-accent">03 / selected work</p>
                <h2 className="text-headline max-w-md">Projects that show how I think and make.</h2>
                <Link to="/work" className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-2 text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-colors">
                  Explore all work <ArrowUpRight size={16} />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {featuredProjects.map((project, index) => (
                  <Link to={`/work/${project.id}`} key={project.id} className="group">
                    <div className={`overflow-hidden bg-secondary ${index === 1 ? "sm:mt-12" : ""}`}>
                      <img src={project.coverImage} alt={project.title} className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="mt-4 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
                        <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{project.category}</p>
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
                <p className="text-label mb-4 text-accent">04 / toolkit</p>
                <h2 className="text-headline">Skills across systems and people.</h2>
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
                <p className="text-label mb-3">Education</p>
                <p className="font-display text-xl font-semibold">{education[0].organization}</p>
                <p className="mt-1 text-muted-foreground">{education[0].program}</p>
              </div>
              <Link to="/contact" className="group flex items-end justify-between border-b border-foreground pb-3 text-lg hover:border-accent hover:text-accent transition-colors">
                <span>Let’s connect</span><ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Index;

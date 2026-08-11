import { MapPin } from "lucide-react";
import { Layout } from "@/components/Layout";
import { education, experience, profile, skillGroups } from "@/data/resume";

const About = () => {
  return (
    <Layout showEchelonFooter>
      <div className="container-wide py-16 md:py-24">
        <header className="grid grid-cols-1 gap-10 border-b border-separator pb-16 md:grid-cols-[1.2fr_0.8fr] md:items-end md:pb-24">
          <div>
            <p className="text-label mb-6 text-accent">Resume / profile</p>
            <h1 className="text-display">About me.</h1>
          </div>
          <div className="border-l border-accent pl-6 text-lg leading-relaxed text-muted-foreground">
            <p>{profile.summary}</p>
            <p className="mt-5 flex items-center gap-2 text-sm text-foreground"><MapPin size={16} className="text-accent" /> {profile.location}</p>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-12 border-b border-separator py-16 md:grid-cols-[0.7fr_1.3fr] md:gap-24 md:py-24">
          <div>
            <p className="text-label text-accent">01 / experience</p>
            <h2 className="text-headline mt-4 max-w-xs">Learning by being in the work.</h2>
          </div>
          <div className="divide-y divide-separator">
            {experience.map((entry) => (
              <article key={`${entry.organization}-${entry.role}`} className="grid grid-cols-1 gap-5 py-8 first:pt-0 last:pb-0 md:grid-cols-[10rem_1fr] md:gap-8">
                <div>
                  <p className="text-label text-foreground">{entry.period}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{entry.location}</p>
                  {entry.type && <p className="mt-1 text-xs text-muted-foreground">{entry.type}</p>}
                </div>
                <div>
                  <p className="text-sm text-accent">{entry.organization}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">{entry.role}</h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{entry.description}</p>
                  {entry.skills && <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-widest text-foreground/70">{entry.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-12 border-b border-separator py-16 md:grid-cols-2 md:gap-24 md:py-24">
          <div>
            <p className="text-label text-accent">02 / education</p>
            {education.map((entry) => (
              <article key={entry.organization} className="mt-6">
                <h2 className="font-display text-3xl font-semibold">{entry.organization}</h2>
                <p className="mt-3 text-lg text-accent">{entry.program}</p>
                <p className="mt-2 text-sm text-muted-foreground">{entry.period} · {entry.location}</p>
                <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{entry.description}</p>
              </article>
            ))}
          </div>
          <div>
            <p className="text-label text-accent">03 / skills</p>
            <div className="mt-6 grid grid-cols-1 gap-7 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label} className="border-t border-separator pt-4">
                  <h3 className="font-display text-xl font-semibold">{group.label}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-16 md:pt-24">
          <p className="text-label text-accent">04 / working style</p>
          <p className="mt-6 max-w-4xl font-display text-3xl font-semibold leading-tight md:text-5xl">
            I bring curiosity to unfamiliar systems, care to the details, and energy to the rooms where people work together.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default About;

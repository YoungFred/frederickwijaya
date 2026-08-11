import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Layout } from "@/components/Layout";
import { profile } from "@/data/resume";

const Contact = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide min-h-[calc(100vh-200px)] py-16 md:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <p className="text-label mb-6 text-accent">Let’s connect</p>
            <h1 className="text-display max-w-3xl">Have a project, opportunity, or good question?</h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground">I’m open to conversations around engineering, operations, events, and creative collaboration.</p>
            <div className="mt-12 space-y-6">
              <a href={`mailto:${profile.email}`} className="group flex items-center gap-4 text-lg hover:text-accent transition-colors"><Mail size={20} className="text-accent" /><span>{profile.email}</span><ArrowUpRight size={18} className="opacity-0 transition-opacity group-hover:opacity-100" /></a>
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-lg hover:text-accent transition-colors"><Linkedin size={20} className="text-accent" /><span>{profile.linkedin}</span><ArrowUpRight size={18} className="opacity-0 transition-opacity group-hover:opacity-100" /></a>
              <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-lg hover:text-accent transition-colors"><Instagram size={20} className="text-accent" /><span>instagram.com/your-profile</span><ArrowUpRight size={18} className="opacity-0 transition-opacity group-hover:opacity-100" /></a>
            </div>
          </div>
          <div className="flex flex-col justify-end border-t border-separator pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="text-label mb-4">Based in</p>
            <p className="flex items-center gap-2 font-display text-3xl font-semibold"><MapPin size={24} className="text-accent" />{profile.location}</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">The contact details above are editable placeholders until you add your preferred public information.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

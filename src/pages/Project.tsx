import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  if (!project) return <Navigate to="/work" replace />;

  return (
    <Layout noPadding headerRevealMode showEchelonFooter>
      <section className="relative h-screen overflow-hidden">
        <img src={project.coverImage} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 z-10 flex items-center justify-center"><h1 className="px-4 text-center text-display">{project.title}</h1></div>
        <div className="container-wide absolute bottom-8 left-0 right-0 z-10"><div className="flex items-end justify-between gap-4"><div className="text-label">{project.year}</div><div className="flex flex-wrap justify-end gap-3">{project.tags.map((tag) => <span key={tag} className="border border-foreground/30 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground/80">{tag}</span>)}</div></div></div>
      </section>
      <section className="container-wide py-16 md:py-24"><div className="grid grid-cols-1 gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-24"><div className="space-y-8"><div><p className="text-label mb-2">Project context</p><p>Selected portfolio work</p></div><div><p className="text-label mb-2">Year</p><p>{project.year}</p></div><div><p className="text-label mb-2">Disciplines</p><div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="border border-separator px-3 py-1 text-sm">{tag}</span>)}</div></div></div><div><p className="text-xl leading-relaxed text-muted-foreground md:text-3xl">{project.description}</p><p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">Add your personal role, tools, process, and measurable outcome here when this project becomes part of your final resume.</p></div></div></section>
      <section className="container-wide pb-24"><div className="space-y-8 md:space-y-12">{project.images.map((image, index) => <div key={index} className="image-reveal animate-fade-in-up"><img src={image} alt={`${project.title} — ${index + 1}`} className="w-full" /></div>)}</div></section>
      <section className="container-wide flex justify-between gap-6 pb-24"><Link to="/work" className="inline-flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"><ArrowLeft size={20} /><span>Back to projects</span></Link><Link to="/contact" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"><span>Start a conversation</span><ArrowUpRight size={18} /></Link></section>
    </Layout>
  );
};

export default Project;

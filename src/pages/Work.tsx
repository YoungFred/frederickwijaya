import { Layout } from "@/components/Layout";
import { ProjectListItem } from "@/components/ProjectListItem";
import { projects } from "@/data/projects";

const Work = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide border-b border-separator pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_20rem] md:items-end">
          <div><p className="text-label mb-6 text-accent">Portfolio / projects</p><h1 className="text-display">Selected projects.</h1></div>
          <p className="text-lg leading-relaxed text-muted-foreground">A visual record of creative, digital, and experimental projects. Project details can be expanded with your role, tools, and outcomes.</p>
        </div>
      </section>
      <section className="pb-24">{projects.map((project, index) => <ProjectListItem key={project.id} id={project.id} title={project.title} tags={project.tags} year={project.year} image={project.coverImage} index={index} />)}</section>
    </Layout>
  );
};

export default Work;

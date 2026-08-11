import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectListItemProps { id: string; title: string; tags: string[]; year: string; image: string; index: number; }

export function ProjectListItem({ id, title, tags, year, image }: ProjectListItemProps) {
  return (
    <Link to={`/work/${id}`} className="group block border-b border-separator transition-colors duration-300 hover:bg-accent">
      <div className="container-wide py-6 md:py-8">
        <div className="flex items-center justify-between gap-4 group-hover:text-accent-foreground">
          <div className="flex min-w-0 flex-1 items-center gap-5"><span className="hidden text-label text-current/60 sm:block">Selected</span><h3 className="font-display text-xl font-semibold leading-tight md:text-2xl">{title}</h3></div>
          <div className="hidden items-center gap-2 sm:flex">{tags.map((tag) => <span key={tag} className="border border-current/30 px-3 py-1 text-[10px] uppercase tracking-widest">{tag}</span>)}</div>
          <span className="text-xs uppercase tracking-widest">{year}</span><ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <div className="mt-2 pl-0 text-sm text-current/60 sm:pl-[4.75rem]">Portfolio project · {tags[0]?.toLowerCase()}</div>
        <div className="pointer-events-none fixed right-8 top-1/2 z-40 hidden aspect-[3/4] w-64 -translate-y-1/2 translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block"><img src={image} alt={title} className="h-full w-full object-cover" /></div>
      </div>
    </Link>
  );
}

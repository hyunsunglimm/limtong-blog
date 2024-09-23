import { projects } from "@/utils/about";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </section>
  );
}

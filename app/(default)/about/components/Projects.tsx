import { projects } from "@/utils/about";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            priority={index <= 1}
          />
        ))}
      </ul>
    </section>
  );
}

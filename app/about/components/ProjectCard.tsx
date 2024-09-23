import ResponsiveImage from "@/components/ResponsiveImage";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import Link from "next/link";

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    imgPath: string;
    github: string;
    url: string;
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li>
      <ResponsiveImage
        src={project.imgPath}
        alt={`${project.title} 대표 이미지`}
      />
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold mt-2">{project.title}</p>
        <div className="flex gap-4">
          <Link href={project.github} target="_blank">
            <GithubIcon />
          </Link>
          <Link href={project.url} target="_blank">
            <LinkIcon />
          </Link>
        </div>
      </div>
      <p className="text-xl font-semibold line-clamp-3">
        {project.description}
      </p>
    </li>
  );
}

"use client";
import projectData from "../app/data/projectData.json";
import { NavigationTab } from "./webpageReusables";

interface ProjectInfoSectionProps {
  projectName: string;
}

export function ProjectInfoSection({ projectName }: ProjectInfoSectionProps) {
  // Find the project based on the name
  const project = projectData.find((project) => project.name === projectName);

  // Handle case when project is not found
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <h4>({project.year})</h4>
      <p className="text-left">
        {project.description.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <p className="mt-4 mb-2 supplementary text-sm text-tag">
        <b>TIME FRAME: </b>
        {project.time}
      </p>
      <p className="mb-2 supplementary text-sm text-tag">
        <b>MEDIA: </b>
        {project.media}
      </p>
      <p className="tagline supplementary mb-4 text-left">
        <b>TAGS: </b>
        {project.tags.map((tag, index) => (
          <span key={tag} className="">
            {tag}
            {index < project.tags.length - 1 && <span>|</span>}
            {/* Add bullet between tags, but not after the last one */}
          </span>
        ))}
      </p>
      {/* <NavigationTab href="/" text="Home" arrowPosition="left" /> */}
    </div>
  );
}

export function ProjectSwitch({ projectName }: ProjectInfoSectionProps) {
  const currentIndex = projectData.findIndex(
    (project) => project.name === projectName
  );
  const previousProject = projectData[currentIndex - 1] || null;
  const nextProject = projectData[currentIndex + 1] || null;
  return (
    <div className="grid grid-cols-2 gap-4 mt-2 items-start">
      <div className="col-span-1 text-left w-full">
        {previousProject && (
          <NavigationTab
            href={`/projects/${previousProject.name
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
            text="Previous"
            arrowPosition="left"
          />
        )}
      </div>

      <div className="col-span-1 text-right w-full">
        {nextProject && (
          <NavigationTab
            href={`/projects/${nextProject.name
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
            text="Next"
            arrowPosition="right"
          />
        )}
      </div>
    </div>
  );
}

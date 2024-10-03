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
      <h4>{project.year}</h4>
      <p>
        {project.description.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <p className="mt-4 mb-2 supplementary text-sm text-tag"><b>TIME FRAME: </b>{project.time}</p>
      <p className="mb-2 supplementary text-sm text-tag"><b>MEDIA: </b>{project.media}</p>
      <p className="tagline supplementary"><b>TAGS: </b>
        {project.tags.map((tag, index) => (
          <span key={tag}>
            {tag}
            {index < project.tags.length - 1 && <span>|</span>}{" "}
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
  if ((previousProject!=null) && (nextProject!=null)) {
    return (
      <div className="mt-2 flex justify-between items-start">
        <NavigationTab
          href={`/projects/${previousProject.name
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          text="Previous"
          arrowPosition="left"
        />
        <NavigationTab
          href={`/projects/${nextProject.name
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          text="Next"
          arrowPosition="right"
        />
      </div>
    );
  } else if (previousProject==null) {
    return (
      <div className="mt-2 flex justify-end">
        <NavigationTab
          href={`/projects/${nextProject.name
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          text="Next"
          arrowPosition="right"
        />
      </div>
    );
  } else if (nextProject==null) {
    return (
      <div className="mt-2 flex justify-start">
        <NavigationTab
          href={`/projects/${previousProject.name
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          text="Previous"
          arrowPosition="left"
        />
      </div>
    );
  }
}

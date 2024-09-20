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
    <div className="sticky top-0">
      <h2>{project.name}</h2>
      <h3>{project.year}</h3>
      <p>
        {project.description.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <p className="tagline">
        {project.tags.map((tag, index) => (
          <span key={tag}>
            {tag}
            {index < project.tags.length - 1 && <span>•</span>}{" "}
            {/* Add bullet between tags, but not after the last one */}
          </span>
        ))}
      </p>
      <NavigationTab href="/" text="Home" arrowPosition="left" />
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
      <div className="col-span-1 p-4 flex justify-between items-start">
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
      <div className="col-span-1 p-4 flex items-start">
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
      <div className="col-span-1 p-4 flex items-start">
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

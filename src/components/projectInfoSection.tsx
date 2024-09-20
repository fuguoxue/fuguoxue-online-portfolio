import projectData from "../app/data/projectData.json";

interface ProjectInfoSectionProps {
    projectName: string;
  }

export default function ProjectInfoSection({ projectName }: ProjectInfoSectionProps) {
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
      <p>{project.description.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}</p>
      <p className="tagline">
        {project.tags.map((tag, index) => (
          <span key={tag}>
            {tag}
            {index < project.tags.length - 1 && <span>•</span>} {/* Add bullet between tags, but not after the last one */}
          </span>
        ))}
      </p>
    </div>
  );
}

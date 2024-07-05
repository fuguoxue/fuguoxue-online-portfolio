const WorkGallery = ({ project }) => {
  return (
    <div>
      <div className="pb-2 w-full h-60 overflow-hidden min-w-80">
      <img
        src={project.imgURL}
        className="object-cover size-full"
        alt={project.name}
      ></img></div>
      <h3 className="text-xl font-semibold font-mono">{project.name}</h3>
      <p>{project.category}</p>
      <p>{project.year}</p>
    </div>
  );
};

export default WorkGallery;

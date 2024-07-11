import { motion } from "framer-motion";

const WorkGallery = ({ project }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="pb-2 w-full h-60 overflow-hidden min-w-80">
        <img
          src={project.imgURL}
          className="object-cover size-full"
          alt={project.name}
        ></img>
      </div>
      <h3 className="text-xl font-semibold font-mono">{project.name}</h3>
      <p>{project.category}</p>
      <p>{project.year}</p>
    </motion.div>
  );
};

export default WorkGallery;

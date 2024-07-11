// import { BiSearch, BiCaretDown } from "react-icons/bi"
// import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import projectList from "../projectData.json";
import WorkGallery from "./WorkGallery";
import { AnimatePresence } from "framer-motion";

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Filter() {
  // Define category priorities
  const categoryPriority = [
    "All",
    "Interactive Installation",
    "Creative Coding",
    "Game",
    "Animation",
    "UX Design",
  ];

  const [all, setAll] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCat, setActiveCat] = useState("All");

  useEffect(() => {
    setAll(projectList);
    setFiltered(projectList); // Initially show all projects
  }, []);

  useEffect(() => {
    if (activeCat === "All") {
      setFiltered(all);
    } else {
      setFiltered(
        all.filter((project) => Capitalize(project.category) === activeCat)
      );
    }
  }, [activeCat, all]);

  const extractAndSortDistinctValues = (data) => {
    const categories = data.map((item) => Capitalize(item.category));
    const distinctCategories = ["All", ...new Set(categories)];

    // Sort the distinct values based on the defined priorities
    const sortedValues = distinctCategories.sort((a, b) => {
      if (a === "All") return -1;
      if (b === "All") return 1;
      return (
        (categoryPriority.indexOf(a) || Infinity) -
        (categoryPriority.indexOf(b) || Infinity)
      );
    });

    return sortedValues;
  };

  const distinctCategories = extractAndSortDistinctValues(projectList);

  const categoryList = distinctCategories.map((category) => (
    <li className="me-4 md:me-6 text-gray-900">
      <button
        className={
          activeCat === category
            ? "underline capitalize font-medium"
            : "capitalize hover:underline"
        }
        onClick={() => setActiveCat(category)}
        key={categoryPriority.indexOf(category)}
      >
        {category}
      </button>
    </li>
  ));

  return (
    <div className="py-5">
      <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white mb-4">
        {categoryList}
      </ul>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {filtered.map((project) => (
            <WorkGallery key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Filter;

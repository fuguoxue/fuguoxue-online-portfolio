"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import projectData from "./projectData.json"; // Import your project data
import { FaVimeoV, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"; // LinkedIn, GitHub, Instagram icons

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string>("All"); // Explicitly setting the type to 'string'
  const [allTags, setAllTags] = useState<string[]>([]); // Explicitly setting the type to 'string[]' (array of strings)

  // Extract unique tags from projectData.json
  useEffect(() => {
    const tags = new Set<string>(); // Define the Set type explicitly
    projectData.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    setAllTags(["All", ...Array.from(tags)]); // Convert the Set to an array
  }, []);

  // Filter the projects based on selected tag
  const filteredProjects =
    selectedTag === "All"
      ? projectData
      : projectData.filter((project) => project.tags.includes(selectedTag));

  return (
    <div className="grid grid-cols-4 min-h-screen bg-[#1c1c1e] text-white">
      {/* Sidebar */}
      <aside className="col-span-1 p-8 bg-[#121212] text-gray-400">
        <div className="sticky top-0">
          {/* Bio Section */}
          <h1 className="text-4xl font-bold mb-4 text-white">Fuguo Xue</h1>
          <p className="text-sm leading-relaxed mb-8">
            Media artist specializing in interactive installations and creative technologies. 
            My work blends AI, creative coding, and immersive experiences. Exhibitions include Ars Electronica and more.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4"> {/* Flexbox to align icons in a row and center them vertically */}
            <Link href="https://vimeo.com/your-profile" target="_blank">
              <FaVimeoV className="w-8 h-8 hover:text-gray-300 transition" />
            </Link>
            <Link href="https://linkedin.com/in/your-profile" target="_blank">
              <FaLinkedinIn className="w-8 h-8 hover:text-gray-300 transition" />
            </Link>
            <Link href="https://github.com/your-profile" target="_blank">
              <FaGithub className="w-8 h-8 hover:text-gray-300 transition" />
            </Link>
            <Link href="https://instagram.com/your-profile" target="_blank">
              <FaInstagram className="w-8 h-8 hover:text-gray-300 transition" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content - Projects Section */}
      <main className="col-span-3 p-8">
        {/* Tag Filter */}
        <div className="mb-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`mr-4 px-4 py-2 border-b-2 transition-all duration-300 ${
                selectedTag === tag
                  ? "border-white text-white"
                  : "border-transparent text-gray-400 hover:border-gray-500 hover:text-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Gallery */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Image Container with fixed dimensions */}
                <div className="w-full h-64 overflow-hidden">
                  <Link href={`/projects/${project.name}`}>
                    <Image
                      src={project.imgURL}
                      alt={project.name}
                      width={400}
                      height={400}
                      objectFit="cover"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                </div>

                {/* Hover Information */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-bold">
                      {project.name}
                    </h3>
                    <p className="text-gray-300">{project.year}</p>
                    <p className="text-gray-300">{project.tags.join(", ")}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}

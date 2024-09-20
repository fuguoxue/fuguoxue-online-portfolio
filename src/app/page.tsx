"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import projectData from "./data/projectData.json"; // Import your project data
import { FaVimeoV, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import dynamic from "next/dynamic";
// Dynamically import P5Background without SSR
const P5Background = dynamic(() => import("../components/P5Background"), {
  ssr: false, // This disables server-side rendering for the P5 component
});
// import {WebsiteTitle} from "@/components/webpageReusables";
import P5ShadowController from "@/components/P5TitleShadow";

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string>("All Works"); // Explicitly setting the type to 'string'
  const [allTags, setAllTags] = useState<string[]>([]); // Explicitly setting the type to 'string[]' (array of strings)

  // Extract unique tags from projectData.json
  useEffect(() => {
    const tags = new Set<string>(); // Define the Set type explicitly
    projectData.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    setAllTags(["All Works", ...Array.from(tags)]); // Convert the Set to an array
  }, []);

  // Filter the projects based on selected tag
  const filteredProjects =
    selectedTag === "All Works"
      ? projectData
      : projectData.filter((project) => project.tags.includes(selectedTag));

  return (
    <div className="relative">
      {/* Interactive p5.js Background */}
      {/* <P5Background /> */}

      <div className="grid grid-cols-5 min-h-screen">
        {/* Sidebar */}
        <aside className="col-span-1 p-8 text-gray-400">
          <div className="sticky top-0">
            {/* Bio Section */}
            <P5ShadowController />
            <p className="leading-relaxed mb-8">
              Fuguo Xue is a media artist specializing in interactive installations and
              creative technologies. Her work blends AI, creative coding, and
              immersive experiences. Exhibitions include Ars Electronica and
              more.
            </p>

            {/* Tag Filter */}
            <div className="mb-8 flex flex-col space-y-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`mr-4 text-left py-2 border-b-2 transition-all duration-300 ${
                    selectedTag === tag
                      ? "border-gray-300 text-gray-300"
                      : "border-b-2 border-transparent hover:border-gray-200 transition-border duration-300"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              {" "}
              {/* Flexbox to align icons in a row and center them vertically */}
              <Link href="https://vimeo.com/your-profile" target="_blank">
                <FaVimeoV className="w-6 h-6 hover:text-gray-300 transition" />
              </Link>
              <Link href="https://linkedin.com/in/your-profile" target="_blank">
                <FaLinkedinIn className="w-6 h-6 hover:text-gray-300 transition" />
              </Link>
              <Link href="https://github.com/your-profile" target="_blank">
                <FaGithub className="w-6 h-6 hover:text-gray-300 transition" />
              </Link>
              <Link href="https://instagram.com/your-profile" target="_blank">
                <FaInstagram className="w-6 h-6 hover:text-gray-300 transition" />
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content - Projects Section */}
        <main className="col-span-4">
          {/* Project Gallery */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0"
          >
            <AnimatePresence>
              {filteredProjects
                .filter((project) => !project.hidden)
                .map((project) => (
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
                      <Link
                        href={`/projects/${project.name
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                      >
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
                    <Link
                      href={`/projects/${project.name
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <div className="text-center">
                          <h3 className="text-white text-xl font-bold">
                            {project.name}
                          </h3>
                          <p className="text-gray-300">{project.year}</p>
                          <p className="text-gray-300">
                            {project.tags.join(", ")}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

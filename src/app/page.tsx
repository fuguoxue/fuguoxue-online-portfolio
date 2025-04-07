"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import projectData from "../data/projectData.json"; // Import your project data
import P5ShadowController from "../components/P5TitleShadow";
import Footer from "@/components/Footer";
// import ThreeScene from '@/components/ThreeScene';

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string>("All"); // Explicitly setting the type to 'string'
  const [allTags, setAllTags] = useState<string[]>([]); // Explicitly setting the type to 'string[]' (array of strings)

  // Extract unique tags from projectData.json
  useEffect(() => {
    const tags = new Set<string>(); // Define the Set type explicitly
    projectData
      .filter((project) => !project.hidden)
      .forEach((project) => {
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
    <div className="relative">
      {/* <ThreeScene /> */}
      <div className="grid grid-cols-1 lg:grid-cols-5 m-2">
        {/* Sidebar */}
        <aside className="px-6 lg:col-span-1 w-full my-2">
          <div className="relative md:relative lg:sticky top-0">
            {/* Bio Section */}
            <P5ShadowController />
            <p className="text-tag">
              Interactive Media Artist | Game Designer & Developer
            </p>
            <p className="leading-relaxed mb-4 text-left">
              Fuguo Xue is a creative technologist specializing in multimedia
              and front-end technologies. She is interested in algorithmic art,
              video games, and GenAI integration for creative purposes. Her work
              was featured at Ars Electronica Festival Campus Exhibtion 2023 and
              more.
            </p>
            <section className="mb-8">
              <div>
                <Link
                  href="/bio"
                  className="group inline-flex items-center text-tag transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  <span className="transition-all group-hover:underline">
                    Bio
                  </span>
                  <span className="transition-all transform group-hover:scale-105">
                    &nbsp;&#8594;
                  </span>
                </Link>
              </div>

              <div>
                <Link
                  href="/essays"
                  className="group inline-flex items-center text-tag transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  <span className="transition-all group-hover:underline">
                    Essays
                  </span>
                  <span className="transition-all transform group-hover:scale-105">
                    &nbsp;&#8594;
                  </span>
                </Link>
              </div>

              <div>
                <Link
                  href="/blogs"
                  className="group inline-flex items-center text-tag transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  <span className="transition-all group-hover:underline">
                    Blogs
                  </span>
                  <span className="transition-all transform group-hover:scale-105">
                    &nbsp;&#8594;
                  </span>
                </Link>
              </div>
            </section>

            {/* Social Media Links */}
            <footer className="flex justify-center lg:justify-start">
              <Footer />
            </footer>

            {/* Tag Filter */}
            <div className="my-10 lg:flex lg:flex-col space-y-2 justify-center">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`mr-4 text-left py-2 border-b-2 transition-all duration-300 ${
                    selectedTag === tag
                      ? "border-secondary text-secondary font-medium text-lg"
                      : "border-b-2 border-transparent hover:border-secondary text-primary transition-border transition-all duration-300"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content - Projects Section */}
        <main className="col-span-1 lg:col-span-4 md:col-span-1 sm:col-span-1 m-2">
          {/* Project Gallery */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-4"
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
                    className="relative group sm:ml-6"
                  >
                    {/* Image Container with fixed dimensions */}
                    <div className="relative w-full h-64 overflow-hidden">
                      <Link
                        href={`/projects/${project.name
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                      >
                        <Image
                          src={project.imgURL}
                          alt={project.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>
                    </div>

                    {/* Hover Animation */}
                    <Link
                      href={`/projects/${project.name
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                    >
                      {/* <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <div className="text-center mx-2">
                          <h3 className="text-white text-xl font-bold">
                            {project.name}
                          </h3>
                          <p className="text-gray-300 text-center">
                            {project.year}
                          </p>
                          <p className="text-gray-300 text-center">
                            {project.tools}
                          </p>
                        </div>
                      </div> */}
                    </Link>

                    {/* Project Info */}
                    <h3>{project.name}</h3>
                    <p className="text-secondary">
                      <i>{project.tags}</i>
                    </p>
                    <p>{project.media}</p>
                    <p className="my-4">
                      <b>Tools:</b> {project.tools}
                    </p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

"use client";
// import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogs.json"; // Import your Blogs data
import TitleLine from "@/components/TitleLine";
import BackToTop from "@/components/BackToTop";
import blogIDName from "@/data/blog-series.json";

const blogTag = "idm-thesis";
const blogSeriesName = blogIDName[0][blogTag];

export default function Home() {
  // Filter the Blogs based on selected tag
  const filteredBlogs = blogData.filter((blogs) => (blogs.tag === blogTag) && (blogs.posted));

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 min-h-screen m-4">
      <div className="col-span-1 md:col-span-4 lg:col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1">
        <div className="sticky top-0">
          <h2>
            <b>Blog Series: </b>
          </h2>
          <h2>{blogSeriesName}</h2>
        </div>
      </aside>
      <main className="col-span-1 md:col-span-3 p-4 mb-8">
        <div className="relative">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-transparent p-2 z-10 relative flex group"
            >
              <Link
                href={`/blogs/${blogTag}/${blog.id}`}
                className="w-full rounded-lg transition-all duration-300 ease-in-out bg-transparent group-hover:bg-gray-300 group-hover:bg-opacity-50 group-hover:backdrop-blur-md p-4"
              >
                <h3>{blog.title}</h3>
                <p className="text-date">{blog.date}</p>
                <p>{blog.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <div className="col-span-1 sm:hidden md:block lg:hidden"></div>
      <aside className="col-span-1 md:col-span-3 lg:col-span-1">
        <BackToTop />
      </aside>
    </div>
  );
}

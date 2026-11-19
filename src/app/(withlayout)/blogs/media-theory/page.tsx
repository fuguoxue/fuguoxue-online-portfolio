"use client";
import Link from "next/link";
import blogData from "@/data/media-theory-blogs.json"; // Import Blogs data
import blogSeries from "@/data/blog-series.json";

const blogTag = "media-theory";
const blogSeriesName =
  blogSeries[blogSeries.findIndex((item) => item.blogTag == blogTag)].blogName;

export default function Home() {
  // Filter the Blogs based on selected tag
  const filteredBlogs = blogData.filter(
    (blogs) => blogs.tag === blogTag && blogs.posted
  ).sort((a, b) => b.sequence - a.sequence);

  return (
    <div>
          <h2>
            <b>{blogSeriesName}</b>
          </h2>
          <div>
            <Link
              href="/blogs"
              className="group inline-flex items-center text-tag transition-all duration-300 transform hover:scale-105 text-lg"
            >
              <span className="transition-all transform group-hover:scale-105">
                &#8592;&nbsp;
              </span>
              <span className="transition-all group-hover:underline my-4">
                All blogs
              </span>
            </Link>
          </div>
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-transparent my-4 z-10 relative flex group"
            >
              <Link
                href={`/blogs/${blogTag}/${blog.id}`}
                className="w-full transition-all duration-300 ease-in-out bg-transparent group-hover:bg-black group-hover:bg-opacity-20 group-hover:backdrop-blur-md p-4"
              >
                <div>
                  <h3>{blog.title}</h3>
                  <p className="text-date">{blog.date}</p>
                  <p>{blog.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogs.json"; // Import Blogs data
import TitleLine from "@/components/TitleLine";
import BackToTop from "@/components/BackToTop";
import blogSeries from "@/data/blog-series.json";

const blogTag = "idm-thesis";
const blogSeriesName = blogSeries[(blogSeries.findIndex((item) => item.blogTag == blogTag))].blogName;

export default function Home() {
  // Filter the Blogs based on selected tag
  const filteredBlogs = blogData.filter(
    (blogs) => blogs.tag === blogTag && blogs.posted
  );

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
          <div>
            <Link
              href="/blogs"
              className="group inline-flex items-center text-tag transition-all duration-300 transform hover:scale-105 text-lg"
            >
            <span className="transition-all transform group-hover:scale-105">
              &#8592;&nbsp;
            </span>
              <span className="transition-all group-hover:underline">
              All blogs
              </span>
            </Link>
          </div>
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
                className="w-full transition-all duration-300 ease-in-out bg-transparent group-hover:bg-black group-hover:bg-opacity-20 group-hover:backdrop-blur-md p-4 grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="col-span-1">
                  <h3>{blog.title}</h3>
                  <p className="text-date">{blog.date}</p>
                  <p>{blog.description}</p>
                </div>
                <div className="col-span-1 relative w-full">
                  <Image
                    src={blog.featureImgURL}
                    alt="Feature image."
                    layout="responsive"
                    objectFit="cover"
                    width={400}
                    height={400}
                    className="drop-shadow-md"
                  />
                </div>
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

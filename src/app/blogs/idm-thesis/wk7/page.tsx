import TitleLine from "@/components/TitleLine";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import blogData from "@/data/blogs.json";
import blogSeries from "@/data/blog-series.json";
import path from "path";
import { fileURLToPath } from "url";
// import ExpandableImage from "@/components/ExpandableImage";
// import Image from "next/image";
// import ImageWithCaption from "@/components/ImageWithCaption";
// import Slideshow from "@/components/Slideshow";

// Define type
type BlogPostType = {
  title: string;
  id: string;
  date: string;
  tag: string;
  description: string;
  featureImgURL: string;
};

// Resolve file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Extract "idm-thesis" and "wk1" from the file path
const segments = __dirname.split(path.sep);
const tag = segments[segments.length - 2]; // "idm-thesis"
const id = segments[segments.length - 1]; // "wk1"

// Find the selected blog post
const blogDataArray: BlogPostType[] = blogData;
const selectedBlog = blogDataArray.find(
  (post) => post.tag === tag && post.id === id
);

if (!selectedBlog) {
  throw new Error("Blog not found");
}

// Find the blog series title
const selectedBlogSeries = blogSeries[(blogSeries.findIndex((item) => item.blogTag == tag))].blogName;

export default function Main() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen m-4">
      <div className="col-span-1 lg:col-span-5">
        <TitleLine />
      </div>
      <div className="col-span-1 sm:hidden md:hidden lg:block"></div>
      <main className="col-span-1 lg:col-span-3 p-4 mb-8">
        <div>
          {/* metadata */}
          <section>
            <h2>{selectedBlog?.title}</h2>
            <p className="text-date">{selectedBlog?.date}</p>
            <p className="mb-4 text-secondary">
              <b>Blog series: </b>
              <Link
                key={tag}
                href={`/blogs/${tag}`}
                className="hover:underline"
              >
                {selectedBlogSeries}
              </Link>
            </p>
            <p>{selectedBlog?.description}</p>            
            <Link
              href="https://bazaar-log.vercel.app/"
              className="external-link-for-blog col-span-1 lg:col-span-3"
              target="_blank"
            >
              Play Bazaar.log demo online
            </Link>
            <br/>
            <Link
              href="https://youtu.be/IoXiEs6EgHg"
              className="external-link-for-blog col-span-1 lg:col-span-3"
              target="_blank"
            >
              Bazaar.log video recording
            </Link>
          </section>

          {/* blog content */}
          {/* Midterm Demo Day Playtesting - Observation, Feedback, and Reflection */}
          <section>
            <h3>
              Midterm Demo Day Playtesting - Observation, Feedback, and
              Reflection
            </h3>
          </section>
          {/* Next steps */}
          <section>
            <h3>Next Steps</h3>
            <ul className="list-disc ml-4">
              <li>
                Add more guidance to let the player understand what to do next.
              </li>
              <li>
                Add &quot;easter eggs&quot; at each game stage so players have
                the incentives to continue playing.
              </li>
              <li>
                Categorize content into &quot;must read&quot; and
                &quot;optional&quot;, so that players won&apos;t miss any
                important content but still have the option to skip some
                readings.
              </li>
            </ul>
          </section>
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <BackToTop />
        </div>
      </main>
    </div>
  );
}

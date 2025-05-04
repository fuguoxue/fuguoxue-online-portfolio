import TitleLine from "@/components/TitleLine";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import blogData from "@/data/blogs.json";
import blogSeries from "@/data/blog-series.json";
import path from "path";
import { fileURLToPath } from "url";
import Slideshow from "@/components/Slideshow";
// import ExpandableImage from "@/components/ExpandableImage";
// import Image from "next/image";
// import ImageWithCaption from "@/components/ImageWithCaption";

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
const selectedBlogSeries =
  blogSeries[blogSeries.findIndex((item) => item.blogTag == tag)].blogName;

const brochureImgs = [
  {
    image: "/imgs/blogs/idm-thesis/wk8/Bazaar.log Brochure.jpg",
    description: "Bazaar.log user manual page 1.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk8/Bazaar.log Brochure2.jpg",
    description: "Bazaar.log user manual page 2.",
  },
  
  {
    image: "/imgs/blogs/idm-thesis/wk8/Bazaar.log Brochure3.jpg",
    description: "Bazaar.log user manual page 3.",
  },
  
  {
    image: "/imgs/blogs/idm-thesis/wk8/Bazaar.log Brochure4.jpg",
    description: "Bazaar.log user manual page 4.",
  },
];

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
          </section>

          {/* blog content */}
          {/* Improving Player Experience */}
          <section>
            <h3>Improving Player Experience</h3>
            <p>
              From the demo day playtesting, I observed that instead of being
              from easy to difficult like most games&apos; progression, my game
              starts from a difficult level, especially for players who never
              program in an CLI environment before. Therefore, players lacked
              the motivation to explore each function or play further.
            </p>
            <p>
              To solve the problem, I came up with two solutions: 1) designing a
              player manual, which will be printed and laid out on the table for
              players to read through for instructions, and 2) designing an
              in-game tutorial to guide players through each function. Below are
              my progresses so far.
            </p>
            <h4>Player Manual</h4>
            <Slideshow slides={brochureImgs} autoplay={false} bgColor="#aaa"/>
            <h4>In-game Tutorial</h4>
            <div className="relative w-full pb-[56.25%] mb-4">
              <iframe
                width="full"
                height="auto"
                src="https://www.youtube.com/embed/t1BMlLcjaDw?si=LW3AKoJMUadRR0NH"
                title="Bazaar.log Demo Video on YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </section>

          {/* Next steps */}
          <section>
            <h3>Next Steps</h3>
            <ul className="list-disc ml-4">
              <li>
                Finish UI layout and content design for each stage.
              </li>
              <li>
                Brainstorm at least 5 easter eggs at each stage, and think about how to implement them.
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

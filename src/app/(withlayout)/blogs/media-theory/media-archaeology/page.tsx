import Link from "next/link";
import blogData from "@/data/media-theory-blogs.json";
import blogSeries from "@/data/blog-series.json";
import path from "path";
import { fileURLToPath } from "url";

// Define type
type BlogPostType = {
  title: string;
  id: string;
  date: string;
  tag: string;
  description: string
};

// Resolve file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Extract "media-theory" and id from the file path
const segments = __dirname.split(path.sep);
const tag = segments[segments.length - 2]; // "media-theory"
const id = segments[segments.length - 1]; // id

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
    <div>
          {/* metadata */}
          <h2>{selectedBlog?.title}</h2>
          <p className="text-date">{selectedBlog?.date}</p>
          <p className="mb-4 text-secondary">
            <b>Blog series: </b>
            <Link key={tag} href={`/blogs/${tag}`} className="hover:underline">
              {selectedBlogSeries}
            </Link>
          </p>
          <p>{selectedBlog?.description}</p>
          
          {/* blog content */}
          <div>
            <p>This week&apos;s reading is Code and Clay, Data and Dirt by Shannon Mattern. The book examines the history of urban media and how different media shape a city&apos;s architecture.</p>
            <p>The most memorable quote in the chapters I read is: &quot;They&apos;ve always been both new and old, immaterial and material, wireless and wired. Our media cities have been, and still are, both ether and ore, code and clay.&quot; Instead of the perspective of new media &quot;replacing&quot; old media, Shannon introduces a continuous and developmental vision. For example, in Chapter 1: Waves and Wires, Shannon mentions that MediaCityUK once researched how early infrastructure for physical and digital connections has provided a foundation for their current media production activities in Salford.</p>
            <p>I also see from the book that sometimes people go back to the old technology for good reasons. Chapter 1 mentions that some high-frequency traders recently have returned to using the microwave instead of fiber optics for financial data transmission because the microwave turns out to provide faster transmission speed. This reminds me of similar scenarios in which people prefer older technology. For example, many people complain about Windows 11 OS upon its release and would like to go back to Windows 10 OS. Upon reading this book, I think that media history progresses in a non-linear way, just like the history of any other field.</p>
            <p>Another interesting opinion in this book is that smart cities don&apos;t equal urban intelligence. This interests me because I want to know how urban intelligence has existed since ancient times. If continue reading this book, I want to learn more about how people build cities with intelligence before the existence of any digital technology like wireless communication and IoT.</p>
            <p>What I don&apos;t quite understand is why the word &quot;ether&quot; is used in the book, because &quot;ether&quot; is almost synonymous with pseudoscience.</p>
          </div>
        </div>
  );
}

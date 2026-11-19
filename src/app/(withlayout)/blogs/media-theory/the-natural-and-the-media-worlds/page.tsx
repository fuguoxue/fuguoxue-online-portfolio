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
            <p>This week&apos;s readings are The Marvelous Clouds by John Durham Peters and Worlds In Figures by Evan Roth. While the previous week&apos;s reading by Shannon Mattern has elaborated on why we should consider media as materialized and embodied, John emphasized that the immateriality of media has always been the core of human culture.</p>
            <p>I read further in Chapter 2, in which John writes about the sea as a medium. One thing I learned from this chapter is that one medium may mean different things for different objects. For example, the sea is uninhabitable to humans, while the opposite is true for fish. This calls back to John&apos;s opinion in the introduction chapter, that &quot;environments are also media&quot;. John also quoted McLuhan&apos;s words: &quot;Environments are invisible.&quot;, which also calls back to the introduction chapter: &quot;The Internet … like all media, it comes with a built-in cloak device.&quot; In the digital age we are in now, digital media are becoming so prevalent that we neglect their existence and forces in our lives. Therefore, I think it is meaningful to find an anti-environment to the one we are living in soaked in digital content, just like what McLuhan is doing.</p>
            <p>Materiality is exact in existence and meaning, while immateriality can carry abundant and changing meaning. From this perspective, I think the Worlds in Figures project is a typical example of the immateriality of media. The world map is a handy tool for learning about and navigating our world, but I learned from this project that there are many versions of the world map. This fact makes the world map more like a cultural concept to me: instead of using this world map system for navigation or geography learning, I learned how people living in different places and different eras see and interpret the world. Another use of symbolic language in this project is the faces drawn on the world map, which leverage the hardwired human brain feature of face recognition to help the viewers see how the world is &quot;distorted&quot; by different human cultures.</p>
          </div>
        </div>
  );
}

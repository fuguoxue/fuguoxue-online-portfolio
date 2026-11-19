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
            <p>This week&apos;s reading is the introduction chapter of The Atlas of AI by Kate Crawford, which talks about the existence of Artificial Intelligence (AI) as embodied and material with great social impact. It starts with the story of Clever Hans to introduce a broader definition of intelligence. Then, it introduces why AI is a product of human labor. From this chapter, I learned that many resources have been intentionally or unintentionally invested into the building process of AI, which includes rare earth minerals, oil, coals, and so on. Aside from these natural resources, I also learned from New Extractivism by Vladan Joler that we as the users of the public Internet also contribute our labor to AI building by investing our time, attention, and data about us and the world. After reading this chapter, I feel that I should be aware of the carbon footprint produced by the programs I wrote as well as the AI tools I use. </p>
            <p>A memorable quote is: &quot;In fact, the concept of intelligence has done inordinate harm over centuries and has been used to justify relations of domination from slavery to eugenics.&quot; (PDF page 5) As mentioned in the book, I believe that narrow definitions of intelligence will continue to be harmful. For example, the author explained how the narrowly defined concept of intelligence has prevented us from seeing the relationship between AI and our physical world. Another example is &quot;the fear of the weak&quot;, a concept I read in Letters Between Chizuko Ueno and Ryomi Suzuki, which means both contempt for the weak and fear of becoming the weak. If society does not recognize intelligence in a broader sense, the so-called &quot;less intelligent&quot; will not be able to live with dignity. This also reminds me of what we read earlier about &quot;Glitch Feminism,&quot; which talks about how narrow definitions of the gender binary are harmful to our society.</p>
            <p>Interestingly, when talking about what AI is, the author mentions a lot of AI products but ChatGPT. This book was published in 2021, and I searched online and found that ChatGPT was launched in late 2022. I believe if I asked people this question now, at least one answer would mention ChatGPT. What&apos;s amazing is that since then, AI has still been iterating at a breakneck pace. After finishing this week&apos;s reading, I feel a little worried about how much resources it has already consumed and how many more it will consume in the future.</p>
          </div>
        </div>
  );
}

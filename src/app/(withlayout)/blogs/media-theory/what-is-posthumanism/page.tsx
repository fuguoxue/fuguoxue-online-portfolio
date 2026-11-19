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
            <b>ChatGPT&apos;s response to the reading:</b>
            <p>Short Summary: The book, &quot;Nonhuman Photography&quot; by Joanna Zylinska, explores the evolving role of photography in the context of the Anthropocene, focusing on its impact on human perception and life, and discussing how it transcends traditional humanist frameworks.</p>
            <p>Memorable Quote: &quot;To live is to be photographed, to have a record of one&apos;s life, and therefore to go on with one&apos;s life oblivious, or claiming to be oblivious, to the camera&apos;s nonstop attentions.&quot;</p>
            <p>Surprising Aspect: The book&apos;s perspective on photography as a nonhuman medium, highlighting its role in shaping life and its entanglement with the Anthropocene, provides a fresh and unconventional viewpoint on a familiar subject.</p>
            <p>Relation to Programming: While the text doesn&apos;t directly relate to programming, it highlights the importance of understanding and redefining traditional frameworks in various fields, including the digital and media-related areas, which can be applicable to programming in terms of rethinking established paradigms and exploring new concepts.</p>
            <p>Relation to Other Readings: This text shares similarities with discussions of media theory, particularly in the context of the Anthropocene, and it aligns with themes related to the impact of technology on culture and perception, which have been addressed in previous readings on media and communication studies.</p>
            <b>My response to ChatGPT&apos;s response:</b>
            <p>I think ChatGPT did a great job summarizing the text provided, and the surprising aspect it wrote is also one of the aspects that interests me the most. It also suggests an interesting relationship between this book and programming, which is worth thinking about further.</p>
            <p>However, I wonder about the selection criteria of the memorable quote because I noticed that it is another person&apos;s words quoted by the author. It also didn&apos;t capture what I think is most important, but rather like an introduction to what the author wants to cover. My memorable quote would be the definition of &quot;nonhuman photography&quot; on PDF page 5: &quot;The notion of &quot;nonhuman photography&quot; proposed here encapsulates three different yet interconnected conceptual planes: (1) the rather frequently encountered yet often uncanny-looking photographs that are not of the human…; (2) photographs that are not by the human…; (3) photographs that are not for the human.&quot;</p>
            <p>Lastly, ChatGPT obviously lacks knowledge of what I&apos;ve read before. It guesses (without telling me) that my previous readings were about media and communication studies. This speculation is plausible based on this week&apos;s reading but quite different from the truth that I read a lot about programming.</p>
          </div>
        </div>
  );
}

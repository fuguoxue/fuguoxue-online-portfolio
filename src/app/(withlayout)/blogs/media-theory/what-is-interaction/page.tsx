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
            <p>&quot;The Art of Interactive Design&quot; Chapter 1 by Chris Crawford writes about the misunderstandings and definition of interactivity, and some examples of low/no interactivity. In the beginning of this chapter, Chris pointed out that the computing experts were underestimating the importance of interactivity until recently (the book was published in 2002). This fits with what I&apos;ve read in my interactive installation course: Myron Krueger&apos;s &quot;Responsive Environments&quot;. From that reading, I learned that Myron&apos;s work was hard to categorize for a long period of time: neither the computing community nor the art community would fully accept his work. I also encountered a similar situation before. When I presented my final year project, an interactive installation, to a group of engineering professors at the defense, one of them said that my work was more like art and not very engineering. In the preface of that reading, I learned that works like Myron&apos;s can be called a &apos;critical technical practice&apos; (CTP). I think my final year project is also an example of CTP.</p>
            <p>Coincidentally, &quot;The Media Art Pose&quot; also include a Myron&apos;s work. Every example in this visual essay is interesting to me, but the most surprising one is the Ars Electronica logotype. I thought I was familiar with the logo, but it was not until reading this essay that I realized it is an abstraction of the &apos;Media Art Pose&apos;. I think Chris Crawford would also find this essay interesting: the examples listed here are all highly interactive because there are communications happening between humans and computers.</p>
            <p>Back to Chris&apos;s book, his understanding and definition of interactivity are new to me, and I agree with him. He sees interactivity as a dimension of an object, which is not a Boolean value but a value on a continuous spectrum. He also mentioned the substantial difference between &quot;interaction&quot; and &quot;reaction&quot;, which really helps identify an object&apos;s interactivity level. However, similar to the interactive theatre he writes about in the note on page 10, there are also interactive movies and interactive novels now. For example, &quot;Black Mirror: Bandersnatch&quot; is a movie famous for its interactivity. Another example is the Twine Engine, a handy software for creating hypertext interactive novels. I think the concept of interactivity is inspiring many creative industries, and exciting projects emerge as traditional media work with interactivity.</p>
            <p>Lastly, if I&apos;m going to read this book by Chris, I would like to read Chapter 27. He mentioned on page 11 that Chapter 27 is about the wars between the science/engineering culture and the arts/humanities culture. I think the wars are continuing not only in the field of interactivity but also in new fields like AI art, so I am very interested to learn more.</p>
          </div>
        </div>
  );
}

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
            <p>&quot;Software Studies: A Lexicon&quot; is a book edited by Matthew Fuller in 2008, which is about software studies as a field closely connected to our cultures and society. From the book&apos;s introduction, I understood the historical context and characteristics of software. Interestingly, before IBM decided to separate software from hardware in 1968, software was more like a free add-on to the hardware, which is surprising considering how ubiquitous, powerful, and versatile software has become today in our everyday lives. It also mentions the software&apos;s ability to learn from and accommodate its outside world, which resonates with our reading last week (&quot;Program or be Programmed&quot; by Douglas Rushkoff).</p>
            <p>The introduction discusses several characteristics of software. Among them, I agree that software has a degree of freedom by maintaining a certain distance from reality and social norms. Gaming software might be a good example where games mainly depend on the developer&apos;s creativity, imagination, and programming, and it can be unrelated to the real world. I also agree with the interdisciplinary and multi-scalar nature of software, as we need software in almost every field, from large companies to individuals. However, I am skeptical about the self-sufficiency of the software mentioned in the book. I think the popularity of software in society has promoted the emergence of more software that meets personalized needs, but no matter how small a software&apos;s target user group is, it still needs to be continuously improved to meet the changing needs of users and conform to user habits. In other words, software is indeed expected to &quot;get better and better,&quot; which is also one of the reasons UX design exists as a field of study.</p>
            <p>The introduction talks about the materiality of software, which I would like to learn more about if I&apos;m going to continue reading this book. I also want to read the chapter on &quot;Interaction&quot; by Michael Murtaugh because I am interested in Human-Computer Interaction.</p>
          </div>
        </div>
  );
}

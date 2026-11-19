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
            <p>This week&apos;s reading is The Question Concerning Technology in China by Yuk Hui. The introduction chapter of this book starts from Heidegger&apos;s perspective that technology has become separated from its cultural origin and thus international. However, Yuk Hui challenges that technology and its cultural origin cannot be separated, otherwise will result in difficulty in reflecting upon technology, just like what is happening in China now as well as in other non-Western cultures.</p>
            <p>From this reading, I learned two important concepts: technical tendency and technical facts. From my understanding, the two are affecting each other in a dynamic relationship. For example, the Large Language Model emerged from the technical tendency of automation and digitization, but it is leading to a new technical tendency of Artificial Intelligence (AI). I also learned more about Chinese and Greek mythology the origin and gods of technology.</p>
            <p>I agree with Yuk Hui that technology should be discussed in cultural contexts because the development of technology involves tons of human decisions. This reminds me of Atlas of AI, our week 9 reading, which also holds that AI is not just a technical term, but also a political, economic, cultural, and historical term. Indeed, different cultures can respond surprisingly differently to the same technology. For example, I was recently surprised to see that while AI-generated content is welcomed on Western social media platforms, it is a synonym for cheating on Chinese social media platforms.</p>
          </div>
        </div>
  );
}

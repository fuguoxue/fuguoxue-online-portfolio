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
            <p>&quot;Ways of Seeing, Episode 1&quot; by John Berger is about the new ways of seeing things (especially paintings) with the advent of digital technology like cameras and television. This video was made in 1972 and was based on an essay by Walter Benjamin written in 1936.</p>
            <p>A quote from the video goes: &quot;… the reproduction of works of art can be used by anybody for their own purposes. Images can be used like words, we can talk with them.&quot; (21:07 of the video). I think it captures the main idea of this video: by reproduction, the value and meaning of an original artwork are altered to serve one&apos;s expression. From this video, I learned that with the invention of cameras, the meaning and value of artworks have changed. &quot;The days of pilgrimage are over&quot; (at 6:34 of the video) because the meaning of an artwork becomes transmittable. The unique original meaning of an artwork is destroyed during the transmission, and its possible meanings get multiplied upon being stripped of the false mystery and the false religiosity that surrounds it. Digital technology has given the masses richer expressions and more say in art appreciation. This was once the monopoly of art experts.</p>
            <p>I also agree that most digital content I receive every day is a reproduction of various materials, which don&apos;t necessarily have the same original meanings. A negative example is fake news, which usually misuses images to prove the authenticity of the news. However, reproduction is not always negative. For example, memes on the Internet nowadays offer people another way of expression aside from pure text.</p>
            <p>This video reminds me of Andy Warhol&apos;s works like Campbell&apos;s Soup Cans. In my opinion, his works take digital reproduction to its extreme: there are so many copying, pasting, and image filtering, which are only possible via digital technology. By manipulating images in these ways, the original meaning of images changes, and new meaning emerges: maybe the original image of a Campbell Soup Can is for advertisement, but now I&apos;m appreciating the beauty of its reproduction and thinking about digital technology.</p>
            <p>Overall, I think this video is inspiring and relevant despite its age. I will definitely go through the other 3 videos of this series in my free time.</p>
          </div>
        </div>
  );
}

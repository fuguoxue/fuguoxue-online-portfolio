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
            <p>&quot;Program or Be Programmed: Ten Commands for a Digital Age&quot; examines the challenges posed by the digital media revolution and advocates learning programming as a solution. Its author, Douglas Mark Rushkoff, is a respected American media theorist associated with the early cyberpunk movement and open-source approaches to societal issues. The book was published in 2010.</p>
            <p>The most memorable phrase is &quot;balance that bias&quot;, which summarizes what we should do to address the challenges posed by the digital revolution. According to the text, every medium is biased, but it is important to &quot;balance that bias with the needs of real people living and working in both physical and virtual spaces&quot; in the digital age.</p>
            <p>From the text, I learned about past media revolutions in human history and their social impact, and how the current digital media revolution differs from previous ones.</p>
            <p>I agree that we should think carefully before embracing any emerging technology, as it may have unpredictable and irreversible effects on us. However, I disagree that digital technology inherently favors facts. The emergence of the Information Cocoon phenomenon, a byproduct of Internet growth, tends to amplify biases rather than the truth.</p>
            <p>The text delves into the profound implications of programming advancements on individuals and society as a whole, and why learning programming can better equip us to navigate the ongoing digital revolution.</p>
            <p>I may find resonance with the 3rd Chapter: &quot;Choice -- You May Always Choose None of the Above&quot;. While machines are programmed to make binary &quot;yes or no&quot; decisions, we, as humans, possess the unique capacity for a broader spectrum of responses. It&apos;s essential to remind ourselves of this fundamental distinction between machines and ourselves.</p>
            <p>For further reading,  I am interested in &quot;The Bias of Communication&quot; by Harold Adams Innis because of my curiosity about media biases introduced in the text. I am curious to know if all the biases caused by media are negative, or if there is still a positive side.</p>
          </div>
        </div>
  );
}

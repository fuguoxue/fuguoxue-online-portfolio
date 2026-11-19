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
            <p>This week&apos;s reading is the introduction chapter of Race After Technology by Ruha Benjamin published in 2019. It writes about how technology has reinforced social inequality and how race itself is a kind of powerful technology as a symbolic device.</p>
            <p>Similar to Ruha&apos;s experience, I also have some feelings towards the naming in society and how one&apos;s name impacts one&apos;s social appearance. My Chinese first and last names are uncommon even in China and hold multiple meanings in Chinese. However, when studying abroad, I feel that my name is reduced to signaling my Asian identity. Even Chinese people encountering my English-spelled name tend to assume I&apos;m a Chinese man, given its same spelling to a common name for Chinese men in the late 20th century. These situations sometimes make me uncomfortable but I don&apos;t know how to avoid them. Ruha points out how &quot;culturelessness&quot; can be an excuse for escaping responsibility in a biased system and I agree with this opinion. Despite the discomfort, I still don&apos;t feel like picking up a typical white name as my preferred name because I have no intention of shying away from my Asian identity.</p>
            <p>The most memorable line to me is &quot;To break the machine was in a sense to break the conversion of oneself into a machine for the accumulating wealth of another.&quot;, a quote of Imani Perry quoted by Ruha. This brings to mind Vladan Joler&apos;s &quot;New Extractivism&quot; video, discussing how individuals are turned into data-producing machines for algorithm training. &quot;Race After Technology&quot; elaborates on how this new extractivism disproportionately affects non-white communities. Algorithms offer personalization but can hide the systemic marginalization of people of color and sexual minorities. It also reminds me of the concept of an &quot;information cocoon,&quot; where algorithms limit what users see.</p>
            <p>For me, my efforts to break the machine involve: 1) Rarely sharing personal updates on social media, 2) Limiting the time I spend on platforms, 3) Only logging into a platform when absolutely necessary, 4) Customizing cookie settings, and more. I can&apos;t say for certain how effective these measures are, but in the absence of comprehensive regulations, I feel compelled to take steps to safeguard my personal information and maintain the clarity of my independent thinking, free from the overwhelming influence of personalized online content.</p>
          </div>
        </div>
  );
}

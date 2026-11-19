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
            <p>This week&apos;s readings are &quot;New Media From Borges to HTML&quot; (2001) by Lev Manovich, &quot;In Defense of the Poor Image&quot; (2009) by Hito Steyerl, &quot;Primacism&quot; podcast (2021) by David Rudnick, Holly Herndon and Mat Dryhurst, and &quot;Holographic Media&quot; (2023) by Caroline Busta and Lil Internet. These materials focus heavily on various digital media&apos;s presence in modern society.</p>
            <p>As an artist and digital culture theorist, Manovich&apos;s elaborations on definitions of new media and new media art are easy to understand with numerous examples of new media art and discussions. He brings up eight propositions of what new media is, and I resonate with many of them. For example, there are differences between new media and cyberculture: the former focuses on culture and computing, and the latter focuses on social and networking. My understanding aligns with Manovich&apos;s: I think new media is about how to use technology to create artistic expression, and cyberculture is closely connected to people&apos;s activities on the Internet and public or semi-public social media platforms. According to Manovich, the definition of new media often has the characteristics of the times. Nowadays, new media exclude TV shows, but they were once also considered a new medium.</p>
            <p>Manovich&apos;s article reads so relevant today that I found the following statement weirdly outdated when first read it: &quot;For instance, one can easily search for a particular text string in a text but not for a particular object in an image.&quot; Then I googled the year of publication and found that Manovich wrote it in 2001. It might have sounded impossible in 2001, but now machine learning technology can recognize objects within an image or even a live-streaming video, thus allowing people to search for a specific object. Manovich is also interested in Artificial Intelligence (AI) now: I went through his website, and he recently has published many articles analyzing Generative AI for art and media.</p>
            <p>&quot;In Defense of the Poor Image&quot; by Steyerl writes about the function of poor images in society. This article makes me realize that I have been so accustomed to poor images circulating on social media platforms, that I never thought about why they are usually of low resolution. One explanation I can think of is information efficiency: a high-resolution meme won&apos;t outperform its low-resolution replica in instant messaging online, but it will definitely be more expensive because the messaging platform needs more space to store it. Steyerl states that the images gain a higher speed of circulation by sacrificing their resolution, which matches my idea. Steyerl also points out other cultural phenomena catalyzed by poor images, such as pirate cultural consumables and the resurrection of experimental films.</p>
            <p>One fact mentioned by Steyerl is interesting: &quot;The history of conceptual art describes this dematerialization of the art object first as a resistant move against the fetish value of visibility.&quot; We read about fetishism weeks ago in Society of the Spectacle by Guy Debord, so I wonder how Debord would comment on this failed attempt. Steyerl continues to write: &quot;...the dematerialized art object turns out to be perfectly adapted to the semioticization of capital, and thus to the conceptual turn of capitalism.&quot; An example of dematerialized art object is NFT, discussed in the &quot;Primacism&quot; podcast. In the podcast, David Rudnick argues that NFT is in danger of becoming mere currency and losing its artistic value. Many contemporary artworks probably face the same crisis of fueling capitalism and preserving little meaning. It may become obvious when referring to Steyerl&apos;s article&apos;s discussions of poor images. I am also skeptical of NFT because I don&apos;t see how it differs from a paid song. If one can record paid songs to make pirate CDs, then one can also simply take a photo of an NFT to make pirate art – even blockchain technology cannot help with that.</p>
            <p>Lastly, &quot;Holographic Media&quot; talks about platform physics, present-day media taxonomy based on social protocol formed, and several interesting theories. I find the &quot;Void the Mid&quot; and &quot;Avoid the Mid&quot; sections very interesting and reasonable, especially the example of Windows computers or Android phones being more vulnerable to viruses. &quot;Dark Forest Expansion&quot; is also interesting. I read about Dark Forest before in Three Body and feel that it is a perfect analogy for the social media world we are in.</p>
          </div>
        </div>
  );
}

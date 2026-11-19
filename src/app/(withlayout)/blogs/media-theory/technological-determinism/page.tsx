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
            <p>This week’s readings are The Medium is the Message (1964) by Marshall McLuhan, Industrial Society and Its Future (1995) by Theodore Kaczynski, and an interview between Geert Lovink and Yuk Hui (2017). The three readings are very different in their tones and genres, but all show concern for the future with modern technology.</p>
            <p>McLuhan holds that the medium is a message more powerful than the messages it carries because the medium structures the modern world without being noticed. Two points he brings out impressed me: 1) the “message” carried by any medium is nothing but the modification of scale, pace, or pattern on things or concepts that already exist in human society (e.g., AI painting didn’t bring the concept of painting, but it provides a new way to paint), and 2) the characteristics of the medium are usually concealed by the content it carries. In the article, McLuhan warns that media affect humans without being noticed, as any medium is an extension of human senses and our awareness and experience are based on them.</p>
            <p>McLuhan’s article is moderate compared to Industrial Society and Its Future, also known as the Unabomber Manifesto. Indeed, this article looks more like a manifesto than a serious academic article, as it contains more slogans and programs than logical discussions. There are many logical errors in this article: for example, his prediction of a disastrous future with genetic engineering technology, which is a typical slippery slope argument. While Ted does state some facts about industrial society, his opinions on science and industrialization are overly pessimistic and he didn't see the numerous benefits it brings. In the article, Ted mentions the destruction of the Roman urban sanitation system to provide an example of organization-dependent technology, which he aims to destroy, but that can be a counterargument to his main idea: if the system hadn’t been destroyed and forgotten, European countries would have experienced fewer plagues like Black Death. Human society might not be completely free according to Ted’s definition of freedom, but his article also failed to make me believe that “primitive people” were freer than us in the modern world.</p>
            <p>Upon searching online, I learned in surprise that the Unabomber Manifesto was published under the threat of Ted after his engagement in a mail bomb campaign, which was targeted at universities and airlines in the first place. It was more surprising to me that the Unabomber Manifesto has gained attention from groups like eco-extremists, as Ted appears as a terrorist to me. After careful thinking, I think the article seems plausible and convincing due to the following reasons. First, it was published in The New York Times and The Washington Post, two of the most influential presses in the US. To some extent, the publication was one of his strategies mentioned in the article (i.e., using some modern technology to destroy the industrial society). Second, it simplifies social problems wherever possible. There are many places in the article where Ted writes sentences like “the real situation is complex,” which is irresponsible as most of the public usually won’t think of analyzing the real situation while reading the newspaper; the public has no choice but to continue reading what he wrote. Third, Ted identified some of America's most acute social contradictions and framed those who struggled with them (the "leftists") as the counterforce to the success of the revolution he envisioned. While his explanation of the relationship between leftism and his envisioned revolution is defective, his mentioning of those social problems can provoke strong emotions among the public and create the illusion that it is indeed those so-called “leftists” that create so many social problems.</p>
            <p>Moving on to the interview of Yuk Hui about the philosophy of technology in China, Hui pointed out that Chinese society encounters many developed modern technologies, and it struggles with integrating modern technology into it. This interview reminds me of The Question Concerning Technology in China by Yuk Hui, in which he writes that mastery of technology is a talent in Chinese mythology. Given the close relationship between myth and philosophy, the attitudes of China and the West toward modern technology cannot be explained by the same philosophical system. From the interview, it sounds like China still treats technology as a “means to an end”, which we already learned from Heidegger’s article that it is outdated. Like other parts of the world, Chinese society also needs to reflect on its attitude toward technology and rethink the philosophy of technology in China.</p>
          </div>
        </div>
  );
}

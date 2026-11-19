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
            <p>This week&apos;s readings are Glitch Feminism (2020) by Legacy Russel, Notes on Blacceleration (2017) by Aria Dean, and The Last Angel of History, a documentary by John Akomfrah.</p>
            <p>I started with the documentary, which is mainly about Afrofuturist music in America. It mentions black musicians of different music genres that seem to have the following things in common: they all work with shared mythological images and icons, space iconography, certain tropes of madness, and extraterritoriality. Since I love reggae, funk, and jazz, I went to listen to the music of Lee Perry, George Clinton, and Sun Ra mentioned in the documentary and I enjoyed their music a lot. Inspired by humans&apos; traveling into space and landing on the Moon in the late 20th century, black American musicians wanted to show black people&apos;s connection with the cosmos and technology via music production. Therefore, their music incorporates electronic instruments and sound effects and at the same time retains the style of African music. Afrofuturism&apos;s penchant for electronic music and cosmic concepts are not just some features enabled by technological advances; they came into existence due to American black people&apos;s lack of sense of belonging. Their ancestors were unwillingly brought from Africa to America as slaves; hundreds of years later, black Americans still felt rejection in their social lives. Therefore, two features of Afrofuturism are “back to the origin” and “imagining the future”.</p>
            <p>Similar opinions appear in Notes on Blacceleration, too. In this article, Dean claims that accelerationism has always been in the black community. Before, accelerationism revolved around fighting against capitalism, which can be traced back to the theory of Marx. Marx established the worker-capitalist dualism, but he didn&apos;t realize that there were still slaves, who belonged to neither workers nor capitalists. Dean writes: “Under racial capitalism, from the Middle Passage onward, the was-African-made-black is a miraculous paradox, human-but-not. She is an object-subject.” This reminds me of our previous reading Necropolitics, where Achille Mbembe also mentioned the reduction of slaves to “bare life”. Right accelerationism looks forward to the acceleration of capitalism that will eventually destroy capitalism, while left accelerationism has a hard time maintaining humanitarianism. Blaccelerationism&apos;s goals align with those of both sides: they want to destroy capitalism due to their painful experience during the primitive accumulation process of capital, and they also want to maintain humanitarianism by expanding the concept of humans.</p>
            <p>Like Blacceleration and Afrofuturism, Glitch Feminism rejects dualism but focuses more on rejecting gender dualism. Russel argues that the gender binary is a form of hegemony posed by patriarchy, and glitched populations outside of this framework are a threat to the patriarchal social order. Among the examples mentioned, I was most impressed by Victoria Sin, who dresses up with a prosthesis to emphasize gender as a social or cultural concept rather than a biological concept. Some claims resonate with Notes on Blacceleration, like “being useless” and “exclusion of the slave from any transaction of value”. Different from the time of slavery, however, now glitch feminists voluntarily and consciously become “useless” to oppose capitalism and patriarchy. The technological way of thinking in Glitch Feminism is also interesting, like the unavoidable nature of glitches, the importance of encryption, and “ghosting on the body”.</p>
            <p>I agree with Russel and Dean that many efforts are made for not women&apos;s rights, but white women&apos;s rights; not workers&apos; rights, but white workers&apos; rights. It seems to me that race (black, white, Asian, …), class (workers, capitalists, slaves, …), and gender easily intertwine with each other in social problems, and it is not easy to have all aspects considered. I am confused about whether there will be a perfect or optimal solution for all.</p>
          </div>
        </div>
  );
}

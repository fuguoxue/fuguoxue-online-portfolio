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
            <p>Glitch Feminism introduces the concept of &quot;glitch feminism&quot; and how digital technologies contribute to the dismantling of the unstable structure of the gender binary. The most impressive quote to me is: &quot;When we gender a body, we are making assumptions about the body&apos;s function, its sociopolitical condition, its fixity.&quot; This resonates with my own experiences as a woman and deepens my understanding of the challenges faced by non-binary individuals.</p>
            <p>I agree with the author that digital technology helps amplify the voices of marginalized people in the AFK world, which is inspiring. However, in virtual spaces, where anonymity is prevalent, it is imperative that rules and regulations evolve alongside technological advancements to ensure the safety of all users, including those who are black, female, queer, and more. Besides, the use of the technical word &quot;glitch&quot; as a metaphor in the book is new and interesting to me. I want to know more about the interpretation of this metaphor if I continue reading the book.</p>
            <p>In the previous weeks&apos; readings, the digital world is described as a place that allows people to have a certain degree of freedom. &quot;Software Studies: A Lexicon&quot; states the trend of software creation to cater to diverse populations and needs, leading to a more diverse yet chaotic digital world. &quot;Glitch Feminism&quot; exemplifies this idea, emerging from the complexity of the digital realm with the potential to pave the way for a more inclusive society.</p>
            <p>I have a keen interest in feminism but the concept of cyberfeminism introduced on the Cyberfeminism Index about page is new to me. On the website, I selected some entries like &quot;Women, Art, Technology&quot; because I want to learn about the intersections of feminism, computer technology, and art. I am interested to learn about the history of cyberfeminism and women in tech industries, so I selected entries like &quot;When Computers Were Women&quot;. Other entries like &quot;Cybersexism: Sex, Gender and Power on the Internet&quot; are selected because I want to learn how cyberfeminism positions itself and functions in the digital world.</p>
            <Link href="/documents/cyberfeminismindex.pdf" className="text-tag hover:underline" target="_blank">Check my cyberfeminism index PDF</Link>
          </div>
        </div>
  );
}

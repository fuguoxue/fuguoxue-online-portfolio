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
            <p>This week&apos;s readings are &quot;The Cyborg Manifesto&quot; (1985) by Donna Haraway, &quot;A Hacker Manifesto&quot; (2004) by McKenzie Wark, &quot;The Xenofeminist Manifesto&quot; (2018) by Laboria Cuboniks Collective, and Cyberfeminism Index, a website by Mindy Seu. The three manifesti explore and advocate for possibilities for feminism with the advent of new technology, especially information technology. The Cyberfeminism Index is a compilation of articles and manifesti about cyberfeminism sorted chronologically. Overall, these readings show a positive attitude towards technology, particularly in the context of feminism.</p>
            <p>In &quot;The Cyborg Manifesto&quot;, Haraway starts with the introduction to cyborg. Different from chimeras of humans and machines commonly appearing in sci-fi movies, her definition of cyborg is a hybrid that blurs three boundaries between human and animals, organism and machine, and physical and non-physical. She sees deepened dualisms in the age of technology and science culture, which she challenges throughout the rest of the manifesto. Unlike any other historical groups, women make up about half of the world&apos;s population and are among all races and classes. Therefore, unlike any other historical groups, it is particularly hard for feminism manifesti to define &quot;who we are&quot;, to define an &quot;enemy&quot;, and to establish a program like other manifesti. Socialist Feminism and Radical Feminism, as discussed by Haraway, are being vague on the crisis of infinite internal division in feminism. I particularly disagree with MacKinnon&apos;s theory mentioned in the text, which proposes the desire from men as the origin of &quot;woman&quot;. I once thought that uniting the feminist power was nearly impossible, but Haraway&apos;s words changed my perspective. Haraway summarizes the new society situation as &quot;The Homework Economy&quot;, whose consequences include loss/reduction of male wages, the character of women&apos;s jobs, breakdown of the welfare systems, intensified poverty, and so on. Regardless of race and class, people are more or less facing these same problems aforementioned, thus uniting to solve these problems becomes necessary. Haraway thinks that this is the opportunity to develop feminism further, in a way against totalization, dualism, and any other absolute boundaries. Noting that &quot;The Cyborg Manifesto&quot; is the earliest publication in The Cyberfeminism Index, I speculate that it sets the stage for many subsequent articles and manifesti about cyberfeminism.</p>
            <p>&quot;The Xenofeminist Manifesto&quot; reads like a typical manifesto compared to &quot;The Cyborg Manifesto&quot; because of its convincing tone and content framed as bullet points. The bullet points use the hexadecimal system, which is unique and aligns with the theme of feminism in the digital age. I agree with some of the points, such as &quot;Nothing should be accepted as fixed, permanent, or ‘given&apos;—neither material conditions nor social forms&quot;, and that feminists should learn and redeploy technology &quot;in the common ends&quot;. As for the idea of Gender abolitionism and Race abolitionism, I think they are ambitious. However, we should pay extra attention to them because they may lead to ignorance of the complex reality of different genders and races.</p>
            <p>&quot;A Hacker Manifesto&quot; doesn&apos;t directly mention feminism, but it holds the same positive attitude toward technology as the other two manifesti. Wark first defines hackers as people who hack any code to create new things. Then, she points out that information is a form of property in the digital age, just like land and capital, and the vectoralists are people who possess and monopolize information as a resource, just like landlords and capitalists. While being another instance of dualism, I think this hacker-vectoralist model keeps pace with the times well and can potentially help feminists understand their advantages and mission in the digital age.</p>
            <p>I first learned about The Cyberfeminism Index last semester and browsed some articles in the list. This time, I see it as more than just an index, but an example of technology deployment by feminists. From the index, I see more and more discussions on and attention to cyberfeminism in recent years, which is inspiring.</p>
          </div>
        </div>
  );
}

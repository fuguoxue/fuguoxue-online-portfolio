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
            <p>This week&apos;s readings are The Question Concerning Technology by Martin Heidegger (published in 1977), Heidegger on Gaining a Free Relation to Technology by Hubert Dreyfus (published in 1995), and a video (posted in 2019). Heidegger brings out two important questions: what technology is, and what modern technology is. He starts from the instrumental definition of technology, that technology is “a means to an end”. However, he states that this definition doesn&apos;t show the essence of technology, and goes on to introduce the four-fold causality: the materialis (materials), the formulis (form), the finalis (the end, the goal to achieve), and the efficiens (the identity that works to make the effect come true). The four-causes concept not only works for a chalice, the example used by Heidegger, but is also applicable to modern technology like social media, as discussed in the video. After explaining the four-fold causality, Heidegger concludes that technology is a mode of revealing.</p>
            <p>Having answered what technology is, Heidegger goes on to ask what modern technology is, as the end of modern technology has changed from merely unlocking the truth to achieving optimal results. According to Dreyfus&apos;s article, Heidegger separates the problems caused by technology development and its destructive effects on humans while solving problems. Surely technological development is causing problems like pollution and forest degradation, but what Heidegger worries about is modern technology trapping humans in the ordering enframed by apparatus and numbers. I agree with Heidegger on this point, as it is a trend nowadays to quantify everything followed by evaluations based on apparatus; while humans are the ones to develop and use technology to achieve certain goals (e.g., humans invented the Internet to connect with humans around the world), the effects are way more than humans&apos; prediction and have caused more unexpected side effects (e.g., cybersecurity issues related to social media platforms).</p>
            <p>Heidegger&apos;s worries remind me of my feelings toward the Rabbit R1 video in last week&apos;s class. When watching the video, I kept thinking about 1) why we may need this product and 2) what problems it might cause. The Rabbit R1 video indeed shows how it will work, and I mentioned in class that it might reduce the cost of getting information. However, I am not yet convinced of its necessity, as it seems like merely a remote voice controller for mobile phones and/or computers. If I need to carry the Rabbit R1 together with my computer and phone every day to access its functions, I will just not carry the Rabbit R1 to reduce my bag weight. Additionally, I am concerned about potential issues with this product. First, the correctness of information may not be guaranteed. It can be compared to ChatGPT, which can produce plausible content without being noticed. Second, it may cause more complex cybersecurity problems. If I trust the Rabbit R1, I may put my personal information stored in my mobile phone at stake.</p>
            <p>In Dreyfus&apos;s article, he makes it clear that what Heidegger called a “new god” is a new paradigm consisting of marginal practices. To build that new paradigm, I think humans need to pause and think about the goal of using modern technology. Or at least, humans need to think about what we want modern technology to optimize, and whether the criteria of optimization followed by modern technology aligns with our goals. We can see that human society has been exploring a new paradigm for the interaction between humans and social media. Take the previous example of the Internet: on the one hand, it is a common practice now for the Internet industry to hire cyber security experts to protect user information; on the other, users come to realize the potential security issues by using the Internet industry product (e.g., social media platforms), and learn how to keep themselves safe online (e.g., never share personal information with online strangers). In such explorations, I believe human society will find the “new god” in the era of modern technology.</p>
            <p>At the end of Dreyfus&apos;s article, he mainly discusses whether we need one “new god” or several “new gods”. I think we need more than one new paradigm, as different cultures accept and use modern technology in different ways. This is also why localization is a concept in design that cannot be ignored.</p>
          </div>
        </div>
  );
}

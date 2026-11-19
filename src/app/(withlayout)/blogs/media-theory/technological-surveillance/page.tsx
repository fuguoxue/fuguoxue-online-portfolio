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
            <p>This week&apos;s readings are about technological surveillance: &quot;Panopticism&quot; (1977) by Michel Foucault, &quot;Necropolitics&quot; (2003) by Achille Mbembe, an interview with Shoshana Zuboff named &quot;High tech is watching you&quot; (2019), and Rayne Fisher-Quann&apos;s blogpost &quot;west elm caleb and the feminist panopticon&quot; (2022).</p>
            <p>The topic of surveillance is not new, but how technological advancement improves and enhances the surveillance mechanism is worth discussing in our society. In Panopticism, Foucault starts with &quot;Panopticon&quot;, a model of prison conceived by Jeremy Bentham, and argues that this model can be applied in many other scenarios in society, where surveillance over a large group is needed. Take schools as an example: if each student is assigned a cell in the Panopticon for an exam, theoretically they will govern themselves as if someone is watching them from the central tower, while in an extreme case, there might be no one in the tower at all. This model reminds me of an interesting phenomenon in social media platforms: young people tend to use more colloquial expressions, and the elderly tend to use more formal language. When I chat with my classmates, it feels like casual chatting; when I chat with my grandmother, however, it feels like reading a hand-written letter or an announcement. It sounds humorous at first that she thinks her words are publicly visible once sent; however, on the other hand, how can I be sure that my messages are private? In fact, I am quite aware that all my online activities are stored at least temporarily and analyzed. The cells in the Panopticon are neither public nor private, where our information is stored with the help of advanced information technology including Artificial Intelligence. We don&apos;t know who will see our information and use it for what purpose (though generally speaking it would usually be tech companies or governments using our information for monetization or governance purposes); all we can do is be aware that our online traces are not private and mind our online behaviors. Maybe my grandmother is not as familiar with technology as I am, but as a &quot;digital immigrant,&quot; she is more sensitive to surveillance.</p>
            <p>Aside from the Panopticon, the Necropolitics concept brought out by Achille Mbembe is another set of tools for technological surveillance. Mbembe refers to many political tools including biopolitics by Foucault, Hannah Arendt&apos;s analysis of totalitarianism, the state of exception by Giorgio Agamben, and so on, and discusses the capacity of deciding who to live and who to die. Technology has made these tools more powerful, so we need to be extra cautious about what kind of technological surveillance is exerted on us. For example, what will happen if in the future Artificial Intelligence is assigned as the subject to exert the power of turning people into bare life? We&apos;ve already seen similar cases in history like IBM being accused of assisting Nazis.</p>
            <p>The two online articles present two scenarios of technological surveillance: &quot;economies of action&quot; established by surveillance capitalists, and the Panopticon model applied to social media. Zuboff in the interview article argues that tech companies are interested in exploiting users&apos; information for not only money but control over users&apos; actions, which results in subtle deprivation of users&apos; autonomy. She lists three solutions to the democracy problem caused by high-tech surveillance: awareness in public, law enforcement over technological surveillance, and competitive solutions. We can see some efforts are already underway, such as several technological manifesti we read two weeks ago, and the development of decentralized and open-source social media platforms like Mastodon.  For the blog post by Rayne, I agree with her that we need to realize the limited power of feminism in the online world: more often feminism is used as an eye-catching tool for stimulating furious online discussions while women in the physical world still suffer from the same problems. It is reasonable to doubt that tech companies are intentionally directing the public&apos;s attention, emotions, and attacks to specific cases and individuals to ensure the current patriarchal system is intact. The same logic applies to other social problems like racism and school violence. It may be thrilling to be the person in the central tower of the virtual Panopticon to spy on other people&apos;s lives, scrutinize others&apos; actions to find their mistakes or evil deeds, and take the moral high ground. However, while we are spying on others, others are also spying on us.</p>
          </div>
        </div>
  );
}

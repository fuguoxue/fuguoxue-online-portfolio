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
            <p>This week&apos;s reading introduces W.E.B. Du Bois&apos;s data visualization work, which was exhibited at Exposition Universelle in Paris in 1900. After reading, I learned about the unique values of the infographic series collected in the book in terms of aesthetics, sociology, and anthropology, as well as the great difficulties and extra efforts made behind the work.</p>
            <p>One point emphasized in the book is new to me. On PDF page 19, the book said: &quot;This focus on modernist design, as well as the diasporic sensibilities of the images, further points to Du Bois&apos;s interest in representing the Black South as an integral part of modernity…who shared more in common with the broader, future-oriented &apos;thinking world&apos; than with an insular, backward-looking United States…&quot;. Before, I was just amazed at the modern look of the infographics created back then. However, this sentence makes me realize the deeper considerations behind modern aesthetics. I saw the implementation of this idea on PDF page 71, Plate 10: Du Bois in this graph made a comparison between the conjugal conditions of Germans and black Americans. This comparison achieves two goals: 1. it built up the connection between the exhibition theme and the audience (i.e. the black Americans and the mainly European visitors); 2. to some extent, it reversed stereotypes about black Americans, leaving people with an impression that black Americans could be modern and international.</p>
            <p>Overall, I love the modern and clean feeling of the plates, and I am impressed by their simplicity and thought-provoking nature. Some designs are commonly seen in the plates, such as the likely improvised but elegant &quot;%&quot; sign, and a snake-shaped bar in a bar chart to express that one data is much larger than other data in the same graph. I also learned about his usage of gouache, which is a popular kind of watercolor later in design schools across the world.</p>
            <p>Among the plates, my favorite one is Plate 11 on PDF page 73. It is not uncommon to do urban and rural population comparisons, but the way Du Bois shows the data is creative and powerful. Instead of separating black Americans, Du Bois connected the four sections into a continuous spectrum. I think it must have been important for black Americans at that time to unite rather than divide themselves, and Plate 11 contributed to that unity in its visual but powerful way.</p>
            <p>To conclude, Du Bois&apos;s work is elegant and thought-provoking. With computer and coding skills, we can do data visualization much easier than then. However, the ideas and aesthetics introduced by Du Bois are still inspiring and worth learning from even today.</p>
          </div>
        </div>
  );
}

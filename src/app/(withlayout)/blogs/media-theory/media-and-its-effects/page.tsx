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
            <p>This week&apos;s readings are The Library of Babel (1941) by Jorge Luis Borges, The Work of Art in the Age of Mechanical Reproduction (1935) by Walter Benjamin, Gramophone, Film, Typewriter (1987) by Friedrich Kittler, and Of MUD, MEDIA, and the METROPOLIS (2016) by Shannon Mattern. These four readings, while mentioning different kinds of media throughout human history, all pay attention to the evolution of media and their effects on human society.</p>
            <p>In Benjamin&apos;s article, he mainly discusses the effects of emerging media on the works of art. Before the age of mechanization, every artwork was unique and had more cult value than exhibition value; however, when reproduction techniques like photography and cinematography of artworks emerged and matured in the 20th century, lots of changes followed: the definition and values of art, the blurring boundary between art and technology (e.g. photography is art and technique for recording, as discussed by Kittler as well), and the way to participate in art (increasing population of viewers and shorter distance between art and viewers). I agree with Benjamin that “reception in a state of distraction” has been prevailing since then, which I would address as “passive appreciation”. When distracted by immense information, it would be too demanding for people to select the useful ones, let alone independent thinking. This is obvious in contemporary art and entertainment. For example, we see an increasing number of immersive environments installed in museums and historical sites. They usually flood visitors&apos; minds with audio and visual information simultaneously, which can certainly help people understand the exhibition but reduce the space for self-exploration, imagination, and interpretation. TikTok is another example: people consume endless video content by simply swiping on a cold hard interface without active thinking.</p>
            <p>Kittler&apos;s article, published after the invention of the first computer, focuses on gramophone, film, and typewriter as recording tools. The way of documentation started from oral history; after the emergence of language, humans started to write on materials available. Mattern&apos;s article introduces the evolution of writing material: from stone cliffs, and mud bricks, to paper, concrete, etc. Upon the invention of the gramophone and film, plain text written on any material seems less precise and detailed. People used to document the facts and truth by composing manuscripts and books, but now audio or video is more convincing than thousands of words. Since the mid-20th century, human society has been influenced again by typewriters, which store information by following a standardized set of rules including the alphabet used and the width of a space. This is similar to digital technology later, which samples reality and stores it discretely. It is hard to say which is better, analog media storing exact reality but prone to erosion, or digital/discrete media storing sampled, compressed reality but appears immune to time. It is also becoming harder to distinguish machines from humans. Turing Game was still a comfort when symbolic computation was brought out, but now we see humans asking similar questions again in the face of the growing capacity of AI in writing, coding, and even painting and video editing. Perhaps any thought process can be modeled by the state n of a universal machine proposed by Turing, thereby implying that humans are essentially just machines with large values of state n that can be codified and deciphered.</p>
            <p>Finally, The Library of Babel is a highly allegorical fiction. Written as early as 1941, this fiction still can be related to contemporary trends and theories. The fictional world illustrated is a grand library consisting of countless hexagon cells, which is like a honeycomb in my imagination. Humans living in this world, busy like bees, try to decode the world&apos;s ultimate truth (Book-Man) by examining all the books available. The world has a set of axioms, just like Newton&apos;s laws of motion in our world. In search for the truth, people seek help from religions and logic (or science, as in our real world), and many ideologies emerge. Some thought-provoking details are that most humans in fiction believe unconditionally that clues to the truth lie in books, and the books there also apply a discrete method to store information and babel. When learning about The Library of Babel online, I found a website inspired by this fiction with an interesting interface design, which seems to be worth further exploration:</p>
            <Link href="https://libraryofbabel.info/" className="text-tag hover:underline" target="_blank">
              https://libraryofbabel.info/
            </Link>
          </div>
        </div>
  );
}

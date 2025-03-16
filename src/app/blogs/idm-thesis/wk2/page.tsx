import TitleLine from "@/components/TitleLine";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import blogData from "@/data/blogs.json";
import blogSeries from "@/data/blog-series.json";
import path from "path";
import { fileURLToPath } from "url";
import ImageWithCaption from "@/components/ImageWithCaption";
// import ExpandableImage from "@/components/ExpandableImage";
// import Image from "next/image";
// import ImageWithCaption from "@/components/ImageWithCaption";
// import Slideshow from "@/components/Slideshow";

// Define type
type BlogPostType = {
  title: string;
  id: string;
  date: string;
  tag: string;
  description: string;
  featureImgURL: string;
};

// Resolve file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Extract "idm-thesis" and "wk1" from the file path
const segments = __dirname.split(path.sep);
const tag = segments[segments.length - 2]; // "idm-thesis"
const id = segments[segments.length - 1]; // "wk1"

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
    <div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen m-4">
      <div className="col-span-1 lg:col-span-5">
        <TitleLine />
      </div>
      <div className="col-span-1 sm:hidden md:hidden lg:block"></div>
      <main className="col-span-1 lg:col-span-3 p-4 mb-8">
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
          <Link
            href="https://www.figma.com/design/WBZcKaVT9zqHX2ghKrdrI9/Thesis-Week-2---Preliminary-Prototype?node-id=0-1&t=4W8zOHRYVBI2hy0Z-1"
            className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
            target="_blank"
          >
            Link to preliminary prototype in Figma
          </Link>
          <br />
          <Link
            href="https://www.figma.com/design/WBZcKaVT9zqHX2ghKrdrI9/Thesis-Week-2---Preliminary-Prototype?node-id=42-193&t=5TUeBcSi2L3UuyHv-1"
            className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
            target="_blank"
          >
            Link to mood board in Figma
          </Link>

          {/* blog content */}
          {/* about preliminary prototype */}
          <div>
            <h3>References</h3>
            <p>
              Aside from moodboard examples, I also found other resources
              introducing web design history:{" "}
            </p>
            <ul className="list-disc ml-4">
              <li>
                <Link
                  href="https://www.webdesignmuseum.org/web-design-history"
                  className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
                  target="_blank"
                >
                  Web Design History - Web Design Museum
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.dotdesign.io/post/the-future-of-website-design-embracing-ai-technology-to-stay-ahead-of-the-game"
                  className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
                  target="_blank"
                >
                  The Future of Website Design: Embracing AI Technology to Stay
                  Ahead of the Game
                </Link>
              </li>
              <li>
                <Link
                  href="https://blog.archive.org/2014/11/05/redesign/"
                  className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
                  target="_blank"
                >
                  Redesigning Archive.org | Internet Archive Blogs
                </Link>
              </li>
            </ul>
          </div>
          {/* thoughts about prototype*/}
          <div>
            <h3>Thoughts about Prototype</h3>
            <ol className="list-decimal ml-4">
              <li>
                If change UI style over time, is it possible and reasonable to
                keep the layout consistent throughout the game in order to save
                time on development?{" "}
              </li>
              <li>
                How to fit all the plots into one expandable game mode,
                especially for plots in AI era?
              </li>
              <li>How will web design evolve in the post-AI age?</li>
              <li>
                I consulted ChatGPT on my UI design in Figma:
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 gap-8">
                  <div className="col-span-1 drop-shadow-md">
                    <ImageWithCaption
                      src="/imgs/blogs/idm-thesis/wk2/prototype-1.jpg"
                      alt="My UI design in preliminary prototype."
                      caption="My UI design in preliminary prototype."
                      widthPercentage={100}
                    />
                  </div>
                  <div className="col-span-1 drop-shadow-md">
                    <ImageWithCaption
                      src="/imgs/blogs/idm-thesis/wk2/AI_1.png"
                      alt="My UI design in preliminary prototype, image 2."
                      caption="My UI design in preliminary prototype, image 2."
                      widthPercentage={100}
                    />
                  </div>
                </div>
                Below is ChatGPT&apos;s refined UI:
                <div className="drop-shadow-md">
                  <ImageWithCaption
                    src="/imgs/blogs/idm-thesis/wk2/chatgpt-UI-suggestion.jpg"
                    alt="ChatGPT's refined version of UI design."
                    caption="ChatGPT's refined version of UI design."
                    widthPercentage={100}
                  />
                </div>
                <p>Below is ChatGPT&apos;s reasons for why its solution can be better: </p>
                <ul className="list-disc ml-4">
                  <li><b>Clearer Information Hierarchy: </b>ChatGPT reduces cognitive load by separating Left panel (Personal Progress), Center panel (Main action area), and Right panel (News & Events log). It also elimiates redundant text.<br/>ChatGPT&apos;s layout somehow does look clearer to me, and the redundancy in text could be a problem in my game UI. However, I want to keep the center visualization in the game UI.</li>
                  <li><b>Improved Player Interaction Flow: </b>ChatGPT version gives more visual feedback, like the progress bar below the &quot;Write Code&quot; button.<br/>I agree to add visual feedback to visually reinforce the mouse-clicking impact. This can also be done in other ways in development.</li>
                  <li><b>Modular Expansion & Future-Proofing: </b>my UI is harder to expand if I want to add more game mechanics later, but this UI has a more flexible Modular Decision System and Scalable Structure for new game layers, keeping UI more adaptable.<br/>I like the Upgrade & Decision function it suggests because it can be a great module for the game&apos;s storytelling. I agree that modular design makes game development easier, and I try to implement it in my UI design, but it seems that my design is not modular enough to facilitate game expansion at the moment.</li>
                  <li><b>UI aesthetics: </b>ChatGPT also suggests a modern UI aesthetics.<br/>However, after consulting Pip, I think it is a good idea to make UI aesthetics evolve based on the &quot;era&quot; factor in my game. In my moodboard, I include different sets of images for different eras in game.</li>
                </ul>
              </li>
            </ol>
            <h3>Next Steps</h3>
            <ul className="list-decimal ml-4">
              <li>Modularize game functions for easier game expansion.</li>
              <li>Determine the game layout.</li>
              <li>Start coding the first game stage.</li>
            </ul>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <BackToTop />
        </div>
      </main>
    </div>
  );
}

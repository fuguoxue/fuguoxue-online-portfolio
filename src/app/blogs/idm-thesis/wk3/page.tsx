import TitleLine from "@/components/TitleLine";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import blogData from "@/data/blogs.json";
import blogTagToSeriesNameJSON from "@/data/blog-series.json";
import path from "path";
import { fileURLToPath } from "url";
// import ExpandableImage from "@/components/ExpandableImage";
// import Image from "next/image";
import ImageWithCaption from "@/components/ImageWithCaption";

// Define types
type BlogTagToSeriesNameType = { [key: string]: string };
type BlogPostType = {
  title: string;
  id: string;
  date: string;
  tag: string;
  description: string;
  featureImgURL: string;
};

// Parse blogTagToSeriesName from JSON
const blogTagToSeriesName: BlogTagToSeriesNameType = blogTagToSeriesNameJSON[0];

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
const selectedBlogSeries = blogTagToSeriesName[selectedBlog.tag];

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
            href="https://open-source-galaxy-luqpjy84t-fuguoxue-nyus-projects.vercel.app/"
            className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
            target="_blank"
          >
            Try my game online (work in progress)
          </Link>
          <br />
          <Link
            href="https://docs.google.com/spreadsheets/d/14towVTUPO1GAnJIfVgZMOHK6WMnFwRABtVCXpyQgr78/edit?usp=sharing"
            className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
            target="_blank"
          >
            Link to numerical planning Google Sheets
          </Link>
          <ImageWithCaption src="/imgs/blogs/idm-thesis/wk3/wk3-featureImg.gif" alt="GIF image of the game in web browser." caption="GIF image of the game in web browser."/>

          {/* blog content */}
          {/* UI update */}
          <section>
            <h3>UI Update</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 gap-8">
              <div className="col-span-1 drop-shadow-md">
                <ImageWithCaption
                  src="/imgs/blogs/idm-thesis/wk2/AI_1.png"
                  alt="Prototype image of the previous interface."
                  caption="Prototype image of the previous interface."
                  widthPercentage={100}
                />
              </div>
              <div className="col-span-1 drop-shadow-md">
                <ImageWithCaption
                  src="/imgs/blogs/idm-thesis/wk3/UI-current.png"
                  alt="Screenshot of the current interface."
                  caption="The current interface moves all the data and text to the left and leaves plenty of space to the right for data visualization."
                  widthPercentage={100}
                />
              </div>
            </div>
            <p>I updated the UI based on feedback gathered from friends and classmates. When showing my preliminary prototype, people thought in general that 1) the previous UI is text-heavy, and 2) it is hard to find the important information from the text. To avoid the confusion caused by text, I decided to move all the text together, and designed the &quot;News&quot; section as a scrolling panel and &quot;Decision&quot; section appear only when there is a decision to make. </p>
            <p>I reserved a large space for p5.js canvas because I realized from professors&apos; feedback that data visualization has great potential in this game -- this data-heavy game can also generate algorithmic art. Therefore, I want the canvas to occupy most of the interface to create a greater visual impact. For now, there is only a button at the canvas center, which intends to attract player&apos;s attention and to invite button clicking. </p>
          </section>
          {/* Numerical planning */}
          <section>
            <h3>Numerical Planning</h3>
            <p>In order to make the game process reasonable and drive players to continue playing, numerical planning is necessary and critical. In the game industry, numerical planning is a job that requires professional knowledge and experience.</p>
            <p>Compared with other game, numerical planning is the core of an incremental game. Therefore, I learned the basics of numerical planning and used the knowledge to design numerical increments. Below are some useful knowledge for my game.</p>
            <ul className="list-disc ml-4">
                <li>In general, there are three kinds of numerical growth: linear, exponential, and logarithmic. For example, tool productivity scales linearly with the number of contributors in my game. Personal influence scales logarithmically with the information transmission speed, growing quickly at first but then slowing down.</li>
                <li>The progression logic can also be categorized as time-based, state-based, and player-action-driven. For example, the progression of the &quot;era&quot; in my game is time-based, the information transmission speed is state-based (i.e., based on the current &quot;era&quot;), and the initial incrementing of lines of code is player-action-driven (i.e., clicking on the button to accumulate lines of code).</li>
            </ul>
          </section>
          {/* Next steps */}
          <section>
            <h3>Next Steps</h3>
            <ul className="list-disc ml-4">
                <li>After finishing all the logic, fine tune the logic so that the numerical increments are reasonable.</li>
                <li>Research visual reference for the visualization of the game data.</li>
                <li>Implement visualization in p5.js.</li>
                <li>Try to stylize UI based on &quot;era&quot; variable.</li>
            </ul>
          </section>
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <BackToTop />
        </div>
      </main>
    </div>
  );
}

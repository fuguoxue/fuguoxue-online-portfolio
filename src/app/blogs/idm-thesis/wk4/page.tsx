import TitleLine from "@/components/TitleLine";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import blogData from "@/data/blogs.json";
import blogTagToSeriesNameJSON from "@/data/blog-series.json";
import path from "path";
import { fileURLToPath } from "url";
// import ExpandableImage from "@/components/ExpandableImage";
// import Image from "next/image";
// import ImageWithCaption from "@/components/ImageWithCaption";
import Slideshow from "@/components/Slideshow";

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

const UIDesignImgs = [
  {
    image: "/imgs/blogs/idm-thesis/wk4/UI-PreInternet.png",
    description:
      "UI design to imitate pre-Internet retrospective CRT interface.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk4/UI-Web1.png",
    description:
      "UI design in Web 1.0 aesthetics. I chose Windows UI as reference.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk4/wk4-featureImg.gif",
    description:
      "UI design in Web 2.0 aesthetics. Around early 2000s, webpages were excited to try out colorful fonts, hyperlinks, tile arrangement of images for background, and low-res GIFs and JPGs for decoration.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk4/UI-Web2.png",
    description:
      "UI design in Web 2.0 aesthetics, static, with button style.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk4/UI-Web3-light.png",
    description:
      "UI design in Web 3.0 aesthetics, light mode. In the Web 3.0 era, web design starts to pay attention to online accessibility, which includes san-serif fonts with high readability, the switching between light mode and dark mode, and so on.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk4/UI-Web3-dark.png",
    description:
      "UI design in Web 3.0 aesthetics, dark mode. In the Web 3.0 era, web design starts to pay attention to online accessibility, which includes san-serif fonts with high readability, the switching between light mode and dark mode, and so on.",
  },
];

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
          <section>
            <h2>{selectedBlog?.title}</h2>
            <p className="text-date">{selectedBlog?.date}</p>
            <p className="mb-4 text-secondary">
              <b>Blog series: </b>
              <Link
                key={tag}
                href={`/blogs/${tag}`}
                className="hover:underline"
              >
                {selectedBlogSeries}
              </Link>
            </p>
            <p>{selectedBlog?.description}</p>
            <Link
              href="https://open-source-galaxy.vercel.app/"
              className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
              target="_blank"
            >
              Try my game online (work in progress)
            </Link>
          </section>

          {/* blog content */}
          {/* Readings */}
          <section>
            <h3>Readings</h3>
            <p>
              This week, I realized a major difference between my game and
              Cookie Clicker (and Universal Paperclips): the two games tell the
              story of capitalism, in which the success of, say a cookie
              factory, can be reduced to one number: the amount of cookies. I
              tried to &quot;reduce&quot; my game data to one number but failed,
              and now I know why: this is because the success of a community is
              more diverse than that of a factory. A community can have many
              members but on the way of dying, and a small community can be
              vital and healthy with very limited member groups.
            </p>
            <p>
              Therefore, I went to read two books:{" "}
              <i>The Cathedral and The Bazaar</i> by Eric Steven Raymond. This
              book not only supplements my knowledge of computer history, but
              also verifies a lot of my understanding of the connection between
              the open source community and the Internet. Many of the contents
              are very helpful to my programming and narrative design. I&apos;ve
              read until Chapter 3, and below are some reading notes worth
              sharing from Chapter 3, which is about an Eric&apos;s experiment
              with the Bazaar mode of development, learning from the sucessful
              precedent of Linux.
            </p>
            <blockquote className="quote">
              ...it&apos;s almost always easier to start from a good partial
              solution than from nothing at all. (P30)
            </blockquote>
            <p>
              This reminds me of using AI to write code nowadays. AI helps
              quickly start a coding project by providing the scaffold to
              develop, saving a lot of time.
            </p>
            <blockquote className="quote">
              Users are wonderful things to have, and not just because they
              demonstrate that you&apos;re serving a need, that you&apos;ve done something
              right. Properly cultivated, they can become co-developers. (P33)
            </blockquote>
            <p>
              This quote validates my findings from open-source community: the
              blurry line between users and contributors. This also reminds me
              about my logic design: maybe instead of separating users from
              contributors all the time, users can be all (or partly) converted
              to contributors after forming an organization in my game.
            </p>
            <blockquote className="quote">
              &quot;Given enough eyeballs, all bugs are shallow.&quot; I dub
              this: &quot;Linus&apos;s Law.&quot; (P36) <br />
              Sociologists years ago discovered that the averaged opinion of a
              mass of equally expert (or equally ignorant) observers is quite a
              bit more reliable a predictor than the opinion of a single
              randomly-chosen one of the observers. They called this the ‘Delphi
              effect&apos;. (P37)
            </blockquote>
            <p>
              This is one of the most important reason for the success of the
              Bazaar mode. It is about &quot;maximize the number of
              personhours.&quot;(P36)
            </p>
            <blockquote className="quote">
              The total cost of maintaining a widely used program is typically{" "}
              <b>40 percent</b> or more of the cost of developing it.
              Surprisingly this cost is strongly affected by the number of
              users. More users find more bugs. (P39)
            </blockquote>
            <blockquote className="quote">
              Another characteristic of the open-source method that conserves
              developer time is the communication structure of typical
              open-source projects. Above I used the term &quot;core
              developer&quot;; this reflects a distinction between the project
              core (typically quite small; a single core developer is common,
              and one to three is typical) and the project halo of beta-testers
              and available contributors (which often numbers in the
              hundreds). (P41)
            </blockquote>
            <p>
              This quote is very helpful for me to learn the structure of a
              typical open-source community: one-to-one communications among
              core developers, and paralelle communications among contributors
              (i.e., no direct communications between contributors). This is
              also inspiring for data visualization.
            </p>
            <blockquote className="quote">Brook&apos;s Law: “Adding more programmers to a late project makes it later.”<br />
            Brook&apos;s Law predicts that the complexity and communication costs of a project rise with the square of the number of developers, while work done only rises linearly.(P41)</blockquote>
            <p>Still talking about the efficiency, Brook&apos;s Law suggests interesting dynamic between number of programmers and efficiency. It is possible to implement this mechanism in game.</p>
            <blockquote className="quote">The Brook&apos;s Law analysis (and the resulting fear of large numbers in development groups) rests on a hidden assummption: that the communications structure of the project is necessarily a complete graph, that everybody talks to everybody else. But on open-source projects, the halo developers work on what are in effect separable parallel subtasks and interact with each other very little; code changes and bug reports stream through the core group, and only within that small core group do we pay the full Brooksian overhead. (P41)</blockquote>
            <p>Explanation of why the Brook&apos;s Law is not fully compatible with a typical open-source group.</p>
            <blockquote className="quote">
              &quot;wake me up when it&apos;s done&quot; antideadline policy (P39)
            </blockquote>
            <p>Surprisingly, deadlines can be harmful to the quality of deliverables.</p>
            <br />
            <p>With these knowledge, I am more confident in narrative and logic design. I will continue reading the book and apply what I learn to my storytelling and programming.</p>
          </section>
          {/* UI Updates */}
          <section>
            <h3>UI Updates</h3>
            <p>
              To make my game more immersive, I re-designed my game UI in
              several aesthetics of different eras. I referred to the
              introduction to UI history in{" "}
              <i>
                <a href="http://www.catb.org/esr/writings/taouu/html/ch02.html" className="text-tag hover:underline">
                  The Art of Unix Usability (Chapter 2. History: A Brief History
                  of User Interfaces)
                </a>
              </i>{" "}
              by Eric Steven Raymond and Rob W. Landley, as well as other online
              articles. Below are my designs in Figma.
            </p>
            <Slideshow slides={UIDesignImgs} autoplay={false} />
            <p>
              At this point, my game UI can switch styles as the era changes,
              but I need some more time to apply my design to the actual game
              UI.
            </p>
          </section>
          {/* Other Resources */}
          <section>
            <h3>Other Resources</h3>
            <ul className="list-disc ml-4">
              <li><a href="https://gifcities.org/?q=starry+background" className="text-tag hover:underline">Images for tile background, scraped from the Internet Archive</a></li>
              <li><a href="https://patterncooler.com/" className="text-tag hover:underline">More images for tile background</a></li>
              <li><a href="https://www.trevnetmedia.com/blog/3595/iconic-fonts-of-the-90s-and-2000s" className="text-tag hover:underline">Article about Web 1.0 Fonts</a></li>
              <li><a href="https://www.getsomethinggreat.com/post/the-most-popular-font-for-every-decade-of-the-past-100-years" className="text-tag hover:underline">The Most Popular Font For Every Decade of the Past 100 Years</a></li>
            </ul>
          </section>
          {/* Next steps */}
          <section>
            <h3>Next Steps</h3>
            <ul className="list-disc ml-4">
              <li>Apply UI design to the game.</li>
              <li>Finish designing the narrative; create news lines and decisions for display in game to tell the game story.</li>
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

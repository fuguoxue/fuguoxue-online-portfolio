import TitleLine from "@/components/TitleLine";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import blogData from "@/data/blogs.json";
import blogTagToSeriesNameJSON from "@/data/blog-series.json";
import path from "path";
import { fileURLToPath } from "url";
import ImageWithCaption from "@/components/ImageWithCaption";
import Slideshow from "@/components/Slideshow";
// import ExpandableImage from "@/components/ExpandableImage";
// import Image from "next/image";
// import ImageWithCaption from "@/components/ImageWithCaption";
// import Slideshow from "@/components/Slideshow";

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

const revisedStoryboard = [
  {
    image: "/imgs/blogs/idm-thesis/wk5/Thesis Storyboard - Frame 9.jpg",
    description:
      "Act 1: The Birth of a Hacker (1970s - 1980s). Keywords: network, hacking, UNIX, Free Software Movement.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk5/Thesis Storyboard - Frame 10.jpg",
    description:
      "Act 2: The Rise of Open Source (1990s-2000s). Keywords: IP Wars, browsers, World Wide Web, Internet, open-source.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk5/Thesis Storyboard - Frame 11.jpg",
    description:
      "Act 3: The Age of Centralization (2010s-2020s). Keywords: monopoly, sustainability, funding, governance.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk5/Thesis Storyboard - Frame 12.jpg",
    description:
      "Act 4: The AI Era and Beyond (2020 - Present/Future). Keywords: AI, GenAI, IP Wars, digital ethics.",
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
              href="https://miro.com/app/board/uXjVIXV_i8U=/?share_link_id=831427984493"
              className="external-link-for-blog col-span-1 lg:col-span-3"
              target="_blank"
            >
              Link to updated storyboard
            </Link>
            <br />
            <Link
              href="https://www.figma.com/design/WBZcKaVT9zqHX2ghKrdrI9/Thesis-Week-2---Preliminary-Prototype?node-id=212-3&t=txHqGGbsUKqT7TW1-1"
              className="external-link-for-blog col-span-1 lg:col-span-3"
              target="_blank"
            >
              Link to updated UI moodboard and wireframe design
            </Link>
          </section>

          {/* blog content */}
          {/* Science Fair Demo Reflection */}
          <section>
            <h3>Science Fair Demo Reflection</h3>
            <p>
              This week during the Science Fair Demo, I received valuable
              feedback from professors and peers. Below are my reflections on my
              work so far.
            </p>
            <ul className="list-decimal ml-4">
              <li>
                The game content can be more substantial, containing important
                or interesting historical moments and events that push the
                Internet and open-source ecosystem forward. The gaming elements
                can conform with historical styles as well, like grey UI for Web
                1.0 era and random pop-up windows for Web 2.0 era in game.
              </li>
              <li>
                The era progression doesn&apos;t have to be time-related -- it
                can also be event-driven. Also, instead of directly printing era
                name on the screen, my new storyline highlights trends and
                characteristics of each era in order to emphasize the
                progression.
              </li>
              <li>
                During the past two weeks, I realized that incremental game
                might not be the ideal way to showcase my idea. This is because
                the history of the Internet and open source is messy, and the
                success of an open-source project cannot be simplified to a
                single number. Therefore, to increase the information capacity
                of my game (and also attract users), I need to change my UI and
                game mechanism. I will further illustrate my ideas in the next
                section.
              </li>
            </ul>
          </section>

          {/* Revised Game Design */}
          <section>
            <h3>Revised Game Design</h3>
            <p>
              Since I see the limitations of incremental game form in my
              storytelling, I decided to pivot from a pure incremental game to a
              combination of incremental elements and a visual novel. Below is
              my storyboard (work in progress). Please visit my{" "}
              <Link
                href="https://miro.com/app/board/uXjVIXV_i8U=/?share_link_id=831427984493"
                className="external-link-for-blog col-span-1 lg:col-span-3"
                target="_blank"
              >
                Miro Board
              </Link>{" "}
              to zoom in and see my updated storyline in details.
            </p>
            <Slideshow slides={revisedStoryboard} autoplay={false} />
            <p>
              I still want to keep the logic of my previous incremental game but
              will also include more storytelling elements like retrospective
              UI, text and image content in news, notebook, calendar, and LAN
              communication panels.
            </p>
            <div className="drop-shadow-md">
              <ImageWithCaption
                src="/imgs/blogs/idm-thesis/wk5/wk5-wireframe.jpg"
                alt="Wireframe of new UI design for storytelling from 1990s to 2000s, resembling a desktop with 1990s-style windows opening."
                caption="Wireframe of new UI design for storytelling from 1990s to 2000s, resembling a desktop with 1990s-style windows opening for news reading, work dashboard display (where previous incremental game goes to), personal notebook, calendar (for moving back and forth in game timeline), and LAN communications among protagonist's colleagues and community members."
              />
            </div>
          </section>
          {/* Resources */}
          <section>
            <h3>Resources</h3>
            <p>
              I found some useful CSS library from GitHub for a retro-UI design:{" "}
            </p>
            <ul className="list-disc ml-4">
              <li>
                <Link
                  href="https://github.com/jdan/98.css"
                  className="external-link-for-blog col-span-1 lg:col-span-3"
                  target="_blank"
                >
                  98.css
                </Link>
              </li>
              <li>
                <Link
                  href="https://botoxparty.github.io/XP.css/"
                  className="external-link-for-blog col-span-1 lg:col-span-3"
                  target="_blank"
                >
                  XP.css
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/khang-nd/7.css"
                  className="external-link-for-blog col-span-1 lg:col-span-3"
                  target="_blank"
                >
                  7.css
                </Link>
              </li>
            </ul>
            <p>
              Here is an interesting reasearch presented at CERN 2019
              WorldWideWeb Rebuild:
            </p>

            <ul className="list-disc ml-4">
              <li>
                <Link
                  href="https://worldwideweb.cern.ch/code/"
                  className="external-link-for-blog col-span-1 lg:col-span-3"
                  target="_blank"
                >
                  Inside the Code — WorldWideWeb NeXT Application
                </Link>
              </li>
            </ul>
          </section>
          {/* Next steps */}
          <section>
            <h3>Next Steps</h3>
            <ul className="list-disc ml-4">
              <li>Refine storyboard: clarify protagonist&apos;s emotion arc, and think about what historical events and details to include.</li>
              <li>Build the Act 2 before Mid-term demo.</li>
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

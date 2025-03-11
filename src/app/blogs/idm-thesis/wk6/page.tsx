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

const uiImgs = [
  {
    image: "/imgs/blogs/idm-thesis/wk6/preInternet 1.jpg",
    description:
      "Pre-Internet age UI design, bootup screen imitating a CRT style screen. Users can only interact with the program by typing any of the available commands.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk6/preInternet 2.jpg",
    description:
      "Pre-Internet age UI design, frame 2. Access list of available commands via 'list' command.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk6/preInternet 3.jpg",
    description:
      "Pre-Internet age UI design, frame 3. Read news of the year by typing 'news' command.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk6/preInternet 4.jpg",
    description:
      "Pre-Internet age UI design, frame 4. In the calendar, player will be able to change the year to previous or next, moving back and forth in time.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk6/blue-screen-bootup.jpg",
    description: "1990s UI design, blue screen boot up.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk6/1990s-2000s.jpg",
    description:
      "1990s UI design, adopting the UI styles of early browsers and online services. Black, white, and grey are most commonly seen in these early browsers.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk6/1995.jpg",
    description:
      "UI design for 1995. Microsoft Bob was a short-lived program with a colorful pixelated UI that intended to help first-time computer users familiarize themselves with computer functions. While it was a commercial failure, I decided to include this interface in my game to show the vitality, messiness, and bravery of the 1990s' experiments with the Internet.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk6/1995 - hidden buttons.jpg",
    description:
      "UI design for 1995, with marks of hidden tabs. When player flips the calendar to 1995, the interface will turn into the Microsoft Bob version, with function tabs hidden in the colorful scene.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk6/2000s - 1.jpg",
    description:
      "UI design for the 2000s, frame 1. Stepping into the 2000s, more people have PCs at home, and more experiments are happening on the web. This UI adopts Windows XP style, as this is a classic and memorable OS design among people I interviewed. This UI will use Tahoma, the same typeface as Windows XP's.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk6/2000s - 2.jpg",
    description:
      "UI design for the 2000s, frame 2. Some characteristics of websites at that time are: 1) neon-color text accompanied with highlight, 2) images and other multimedia content became available on webpages together with text, and 3) tile layout of images as website background.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk6/2000s - 3.jpg",
    description:
      "UI design for the 2000s, frame 3. Player needs to find the calendar in the UI to move back and forth in time.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk6/2010s - 1.jpg",
    description:
      "UI design for the 2010s. In the 2010s, Internet culture quickly evolves. Memories of that time include memes, slang, bright colors, pixel art, low-quality images, and more. As for web design, many websites preferred text and images in grid layout with borders, which make a webpage look like a digital copy of newspaper. Also, Flash was applied almost everywhere on the Internet for interactive content creation display.",
  },
  {
    image: "/imgs/blogs/idm-thesis/wk6/2020s - 1.jpg",
    description:
      "UI design for the 2020s. Websites became minimal in style. We see everything centered, with less text, more images, and smooth interactions by clicking and scrolling. Cookies became prevalent. Online accessibility matters.",
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
              href="https://www.figma.com/design/WBZcKaVT9zqHX2ghKrdrI9/Thesis-Week-2---Preliminary-Prototype?node-id=212-3&t=FmALFOTkI4gnid4Y-1"
              className="external-link-for-blog col-span-1 lg:col-span-3"
              target="_blank"
            >
              Link to updated UI design
            </Link>
            <br />
            <Link
              href="https://open-source-galaxy.vercel.app/"
              className="external-link-for-blog col-span-1 lg:col-span-3"
              target="_blank"
            >
              Link to demo
            </Link>
          </section>

          {/* blog content */}
          {/* UI Updates */}
          <section>
            <h3>UI Updates</h3>
            <Slideshow slides={uiImgs} autoplay={false} />
          </section>

          {/* Game Updates */}
          <section>
            <h3>Game Updates</h3>
            <p>
              I added WinBox component to the 1990s interface. It is very
              flexible for showcasing the game content.Available functions in
              this interface: 1) open windows by clicking the buttons on top
              right corner, 2) read content in each window, including working on
              code in the dashboard window and browsing through calendar, and 3)
              after turning the calendar from 1990 to 1989, the interface will
              change to CTR mode.{" "}
            </p>
            <p>I also name my game as &quot;Bazaar.log&quot;. This name comes from the book title, <i>The Cathedral and The Bazaar</i>, in which &quot;Bazaar&quot; refers to open-source environment. The &quot;.log&quot; might remind the viewer of the type of file that records events in a computer. &quot;Bazaar.log&quot;nicely summarizes the theme of my game and its history-based story.</p>
            <Link
              href="https://open-source-galaxy.vercel.app/"
              className="external-link-for-blog col-span-1 lg:col-span-3"
              target="_blank"
            >
              Link to demo
            </Link>
          </section>

          {/* Readings */}
          <section>
            <h3>Readings</h3>
            <ul className="list-disc ml-4">
              <li>
                <Link
                  href="https://thenextweb.com/news/the-evolution-of-web-design-in-the-2010s"
                  className="external-link-for-blog col-span-1 lg:col-span-3"
                  target="_blank"
                >
                  The evolution of web design in the 2010s
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.computerhistory.org/timeline/networking-the-web/"
                  className="external-link-for-blog col-span-1 lg:col-span-3"
                  target="_blank"
                >
                  Timeline of Computer History - Computer History Museum
                </Link>
              </li>
              <li>
                <Link
                  href="https://opensauced.pizza/blog/when-open-source-maintainers-leave"
                  className="external-link-for-blog col-span-1 lg:col-span-3"
                  target="_blank"
                >
                  The Silent Crisis in Open Source: When Maintainers Walk Away
                </Link>
              </li>
              <li>
                <Link
                  href="https://opensauced.pizza/blog/oss-sustainability"
                  className="external-link-for-blog col-span-1 lg:col-span-3"
                  target="_blank"
                >
                  The Hidden Cost of Free: Why Open Source Sustainability
                  Matters
                </Link>
              </li>
              <li>
                <Link
                  href="https://blogs.loc.gov/thesignal/2013/06/before-you-were-born-we-had-online-communities/"
                  className="external-link-for-blog col-span-1 lg:col-span-3"
                  target="_blank"
                >
                  Before You Were Born: We had Online Communities
                </Link>
              </li>
            </ul>
          </section>
          {/* Next steps */}
          <section>
            <h3>Next Steps</h3>
            <ul className="list-disc ml-4">
              <li>Finish the logic from 1970s to 2000s (two eras).</li>
              <li>
                Have some pseudo content in the UI to present the game story
                idea.
              </li>
              <li>Prepare materials for mid-term demo.</li>
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

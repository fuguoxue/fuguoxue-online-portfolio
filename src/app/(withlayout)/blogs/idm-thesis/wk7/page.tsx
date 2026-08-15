import Link from "next/link";
import blogData from "@/data/blogs.json";
import blogSeries from "@/data/blog-series.json";
import path from "path";
import { fileURLToPath } from "url";
// import ExpandableImage from "@/components/ExpandableImage";
import Image from "next/image";
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
const selectedBlogSeries =
  blogSeries[blogSeries.findIndex((item) => item.blogTag == tag)].blogName;

export default function Main() {
  return (
    <div>
      {/* metadata */}
      <section>
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
          href="https://bazaar-log.vercel.app/"
          className="external-link-for-blog col-span-1 lg:col-span-3"
          target="_blank"
        >
          Play Bazaar.log demo online
        </Link>
        <br />
        <Link
          href="https://youtu.be/IoXiEs6EgHg"
          className="external-link-for-blog col-span-1 lg:col-span-3"
          target="_blank"
        >
          Bazaar.log video recording
        </Link>
      </section>

      {/* blog content */}
      {/* Demo Video */}
      <section>
        <h3>Bazaar.log Demo Documentation</h3>
        <div className="relative w-full pb-[56.25%] mb-4">
          <iframe
            width="full"
            height="auto"
            src="https://www.youtube.com/embed/IoXiEs6EgHg?si=Vql-9-j959lRUN0D"
            title="Bazaar.log Demo Video on YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Image
            src="/imgs/blogs/idm-thesis/wk7/wk7-featureImg.jpg"
            alt="A player typing to interact with the game functions."
            width={800}
            height={800}
          />
          <Image
            src="/imgs/blogs/idm-thesis/wk7/wk7-img2.jpg"
            alt="Photo of audience interaction with the game when I was away from the game."
            width={800}
            height={800}
          />
          <Image
            src="/imgs/blogs/idm-thesis/wk7/wk7-img1.jpg"
            alt="A player looking at the game screen."
            width={800}
            height={800}
          />
        </div>
      </section>
      {/* Observation */}
      <section>
        <h3>Observation</h3>
        <p>Things went well as expected:</p>
        <ul className="list-disc ml-4">
          <li>
            Players were amazed at the transition from stage 1 (1970 - 1990) to
            stage 2 (1991 - 2005), though some missed the top right buttons
            available in stage 2 and asked if they had broken my game.
          </li>
          <li>
            My game succeeded in making players curious about what happened to
            open source and the Internet between 1970 and 1990.
          </li>
        </ul>
        <p>Things required improvement:</p>
        <ul className="list-disc ml-4">
          <li>
            In the game stage 1, limited CLI coding experience would affect
            gaming experience. Because CLI is not intuitive, many players asked
            &quot;how to play&quot; or &quot;what should I do now&quot; while
            playing.
          </li>
          <li>
            Players felt that the stage 1 was too long / required too many
            actions to level up to the stage 2. Some reported that they thought
            the CRT screen would be the UI throughout the game.
          </li>
          <li>
            Players missed content or functions along the way. After learning
            about the game narrative, they reported that they didn&apos;t want
            to miss any of the content because they are interesting and relevant
            to the game story.
          </li>
          <li></li>
        </ul>
      </section>

      {/* Suggestions */}
      <section>
        <h3>Suggestions</h3>
        <p>Below are useful suggestions for my game from players:</p>
        <ul className="list-disc ml-4">
          <li>
            Provide more guidance for players:
            <ul className="list-circle ml-4">
              <li>
                At the beginning of the game, introduce the game protagonist (a
                computer researcher at a university lab) that aligns with the
                storytelling style.
              </li>
              <li>
                Categorize content into &quot;must read&quot; and
                &quot;optional&quot;, so that players won&apos;t miss any
                important content but still have the option to skip some
                readings.
              </li>
              <li>
                Make it easy at start -- &quot;hold people&apos;s hand a bit
                more at the beginning&quot;.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Reflection */}
      <section>
        <h3>Reflection</h3>
        <p>Below are my takeaways from the demo session:</p>
        <ul className="list-disc ml-4">
          <li>
            Make the initial gameplay easier, with more guidance and rewards to
            encourage players to keep on playing.
          </li>
          <li>
            Combine small rewards and big rewards. Currently, the UI change
            triggered by turning calendar is a big and interesting reward, but
            players tend to quit before that. Therefore, include more small
            changes and rewards before the big change. For example, in game
            stage 1, there can be small errors, viruses, and even ASCII art
            triggered by specific player actions. Bezel style or text color
            change might also be effective, as the CRT screen is so simple that
            any small changes will be observed.
          </li>
          <li>
            Currently, the CRT screen and interactions are developed in a
            realistic way. However, one objective of my game is to invite a wide
            audience to experience the game and understand the story. Therefore,
            I decide to retain the retro-aesthetics but carefully design user
            experience in a way that modern audience without CLI experience can
            understand.
          </li>
        </ul>
      </section>
      {/* Next steps */}
      <section>
        <h3>Next Steps</h3>
        <ul className="list-disc ml-4">
          <li>
            Add more guidance to let the player understand what to do next.
          </li>
          <li>
            Add &quot;easter eggs&quot; at each game stage so players have the
            incentives to continue playing.
          </li>
          <li>
            Categorize content into &quot;must read&quot; and
            &quot;optional&quot;, so that players won&apos;t miss any important
            content but still have the option to skip some readings.
          </li>
        </ul>
      </section>
    </div>
  );
}

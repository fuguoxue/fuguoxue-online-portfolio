import Link from "next/link";
import blogData from "@/data/blogs.json";
import blogSeries from "@/data/blog-series.json";
import path from "path";
import { fileURLToPath } from "url";
import ExpandableImage from "@/components/ExpandableImage";
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
          <Link
            href="https://www.canva.com/design/DAGdTxiqvJY/Cr_3iyv3vIcjKj2kVApNBQ/edit?utm_content=DAGdTxiqvJY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
            target="_blank"
          >
            Link to Week 1 Presentation
          </Link>
          <br />
          <Link
            href="https://docs.google.com/document/d/1A5UT7ys3OtFN0Olz70PnBf7Y2urC8QQnDGpZhMqb1tA/edit?usp=sharing"
            className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
            target="_blank"
          >
            Link to Game Design Document (work in progress)
          </Link>
          <br />
          <Link
            href="https://docs.google.com/document/d/1W-Nvq5Ca8MHERcHwgMNmDSjuzYNOpOR2UxgkgE35p8k/edit?usp=sharing"
            className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
            target="_blank"
          >
            Link to Project Plan
          </Link>

          {/* blog content */}
          {/* project idea */}
          <div>
            <h3>Project Idea</h3>
            <h4>Concept</h4>
            <p>
              The aim of the incremental game is to introduce the evolution
              process of the open-source ecosystem from decentralized individual
              contributors to a structured organization, and imagine how
              incidental events like GenAI emergence will affect this process.
            </p>
            <p>
              The game is designed for people who want to learn about the
              open-source ecosystem and speculate about its future. By
              developing this game, I want the audience to feel the
              indispensable and unique values of the open-source ecosystem, as
              well as the challenges and opportunities facing it.
            </p>
            <h4>Game Narrative</h4>
            <p>
              The game will be a single-player incremental game. In this game,
              the player gradually evolves from a programmer to an open-source
              organization founder. There are four major events in the game: 1)
              emergence of the Internet, 2) tech companies oppose open-source
              concept, 3) tech industry accepts open-source, and 4) emergence of
              GenAI. There will be a series of sub-events for each major event,
              and the tasks for players at each stage are 1) creating
              open-source tools and 2) optimizing personal influence, speed of
              value generation, and/or investment.{" "}
            </p>
            <p>
              I have included a table of game narrative with more details in the{" "}
              <Link
                href="https://docs.google.com/document/d/1A5UT7ys3OtFN0Olz70PnBf7Y2urC8QQnDGpZhMqb1tA/edit?usp=sharing"
                className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
                target="_blank"
              >
                Game Design Document
              </Link>
              .
            </p>
            <h4>Game Structure</h4>
            <div className="w-3/4 mx-auto items-center">
              <ExpandableImage
                src={selectedBlog!.featureImgURL}
                alt="Diagram of the incremental gameplay design."
                description="Diagram of the incremental gameplay design."
              />
            </div>
            <p>
              To immerse the player in the the open-source ecosystem evolution,
              they will take on the role of a code contributor, actively shaping
              its growth. Throughout the game, players will make key decisions
              that influence the development of projects, collaborations, and
              the overall narrative, driving the ecosystem forward.
            </p>
            <p>There are 3 stages in the game.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 gap-8">
              {/* Stage 1 */}
              <div className="col-span-1">
                <b>Stage 1: Individual contribution of small-scale projects</b>
                <p>
                  At this first stage, the player act as an individual
                  programmer working on small-scale open-source tools. These
                  tools are usually for own purposes, but other users on the
                  Internet might use them as well. Everytime when other users
                  use the tools created by the programmer, the programmer&apos;s
                  personal influence increases.
                </p>
                <p>
                  When personal influence is high enough, the game progresses to
                  Stage 2.
                </p>
              </div>
              <div className="col-span-1 justify-start">
                <Image
                  src="/imgs/blogs/idm-thesis/wk1-stage-1.jpg"
                  alt="Gameplay stage 1."
                  layout="responsive"
                  objectFit="cover"
                  width={400}
                  height={400}
                  className="drop-shadow-md"
                />
              </div>
              {/* Stage 2 */}
              <div className="col-span-1">
                <b>
                  Stage 2: Collaborations with other programmers to make
                  big-scale tools with more complex functionality
                </b>
                <p>
                  As programmer&apos;s personal influence increases, they can
                  collaborate with other programmers to develop larger tools
                  with more complex functions. However, collaborators have
                  different skills and levels. Players can choose whether to
                  cooperate with them, but cannot control whether collaborators
                  leave.
                </p>
                <p>
                  When the total value generated is high enough, progress to
                  Stage 3.
                </p>
              </div>
              <div className="col-span-1">
                <Image
                  src="/imgs/blogs/idm-thesis/wk1-stage-2.jpg"
                  alt="Gameplay stage 2."
                  layout="responsive"
                  objectFit="cover"
                  width={400}
                  height={400}
                  className="drop-shadow-md"
                />
              </div>
              {/* Stage 3 */}
              <div className="col-span-1">
                <b>
                  Stage 3: Establish an open-source organization for the
                  big-scale tools series
                </b>
                <p>
                  When the total value generated is high enough and there are
                  enough collaborators, there will be investors interested in
                  investing the projects. With these investments, the player can
                  choose to establish open-source foundations to further speed
                  up the value generation.
                </p>
              </div>
              <div className="col-span-1">
                <Image
                  src="/imgs/blogs/idm-thesis/wk1-stage-3.jpg"
                  alt="Gameplay stage 3."
                  layout="responsive"
                  objectFit="cover"
                  width={400}
                  height={400}
                  className="drop-shadow-md"
                />
              </div>
            </div>
            <p>
              Aside from the progressions above, events will ocassionally occur
              and impact the system. For example, GenAI emergence can lead to a
              lack of contributors in foundation or a decreasing investment. The
              player will be provided with several options to deal with the
              challenges or opportunities brought by the events, and the choices
              will affect the system&apos;s evolvement.
            </p>
            <p>
              More details are included in the{" "}
              <Link
                href="https://docs.google.com/document/d/1A5UT7ys3OtFN0Olz70PnBf7Y2urC8QQnDGpZhMqb1tA/edit?usp=sharing"
                className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
                target="_blank"
              >
                Game Design Document
              </Link>
              .
            </p>
          </div>
          {/* project plan */}
          <div>
            <h3>Project Plans</h3>
            <ul className="list-disc ml-4">
              <li>
                <b>Plan A: </b>finish developing the game with complete
                storytelling, progression logic, AI integration, game art and
                UI, badge system, and store system.
              </li>
              <li>
                <b>Plan B: </b>if time is limited, leave out the badge system
                and store system, and use royalty-free game assets by others.
              </li>
              <li>
                <b>Plan C: </b>at the very least, finish the game narrative and
                progression logic with minimal UI.
              </li>
            </ul>
            <p>
              Weekly project plan:{" "}
              <Link
                href="https://docs.google.com/document/d/1W-Nvq5Ca8MHERcHwgMNmDSjuzYNOpOR2UxgkgE35p8k/edit?usp=sharing"
                className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
                target="_blank"
              >
                Project Plan
              </Link>
            </p>
          </div>
        </div>
  );
}

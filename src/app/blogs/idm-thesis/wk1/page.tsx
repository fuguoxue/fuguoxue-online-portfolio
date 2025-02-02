import TitleLine from "@/components/TitleLine";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import blogData from "@/data/blogs.json";
import blogTagToSeriesNameJSON from "@/data/blog-series.json";
import path from "path";
import { fileURLToPath } from "url";
import ExpandableImage from "@/components/ExpandableImage";
import Image from "next/image";

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
          <p>
            This week, I presented my idea in class, built the project website,
            and fleshed out my idea into an incremental game with a more
            detailed storytelling, target players, and project plan.
          </p>
          <Link
            href="https://www.canva.com/design/DAGdTxiqvJY/Cr_3iyv3vIcjKj2kVApNBQ/edit?utm_content=DAGdTxiqvJY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            className="text-tag hover:underline col-span-1 lg:col-span-3 mb-4"
            target="_blank"
          >
            Link to week 1 presentation
          </Link>

          {/* blog content */}
          {/* project idea */}
          <div>
            <h3>Project Idea</h3>
            <p>
              I aim to develop an incremental game designed for those interested
              in understanding the open-source ecosystem and speculating on its
              future. The game will simulate the evolution of open-source
              development, tracing its growth from decentralized individual
              contributions to structured organizations. It will also explore
              the impact of incidental events, such as the emergence of
              generative AI, on this process.
            </p>
            <p>
              Through this interactive experience, I want players to recognize
              the indispensable role and unique value of the open-source
              ecosystem while engaging with the challenges and opportunities
              that shape its sustainability and evolution.
            </p>
            <h4>Game Design</h4>
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
          </div>
          {/* project plan */}
          <div>
            <h3>Project Plan</h3>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <BackToTop />
        </div>
      </main>
    </div>
  );
}

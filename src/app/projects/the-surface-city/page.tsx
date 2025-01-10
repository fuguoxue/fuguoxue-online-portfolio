import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
// import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
import Slideshow from "@/components/Slideshow";
import ImageWithCaption from "@/components/ImageWithCaption";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import BackToTop from "@/components/BackToTop";

const projectName = "The Surface City";
const imageSources = [
  {
    image: "/imgs/the-surface-city/SC-0.png",
    description: "SC-0",
  },
  {
    image: "/imgs/the-surface-city/SC-1.png",
    description: "SC-1",
  },
  {
    image: "/imgs/the-surface-city/SC-2.png",
    description: "SC-2",
  },
  {
    image: "/imgs/the-surface-city/SC-4.png",
    description: "SC-4",
  },
  {
    image: "/imgs/the-surface-city/SC-20.png",
    description: "SC-20",
  },
  {
    image: "/imgs/the-surface-city/SC-39.png",
    description: "SC-39",
  },
  {
    image: "/imgs/the-surface-city/SC-41.png",
    description: "SC-41",
  },
  {
    image: "/imgs/the-surface-city/SC-68.png",
    description: "SC-68",
  },
  {
    image: "/imgs/the-surface-city/SC-71.png",
    description: "SC-71",
  },
  {
    image: "/imgs/the-surface-city/SC-97.png",
    description: "SC-97",
  },
  {
    image: "/imgs/the-surface-city/SC-unknown.png",
    description: "SC-?",
  },
];

export default function Main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 min-h-screen m-4">
      <div className="col-span-1 md:col-span-4 lg:col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1">
        <ProjectInfoSection projectName={projectName} />
        <Link
          href="https://fuguoxue-nyu.github.io/surface-city/"
          className="external-link supplementary"
          target="_blank"
        >
          <FaLink className="external-link-icon" />
          Generate your Surface City
        </Link>
        <Link
          href="https://github.com/fuguoxue-nyu/surface-city"
          className="external-link supplementary"
          target="_blank"
        >
          <FaGithub className="external-link-icon" />
          The Surface City GitHub Page
        </Link>
      </aside>
      <main className="col-span-1 md:col-span-3 p-4 mb-8">
        <h3>Project Showcase</h3>
        <div className="w-full h-screen mb-4">
          <iframe
            src="https://fuguoxue-nyu.github.io/surface-city/"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="relative w-full pb-[56.25%] mb-4">
          <iframe
            width="full"
            height="auto"
            src="https://www.youtube.com/embed/St6ufOu_5ao?si=Up0n_5L8ot8r8Tct"
            title="Tree of Growth video on YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <section>
          <h3>Story of The Surface City</h3>
          <div className="my-2">
            <blockquote className="quote">
              <p>
                In SC, the Surface City, nothing is hidden from the city as all
                the activities happen on the surfaces of buildings. The city may
                seem gravity-free and floating in the air from a visitor&apos;s
                point of view. However, to the SC citizens, gravity does exist
                wherever the buildings are: they can stand on any surface of a
                building, vertical or horizontal, smooth or rough. They can also
                go anywhere from anywhere, as long as there is substance
                connecting the starting and the endpoint.
              </p>
              <p>
                It is said that SC has 98 districts, but no one has been to all
                of them. According to hearsay, SC-0 is a void district with no
                building at all; SC-1, SC-2, and SC-3 are districts with only
                one plane, where citizens living on its two sides never meet for
                their entire lives. There are many districts just a little less
                boring than these four, which are also one plane but with some
                peaks and valleys.
              </p>
              <p>
                However, there are some very attractive districts, like SC-39.
                While having a few buildings and residents, the district has a
                clean and minimalist style. Citizens in other districts love
                gazing at SC-39 from far away, just to escape from the
                complexity/monotonicity of their districts.
              </p>
              <p>
                The most structured and convenient district is SC-68, with just
                the right amount of buildings and just the right ways of surface
                connections. Wherever a citizen wants to travel within the
                district, there is a way. The buildings are the perfect
                labyrinth for children&apos;s hide-and-seek, but not too
                confusing to allow them to find their way home.
              </p>
              <p>
                SC-97 is the most frightening district with many fading ends.
                Many things seem to be the same as SC-68: dense buildings,
                countless surface connections, etc. However, there is minimal
                breathing space; it is a labyrinth that no one can get out of.
                The best way to survive one has to be cautious enough to avoid
                those fading ends, which will swallow them into nothingness.
                Nothingness is different from death; one may be technically
                still alive in nothingness, but all proof of their existence is
                erased from the world — even more horrible than death. As the
                number of people vanishing drastically increases, the remaining
                residents begin to be aware of this fact and start to panic. A
                few people also become curious about where those people went,
                and bring up a hypothesis that the vanished people actually
                “entered” the buildings. But what does “enter” mean? Isn&apos;t
                everything just directly accessible, right on the surface?
              </p>
            </blockquote>
          </div>
          <Slideshow slides={imageSources} />
          <ImageWithCaption
            src="/imgs/the-surface-city/Screenshot 2024-10-13 130301.png"
            alt="Screenshot of The Surface City project web interface."
            caption="The Surface City project web interface."
          />
        </section>
        <section>
          <h3>Inspiration</h3>
          <p>
            <i>Italo Calvino, Invisible Cities</i>
          </p>
          <p>
            <i>Ustwo Studio Ltd., Monument Valley</i>
          </p>
          <p>
            <i>Sukeban Games, VA-11 Hall-A: Cyberpunk Bartender Action</i>
          </p>
        </section>
        <section>
          <h3>Production</h3>
          <p>
            Our city is built with p5.js coding and Adobe Illustrator. We first
            used Adobe Illustrator to create tile images, which were fed into
            our p5.js code for cityscape generation. The technique we adapted is
            the Wave Function Collapse model introduced in our workshop.
          </p>
          <h4>Tile Design</h4>
          <p>
            Inspired by the Monument Valley game, we wanted to build a city in
            2.5D (two-and-a-half dimensional). Therefore, a standard tile image
            should be able to show light and shade of a 3D object in order to
            create a 3D visual effect.
          </p>
          <p>
            However, the p5.js canvas is a rectangle, which works better with
            rectangular tiles. Thus we had to find a way to draw polygons with
            rectangles.
          </p>
          <p>
            By placing more polygons side by side, we recognize that there is a
            pattern able to splice and compose polygons. Below is how we find
            our standard tile wireframe.{" "}
          </p>
          <ImageWithCaption
            src="/imgs/the-surface-city/tile-sketch.png"
            alt="Diagram of hexagon-to-triangle tile conversion."
            caption="Diagram of hexagon-to-triangle tile conversion."
            widthPercentage={70}
            minWidth={600}
          />
          <p>
            The final shape of our tile is a rectangle with six divisions. To
            create a complete drawing of a cube with shades, we need at least
            three colors: light, gray, and dark. Since we also want to add a
            background for our city, there are a total of four colors in our
            tile set.{" "}
          </p>
          <p>
            Because our tile wireframe has 6 grids, there are 4096 (46)
            different tiles theoretically. However, there are many possibilities
            that do not apply to our city&apos;s construction as they won’t be
            able to help form any shapes of polygon that we need. As a result,
            we need to analyze the possible color adjacencies and summarize a
            set of rules to eliminate those impossible tiles.
          </p>
          <h4>Color Adjacency Analysis</h4>
          <p>
            Since there are too many possibilities with the 6-grid tile, we
            found it hard to analyze the rule for color adjacency and shortlist
            the applicable results. Therefore, we attempted to simplify the tile
            wireframe. The other two wireframes we experimented with are 2-grid
            and 4-grid.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <ImageWithCaption
              src="/imgs/the-surface-city/2-Grid+Tiles.png"
              alt="2-grid tileset."
              caption="2-grid tileset."
            />
            <ImageWithCaption
              src="/imgs/the-surface-city/2-grid-tiles-test.png"
              alt="Outcome with 2-grid tileset."
              caption="Outcome with 2-grid tileset."
            />
            <ImageWithCaption
              src="/imgs/the-surface-city/4-Grid+Tiles.png"
              alt="4-grid tileset."
              caption="4-grid tileset."
            />
            <ImageWithCaption
              src="/imgs/the-surface-city/4-grid-tiles-test.png"
              alt="Outcome with 4-grid tileset."
              caption="Outcome with 4-grid tileset."
            />
          </div>
          <p>
            However, However, both the 2-grid and 4-grid tilesets produce
            visuals that are more 2D than 3D.
          </p>
          <h4>Color Rules Summary & Back to 6-grid</h4>
          <p>
            The original code restricts two adjacent edges between each tile to
            be in the same color. Since we are working on a 2.5D effect pattern,
            there can be more possibilities for left and right neighbors of a
            tile. Based on observations of 2-grid and 4-grid tiles, we summarize
            the following set of rules for the intersection of a tile and its
            neighbor to the right, which should help generate the cityscape we
            wanted (we mark the background color, light color, gray color, and
            dark color as b, c1, c2, and c3):{" "}
          </p>
          <ol className="list-decimal ml-8 mt-4">
            <li>b can have b or c2 on its right. </li>
            <li>c1 can only have c1 on its right. </li>
            <li>c2 can have c2 or c3 on its right. </li>
            <li>c3 can have b, c2, and c3 on its right. </li>
          </ol>
          <p>
            The symmetrical rules apply to the intersection of a tile and its
            neighbor to the left.{" "}
          </p>
          <p>
            For the top and bottom edges, the rule of the same color should
            still be followed as they are responsible for forming a complete
            polygon.{" "}
          </p>
          <p>
            For example, according to our tile design, c2 and c3 are two
            different shades of the cube, with c2 representing the left side and
            c3 representing the right side of the cube. If a c2 right edge has a
            c2 left edge on its right side, it will connect to form a large left
            side of a 3D shape; if it is connected to a c3 left edge on its
            right side, it will form an edge of a 3D shape.
          </p>
          <p>
            After summarizing the color rules, applied them back to the 6-grid
            tiles and generated 3D visuals very close to our expectations. We
            also drew more tiles in Illustrator, and our final 6-grid tile set
            contains 98 different tiles. Below is a cityscape generated with all
            the 98 tiles.
          </p>
          <ImageWithCaption
            src="/imgs/the-surface-city/SC-97.png"
            alt="Cityscape generated with 98 tiles."
            caption="Cityscape generated with 98 tiles."
            widthPercentage={80}
            minWidth={400}
          />
        </section>
      </main>
      <div className="col-span-1 sm:hidden md:block lg:hidden"></div>
      <aside className="col-span-1 md:col-span-3 lg:col-span-1">
        <ProjectSwitch projectName={projectName} />
        <BackToTop />
      </aside>
    </div>
  );
}

// import Image from "next/image";
import TitleLine from "@/components/TitleLine";
import BackToTop from "@/components/BackToTop";
// import ImageWithCaption from "@/components/ImageWithCaption";
import Link from "next/link";
import { SeparationLine } from "@/components/webpageReusables";

export default function Main() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen m-4">
      <div className="col-span-1 lg:col-span-5">
        <TitleLine />
      </div>
      <div className="col-span-1 sm:hidden md:hidden lg:block"></div>
      <main className="col-span-1 lg:col-span-3 p-4 mb-8">
        {/* Personal Statement */}
        <section>
          <h2>Bio</h2>
          <p>
            Fuguo Xue is a creative technologist, currently working as Research
            Associate at Information Engineering & Media program, Nanyang
            Technological University.
          </p>
          <p>
            Fuguo&apos;s work spans interactive installations, video games, and
            online interactions, exploring the intersection of technology,
            nature, and culture. Passionate about artificial life and digital
            simulations of nature and human society, she strives to create
            immersive interactive experiences that encourage reflection on the
            connection between us and the world.
          </p>
          {/* <p>
            Specializing in creative technology, Fuguo has honed her expertise
            in{" "}
            <b>
              Max MSP, TouchDesigner, Unity 3D, Adobe Creative Suite, p5.js,
              Python, HTML5, JavaScript, CSS, PHP, and MySQL
            </b>
            . These skills enable her to craft playful, thought-provoking
            experiences that reimagine relationships between humans, machines,
            and the natural world.
          </p> */}
          {/* <p>
            Currently, Fuguo is exploring new ways to leverage AI and
            open-source tools for interactive experiences.
          </p> */}
        </section>

        <SeparationLine thickness="2px" />

        {/* Education */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <h3 className="col-span-1 md:col-span-3 my-6 font-bold">Education</h3>
          <div className="col-span-1">
            <h4>Nanyang Technological University</h4>
            <p>Singapore</p>
            <p className="my-0">2019 — 2023</p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <p>Bachelor of Engineering, Information Engineering and Media</p>
            <ul className="list-disc ml-4">
              <li>Ministry of Education Scholarship (2018)</li>
              <li>NTU Science and Engineering Scholarship (2018)</li>
            </ul>
          </div>
          <SeparationLine thickness="1px" />
          <div className="col-span-1">
            <h4>New York University</h4>
            <p>New York, United States</p>
            <p className="my-0">2023 — 2025</p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <p>Master of Science, Integrated Design and Media</p>
            <ul className="list-disc ml-4">
              <li>
                NYU Tandon School of Engineering Merit-based Scholarship (2023)
              </li>
            </ul>
          </div>
        </section>

        <SeparationLine thickness="2px" />

        {/* Experiences */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <h3 className="col-span-1 md:col-span-3 mt-6 font-bold">Experiences</h3>
          <div className="col-span-1">
            <h4>Front-End Developer</h4>
            <p className="text-opacity-70">Jul 2024 — Sept 2024</p>
            <p className="text-opacity-70">
              Philly Truce, Philadelphia (Remote)
            </p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <ul className="list-disc ml-4">
              <li>
                Developed a responsive mobile app using Next.js, improving user
                experience to support community conflict resolution initiatives.
              </li>
              <li>
                Collaborated with back-end teams to implement 2FA user
                authentication using NextAuth.js, enhancing app security.
              </li>
            </ul>
          </div>
          <SeparationLine thickness="1px" />
          <div className="col-span-1">
            <h4>Museum Accessibility Designer</h4>
            <p className="text-opacity-70">Feb 2024 — May 2024</p>
            <p className="text-opacity-70">
              HeartShare Human Services of New York, New York
            </p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <ul className="list-disc ml-4">
              <li>
                Collaborated with clients to ensure on-site accessibility of
                upcoming artwork exhibitions for differently-abled populations.
              </li>
              <li>
                Created 3D rendering and 2D floorplan with Rhino and Illustrator
                for internal planning and customer-facing virtual experience.
              </li>
              <li>
                Archived artworks with photos, updated the official archival
                webpage with the photos and their descriptive alt text for
                accessibility.
              </li>
            </ul>
          </div>
          <SeparationLine thickness="1px" />
          <div className="col-span-1">
            <h4>Stage Manager & Web Editor</h4>
            <p className="text-opacity-70">Jan 2024 — May 2024</p>
            <p className="text-opacity-70">
              Harvestworks Digital Media Art, New York
            </p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <ul className="list-disc ml-4">
              <li>
                Collaborated with artists to organize a six-day event including
                workshops, live coding performances, and installations.
              </li>
              <li>
                Adopted HTML, CSS, JavaScript, and p5.js for web content
                generation and management; create webpages for event publicity.
              </li>
              <li>
                Set up the event space, tested equipment for audio, video,
                lighting, and documentation.
              </li>
            </ul>
          </div>
          <SeparationLine thickness="1px" />
          <div className="col-span-1">
            <h4>Software Marketing Intern</h4>
            <p className="text-opacity-70">Jul 2021 — Dec 2021</p>
            <p className="text-opacity-70">
              Philips Electronics APAC Center, Singapore
            </p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <ul className="list-disc ml-4">
              <li>
                Proposed and developed a Customer-Facing Document template with
                updated product information using Microsoft Office, facilitated
                customer-facing document generation within the Philips APAC EDI
                sales team.
              </li>
              <li>
                Identified available EDI digital content and worked on a remote
                activation kit (product presentations, videos, interviews, etc.)
                and publicity materials (posters, brochures, and webinar
                banners) with Adobe Creative Suite, helped internal and external
                customers adapt to a remote working style during the COVID-19
                pandemic.
              </li>
            </ul>
          </div>
          <SeparationLine thickness="1px" />
          <div className="col-span-1">
            <h4>News Product Designer</h4>
            <p className="text-opacity-70">Jan 2021 — Apr 2021</p>
            <p className="text-opacity-70">
              TODAY Online, Singapore
            </p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <ul className="list-disc ml-4">
              <li>
                Researched the news industry in Singapore; engaged with TODAY
                online to enhance youth engagement in their news platform.
              </li>
              <li>
                Conceptualized and prototyped a web-based news reading feature
                in Figma; conducted user tests to gather feedback.
              </li>
              <li>
                Iterated with React.js based on user testing results; final
                product earned positive feedback from TODAY online.
              </li>
            </ul>
          </div>
        </section>

        <SeparationLine thickness="2px" />

        {/* Exhibitions */}
        <section className="grid col-span-1 md:grid-cols-3 md:gap-4">
          <h3 className="col-span-1 md:col-span-3 my-6 font-bold">Exhibitions</h3>
          {/* <div className="col-span-1">
            <h4 className="italic">
              <Link
                href="/projects/the-surface-city"
                className="text-tag hover:underline"
              >
                <b>Tree of Growth</b>
              </Link>
            </h4>
            <p className="my-0">May 2024</p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <Link
              href="https://partiful.com/e/QlvcgLbCcU1k8H4nYzu3"
              className="text-tag hover:underline"
              target="_blank"
            >
              An Evening of Immersive Entertainment
            </Link>
            <p>New York, United States</p>
          </div> */}

          <div className="col-span-1">
            <h4 className="italic">
              <Link
                href="/projects/attractiverse-iii"
                className="text-tag hover:underline"
              >
                Attractiverse-III
              </Link>
            </h4>
            <p className="my-0">Apr 2024</p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <Link
              href="https://www.harvestworks.org/livecodenyc2024-apr-26-may-5/"
              className="text-tag hover:underline"
              target="_blank"
            >
              MY _____ IS AN ECOSYSTEM
            </Link>
            <p>New York, United States</p>
          </div>

          <div className="col-span-1">
            <h4 className="italic">
              <Link
                href="/projects/the-surface-city"
                className="text-tag hover:underline"
              >
                The Surface City
              </Link>
            </h4>
            <p className=" my-0">Apr 2023</p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <Link
              href="https://www.critlabreview.com/articles/visible-cities"
              className="text-tag hover:underline"
              target="_blank"
            >
              Visible Cities: Workshop Exhibition (Online Exhibition)
            </Link>
            <p>New York, United States</p>
          </div>

          <div className="col-span-1">
            <h4 className="italic">
              <Link
                href="/projects/cometale"
                className="text-tag hover:underline"
              >
                Cometale
              </Link>
            </h4>
            <p className="my-0">Sep 2023</p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <Link
              href="https://ars.electronica.art/who-owns-the-truth/en/"
              className="text-tag hover:underline"
              target="_blank"
            >
              Ars Electronica Festival 2023 Campus Exhibition
            </Link>
            <p>Linz, Austria</p>
          </div>

          <div className="col-span-1">
            <h4 className="italic">
              <Link
                href="/projects/earthlings"
                className="text-tag hover:underline"
              >
                Earthlings
              </Link>
            </h4>
            <p className="my-0">Sep 2022</p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <p>The International Conference of Undergraduate Research 2022</p>
            <p>Singapore</p>
          </div>
        </section>

        {/* <SeparationLine thickness="2px" /> */}

        {/* Honors & Awards */}

        {/* <section className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
          <h3 className="col-span-1 md:col-span-3 my-6">Honors & Awards</h3>
          <p className="col-span-1 md:col-span-2 my-0">
            <b>NYU Tandon School of Engineering Merit-based Scholarship</b>
          </p>
          <p className="col-span-1 md:text-right my-0">2023</p>
          <p className="col-span-1 md:col-span-3 my-0">
            Issued by New York University.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
          <p className="col-span-1 md:col-span-2 my-0">
            <b>Ministry of Education Scholarship</b>
          </p>
          <p className="col-span-1 md:text-right my-0">2018</p>
          <p className="col-span-1 md:col-span-3 my-0">
            Issued by Ministry of Education, Singapore.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
          <p className="col-span-1 md:col-span-2 my-0">
            <b>NTU Science and Engineering Scholarship</b>
          </p>
          <p className="col-span-1 md:text-right my-0">2018</p>
          <p className="col-span-1 md:col-span-3 my-0">
            Issued by Nanyang Technological University, Singapore.
          </p>
        </section> */}
        <div className="col-span-1 sm:hidden md:block lg:hidden"></div>
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <BackToTop />
        </div>
      </main>
    </div>
  );
}

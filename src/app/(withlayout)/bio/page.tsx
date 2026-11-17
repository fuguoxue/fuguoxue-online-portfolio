import Link from "next/link";
import { SeparationLine } from "@/components/webpageReusables";

export default function Main() {
  return (
    <div>
      <section>
        <h2>Bio</h2>
        <p>
          <u>Xue</u> Fuguo is a Singapore-based artist, creative technologist,
          and educator working at the intersection of art, computation, and
          engineering.
        </p>
        <p>
          Her artistic practice explores artificial life, emergent behavior, and
          the creative possibilities of computational systems. She is
          particularly interested in creating worlds that are designed but never
          fully controlled, where autonomous entities and complex behaviors
          emerge through computational rules. Through interactive installations
          and digital simulations, she invites audiences to encounter, explore,
          and coexist with these evolving worlds.
        </p>
        <p>
          Fuguo is currently a Research Associate at Nanyang Technological
          University (NTU), where she contributes to research and undergraduate
          engineering education. With an interdisciplinary background, she is
          committed to bridging technical knowledge and creative practice
          through both her artistic work and teaching.
        </p>
        <p>
          Fuguo holds an M.S. in Integrated Design & Media from New York
          University and a B.Eng. in Information Engineering & Media from NTU.
          Her work has been exhibited at Ars Electronica Festival in Linz,
          Austria, and interdisciplinary art exhibitions in New York.
        </p>
      </section>

      <SeparationLine />
      {/* Academic Appointment */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-1">
          <p className="text-greyline font-bold mt-1">01 / AFFILIATION</p>
          <h4 className="font-bold">Academic Appointment</h4>
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="flex justify-between items-baseline">
            <h4>Research Associate</h4>
            <p className="my-0 text-greyline">2025 — Present</p>
          </div>
          <p>Nanyang Technological University</p>
        </div>
      </section>

      <SeparationLine />

      {/* Education */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-1">
          <p className="text-greyline font-bold mt-1">02 / BACKGROUND</p>
          <h4 className="font-bold">Education</h4>
        </div>
        <div className="col-span-1 md:col-span-2">
          {/* NYU */}
          <div className="mb-6">
            <div className="flex justify-between items-baseline">
              <h4>New York University</h4>
              <p className="my-0 text-greyline">2023 — 2025</p>
            </div>
            <p>M.S. Integrated Design & Media</p>
          </div>
          {/* NTU */}
          <div className="mb-6">
            <div className="flex justify-between items-baseline">
              <h4>Nanyang Technological University</h4>
              <p className="my-0 text-greyline">2019 — 2023</p>
            </div>
            <p>B.Eng. Information Engineering & Media</p>
          </div>
        </div>
      </section>

      {/* <SeparationLine/> */}

      {/* Experiences */}
      {/* <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <h3 className="col-span-1 md:col-span-3 mt-6 font-bold">Experiences</h3>
        <div className="col-span-1">
          <h4>Front-End Developer</h4>
          <p className="text-opacity-70">Jul 2024 — Sept 2024</p>
          <p className="text-opacity-70">Philly Truce, Philadelphia (Remote)</p>
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
              and publicity materials (posters, brochures, and webinar banners)
              with Adobe Creative Suite, helped internal and external customers
              adapt to a remote working style during the COVID-19 pandemic.
            </li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4>News Product Designer</h4>
          <p className="text-opacity-70">Jan 2021 — Apr 2021</p>
          <p className="text-opacity-70">TODAY Online, Singapore</p>
        </div>
        <div className="col-span-1 md:col-span-2">
          <ul className="list-disc ml-4">
            <li>
              Researched the news industry in Singapore; engaged with TODAY
              online to enhance youth engagement in their news platform.
            </li>
            <li>
              Conceptualized and prototyped a web-based news reading feature in
              Figma; conducted user tests to gather feedback.
            </li>
            <li>
              Iterated with React.js based on user testing results; final
              product earned positive feedback from TODAY online.
            </li>
          </ul>
        </div>
      </section> */}

      <SeparationLine />

      {/* SelectedExhibitions */}
      <section className="grid col-span-1 md:grid-cols-3 md:gap-4">
        <div className="col-span-1 md:col-span-1">
          <p className="text-greyline font-bold mt-1">03 / PRACTICE</p>
          <h4 className="font-bold">Selected Exhibitions</h4>
        </div>
        {/* <div className="col-span-1">
            <h4>
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

        <div className="col-span-1 md:col-span-2">
          {/* Attractiverse-III */}
          <div>
            <div className="flex justify-between items-baseline">
              <h4>
                <Link
                  href="/projects/attractiverse-iii"
                  className="hover:underline text-tag"
                >
                  Attractiverse-III
                </Link>
              </h4>
              <p className="my-0 text-greyline">Apr 2024</p>
            </div>

            <p>
              <span>
                <Link
                  href="https://www.harvestworks.org/livecodenyc2024-apr-26-may-5/"
                  className="hover:underline"
                  target="_blank"
                >
                  LiveCode.NYC: MY _____ IS AN ECOSYSTEM
                </Link>
              </span>
              <span> · New York</span>
            </p>
          </div>
          {/* The Surface City */}
          <div className="mt-4">
            <div className="flex justify-between items-baseline">
              <h4>
                <Link
                  href="/projects/the-surface-city"
                  className="hover:underline text-tag"
                >
                  The Surface City
                </Link>
              </h4>
              <p className="my-0 text-greyline">Apr 2023</p>
            </div>

            <p>
              <span>
                <Link
                  href="https://www.critlabreview.com/articles/visible-cities"
                  className="hover:underline"
                  target="_blank"
                >
                  Visible Cities
                </Link>
              </span>
              <span> · Online</span>
            </p>
          </div>

          {/* Cometale */}
          <div className="mt-4">
            <div className="flex justify-between items-baseline">
              <h4>
                <Link
                  href="/projects/cometale"
                  className="hover:underline text-tag"
                >
                  Cometale
                </Link>
              </h4>
              <p className="my-0 text-greyline">Sep 2023</p>
            </div>
            <p>
              <span>
                <Link
                  href="https://ars.electronica.art/who-owns-the-truth/en/"
                  className="hover:underline"
                  target="_blank"
                >
                  Ars Electronica Festival 2023 (Campus Exhibition)
                </Link>
              </span>
              <span> · Linz, Austria</span>
            </p>
          </div>

          {/* Earthlings */}
          <div className="mt-4">
            <div className="flex justify-between items-baseline">
              <h4>
                <Link
                  href="/projects/earthlings"
                  className="hover:underline text-tag"
                >
                  Earthlings
                </Link>
              </h4>
              <p className="my-0 text-greyline">Sep 2022</p>
            </div>
            <p>ICUR 2022 · Singapore</p>
          </div>
        </div>
      </section>

      {/* <SeparationLine/> */}

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
      {/* <div className="col-span-1 sm:hidden md:block lg:hidden"></div> */}
      {/* <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <BackToTop />
        </div> */}
      {/* </main> */}
    </div>
  );
}

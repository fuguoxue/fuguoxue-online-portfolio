import { Link } from "react-router-dom";
import Filter from "./components/Filter";
// import WorkGallery from "./components/WorkGallery";
// import projectList from "./projectData.json";
// import { useState } from "react";

function Header() {
  return (
    <header className="grid grid-cols-2 gap-4 content-start mb-5 mt-5">
      <h1 className="text-5xl d-inline-block font-bold">Fuguo's Media Space</h1>
      <nav className="flex justify-end align-middle text-xl">
        <Link to="/" className="self-center">
          Work
        </Link>
        <Link to="/blogs" className="self-center ml-5">
          Blogs
        </Link>
        <Link to="/bio" className="self-center ml-5">
          Bio
        </Link>
      </nav>
    </header>
  );
}

function Body() {
  return (
    <body>
        <Filter />
    </body>
  );
}

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <i></i>
        </li>
      </ul>
    </footer>
  );
}

export function App() {
  return (
    <div className="container mx-auto mt-3 font-monospace max-w-8xl px-5">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

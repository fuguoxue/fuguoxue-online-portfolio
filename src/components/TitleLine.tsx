import P5ShadowController from "./P5TitleShadow";
import Footer from "./Footer";
import Link from "next/link";

export default function TitleLine() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {/* Title/Shadow Component */}
      <div className="col-span-1 sm:grid-cols-1 md:col-span-2 lg:col-span-2 p-4">
        <P5ShadowController />
      </div>
      {/* Navigation Component */}
      <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 p-4">
        <nav>
          <ul className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-16 justify-end text-2xl">
            <li>
              <Link
                href="/"
                className="group inline-flex items-center"
              >
                <span className="group-hover:underline">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/bio"
                className="group inline-flex items-center"
              >
                <span className="group-hover:underline">Bio</span>
              </Link>
            </li>
            <li>
              <Link
                href="/essays"
                className="group inline-flex items-center"
              >
                <span className="group-hover:underline">Essays</span>
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="group inline-flex items-center"
              >
                <span className="group-hover:underline">Blogs</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

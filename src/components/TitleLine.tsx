import P5ShadowController from "./P5TitleShadow";
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
              <Link href="/" className="group inline-flex items-center">
                <span className="group-hover:underline">Home</span>
              </Link>
            </li>
            <li className="group relative">
              <button className="inline-flex cursor-pointer items-center">
                <span className="group-hover:underline">Work</span>
              </button>

              <ul className="invisible absolute left-0 top-full z-50 flex flex-col gap-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <li>
                  <Link
                    href="/essays"
                    className="group inline-flex items-center"
                  >
                    <span>Essays</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="group inline-flex items-center"
                  >
                    <span>Blogs</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/bio" className="group inline-flex items-center">
                <span className="group-hover:underline">Bio</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

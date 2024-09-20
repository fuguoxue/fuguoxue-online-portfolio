"use client";
import Link from "next/link";

export function WebsiteTitle() {
  return (
    <div>
      <Link href="/">
        <h1 className="mb-10 font-light tracking-wide title-shadow">
          Fuguo&apos;s <br />
          <span>Media Space</span>
        </h1>
      </Link>
    </div>
  );
}

interface TabProps {
  href: string;       // URL to navigate to
  text: string;       // The text of the tab
  arrowPosition: "left" | "right";  // Position of the arrow (left or right of the text)
}

export function NavigationTab({ href, text, arrowPosition }: TabProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center border-b-2 border-transparent hover:border-gray-50 transition duration-300 text-base"
    >
      {arrowPosition === "left" && (
        <span className="mr-2 text-gray-200 group-hover:scale-150 group-hover:border-gray-50 transition-transform duration-300">
          &#8592;
        </span>
      )}
      {text}
      {arrowPosition === "right" && (
        <span className="ml-2 text-gray-200 group-hover:scale-150 group-hover:border-gray-50 transition-transform duration-300">
          &#8594;
        </span>
      )}
    </Link>
  );
}
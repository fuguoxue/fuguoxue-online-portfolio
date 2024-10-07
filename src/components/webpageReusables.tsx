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
  href: string; // URL to navigate to
  text: string; // The text of the tab
  arrowPosition: "left" | "right"; // Position of the arrow (left or right of the text)
}

export function NavigationTab({ href, text, arrowPosition }: TabProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center text-primary transition-all duration-300 transform hover:scale-105 hover:text-secondary text-lg"
    >
      {arrowPosition === "left" && (
        <span className="transition-all transform group-hover:scale-105 group-hover:text-secondary">
          &#8592;&nbsp;
        </span>
      )}

      <span className="transition-all group-hover:underline">
        {text}
      </span>

      {arrowPosition === "right" && (
        <span className="transition-all transform group-hover:scale-105 group-hover:text-secondary">
          &nbsp;&#8594;
        </span>
      )}
    </Link>
  );
}

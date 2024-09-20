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

export function BackTab() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center border-b-2 border-transparent hover:border-gray-200 transition duration-300 text-base"
    >
      {/* Visible arrow with hover animation */}
      <span className="mr-2 text-gray-200 group-hover:scale-150 transition-transform duration-300">
        &#8592; {/* This is the arrow code (←) */}
      </span>
      Back to Home
    </Link>
  );
}

"use client";

// import Image from "next/image";
import Link from "next/link";
import tutorialSeries from "@/data/tutorial-series.json";

const tutorialTag = "personal-website";
const tutorialSeriesName =
  tutorialSeries[
    tutorialSeries.findIndex((item) => item.tutorialTag == tutorialTag)
  ].tutorialName;

export default function Home() {
  return (
    <div>
      <h2>
        <b>{tutorialSeriesName}</b>
      </h2>
      <div>
        <Link
          href="/tutorials"
          className="group inline-flex items-center text-tag transition-all duration-300 transform hover:scale-105 text-lg"
        >
          <span className="transition-all transform group-hover:scale-105">
            &#8592;&nbsp;
          </span>
          <span className="transition-all group-hover:underline my-4">
            All tutorials
          </span>
        </Link>
      </div>

      {/* Table of Content */}
      <div className="my-4">
        <h3>Table of Content</h3>
        <h4>
          <Link
            href="/tutorials/personal-website/prerequisites"
            className="text-link hover:underline"
          >
            1. Prerequisites
          </Link>
        </h4>
        <ul className="list-disc pl-4">
          <li>GitHub Account</li>
          <li>Vercel Account</li>
          <li>GitHub Desktop App (Optional)</li>
        </ul>
        <h4>
          <Link
            href="/tutorials/personal-website/part1"
            className="text-link hover:underline"
          >
            2. Introduction
          </Link>
        </h4>
        <ul className="list-disc pl-4">
          <li>Why do I need a personal website?</li>
          <li>
            Next.js + Tailwind CSS: A Popular Framework for Frontend Development
          </li>
          <li>Vercel: An Open Source Website Deployment Platform</li>
        </ul>
        <h4>
          <Link
            href="/tutorials/personal-website/part2"
            className="text-link hover:underline"
          >
            3. Environment Setup
          </Link>
        </h4>
        <ul className="list-disc pl-4">
          <li>Setting up GitHub Repository</li>
          <li>Setting up Vercel Deployment</li>
          <li>Setting up Next.js Project</li>
        </ul>
        <h4>
          <Link
            href="/tutorials/personal-website/part3"
            className="text-link hover:underline"
          >
            4. Building the Website
          </Link>
        </h4>
      </div>
    </div>
  );
}

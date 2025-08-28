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
    <div className="tutorial-page-container">
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
      {/* About this tutorial */}
      <section className="my-4">
        <h3>
          <b>About This Tutorial</b>
        </h3>
        <p>
          This tutorial is designed to help you build your own personal website
          using Next.js, Tailwind CSS, and Vercel. It covers the prerequisites,
          the introduction to the technologies used, and a hands-on guide to
          building and deploying your website. By the end of this tutorial, you
          will have a fully functional personal website that you can customize
          and deploy.
        </p>
        <h4>Why do you need a personal website?</h4>
        <p>
          A personal website serves as your digital portfolio, showcasing your
          skills, projects, and achievements. It helps you build your online
          presence, allows you to control how you present yourself
          professionally, and makes it easier for potential employers or
          collaborators to find you. Additionally, it demonstrates your
          initiative and technical abilities.
        </p>
      </section>
      {/* Table of Content */}
      <section className="my-4">
        <h3>
          <b>Table of Content</b>
        </h3>
        <h4>
          <Link href="#prerequisites" className="text-tag hover:underline">
            1. Prerequisites
          </Link>
        </h4>
        <h4>
          <Link href="#introduction" className="text-tag hover:underline">
            2. Introduction
          </Link>
        </h4>
        <ul className="list-disc pl-4">
          <li>
            Next.js + Tailwind CSS: A Popular Framework for Frontend Development
          </li>
          <li>Vercel: An Open Source Website Deployment Platform</li>
        </ul>
        <h4>
          <Link href="#hands-on" className="text-tag hover:underline">
            3. Hands-on: Build Your Personal Website
          </Link>
        </h4>
        <ul className="list-disc pl-4">
          <li>Environment Setup</li>
          <li>Next.js Project Initialization</li>
          <li>Structure Pages</li>
          <li>Styling with Tailwind CSS</li>
          <li>Deploy with Vercel</li>
        </ul>
        <h4>
          <Link href="#resources" className="text-tag hover:underline">
            4. Extra Resources
          </Link>
        </h4>
      </section>

      <section className="my-4">
        <h3 id="prerequisites">
          <b>1. Prerequisites</b>
        </h3>
        <p>Before you start this tutorial, make sure you have the following:</p>

        <ul className="list-disc pl-4">
          <li>A GitHub account</li>
          <li>
            A <Link href="https://vercel.com/signup">Vercel</Link> account
          </li>
          <li>Github Desktop App</li>
        </ul>
      </section>
      <section className="my-4">
        <h3 id="introduction">
          <b>2. Introduction</b>
        </h3>
        <p>
          <b>Next.js</b> is a powerful and popular React framework that enables
          you to build fast, scalable, and SEO-friendly web applications. It
          provides features like file-based routing, server-side rendering, and
          API routes, making it an excellent choice for personal websites.
        </p>
        <p>
          <b>Tailwind CSS</b> is a utility-first CSS framework that lets you
          style your website quickly and efficiently. With its pre-defined
          classes, you can create responsive and modern designs without writing
          custom CSS.
        </p>
        <p>
          <b>Vercel</b> is a cloud platform for deploying web applications. It
          integrates seamlessly with Next.js and GitHub, allowing you to deploy
          your personal website with just a few clicks. Vercel offers automatic
          builds, previews, and custom domains, making deployment simple and
          reliable.
        </p>
      </section>
      <section className="my-4">
        <h3 id="hands-on">
          <b>3. Hands-on: Build Your Personal Website</b>
        </h3>
        <p>
          In this section, we will walk through the steps to build and deploy
          your personal website using Next.js, Tailwind CSS, and Vercel.
        </p>
        <h4>Step 1: Environment Setup</h4>
        <p>Install the following:</p>
        <ul className="list-disc pl-4">
          <li>
            <Link
              href="https://git-scm.com/downloads/"
              className="text-tag hover:underline"
              target="_blank"
            >
              Git
            </Link>
          </li>
          <li>
            <Link
              href="https://nodejs.org/en/download"
              className="text-tag hover:underline"
              target="_blank"
            >
              Node.js
            </Link>
            <ul className="mb-0">
              <li>
                Make sure Node.js is added to PATH as Environmental Variable on
                your PC.
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"
              className="text-tag hover:underline"
              target="_blank"
            >
              npm
            </Link>
          </li>
          <li>
            VS Code (will be used as the code editor for this tutorial; other
            code editors can also be used)
            <ul className="mb-0">
              <li>
                Inside VS Code, install the following extensions:{" "}
                <b>Prettier</b>, <b>ESLint</b>, and{" "}
                <b>Tailwind CSS IntelliSense</b>.
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="https://desktop.github.com/download/"
              className="text-tag hover:underline"
              target="_blank"
            >
              GitHub Desktop
            </Link>{" "}
            (for easier GitHub repo management; alternatively, you can also use
            Git command line)
          </li>
        </ul>
        <p>
          Verify the installations by running the following commands in your VS
          Code terminal:
          <br />
          <span className="code-inline">npm -v</span>
          <br />
          <span className="code-inline">node -v</span>
          <br />
          <span className="code-inline">git --version</span>
          <br />
          If you see the version numbers, you are good to go!
        </p>
        <h4>Step 2: Next.js Project Initialization</h4>
        <p>
          If you want to follow along, go to the template I created for this
          tutorial:{" "}
          <Link
            href="https://github.com/fuguoxue/fuguoxue-online-portfolio"
            className="text-tag hover:underline"
            target="_blank"
          >
            Website Template Repo
          </Link>
          . Then, fork the repo to your own GitHub account, and clone it to your
          local machine using GitHub Desktop App. Open the project folder in VS
          Code, and run <span className="code-inline">npm install</span> in the
          terminal to install the dependencies.
          <br />
        </p>
        <p>
          If you want to start from scratch, you can also open your VS Code
          terminal, and do the following:
          <br />
          <ul className="list-disc pl-4">
            <li>
              Create a Next.js project:{" "}
              <span className="code-inline">
                npx create-next-app@latest my-app
              </span>
            </li>
            <li>
              Install Tailwind CSS in you project:{" "}
              <span className="code-inline">
                npm install tailwindcss @tailwindcss/postcss postcss
              </span>
            </li>
          </ul>
        </p>
        <p>
          When you are done with project initialization, run{" "}
          <span className="code-inline">npm run dev</span>, then go to{" "}
          <span className="code-inline">http://localhost:3000</span> inside
          browser to view your website locally.
        </p>
        <h4>Step 3: Structure Pages</h4>
        <h4>Step 4: Styling with Tailwind</h4>
        <h4>Step 5: Deploy with Vercel</h4>
        <p>
          When you are ready to publish your website, you can move on to deploy
          it from your GitHub repository using Vercel.
        </p>
      </section>
      <section className="my-4">
        <h3 id="resources">
          <b>4. Extra Resources</b>
        </h3>
        <h4>Git Commands</h4>
        <ul className="list-disc pl-4">
          <li>
            <span className="code-inline">git init</span>: Initialize a new Git
            repository.
          </li>
          <li>
            <span className="code-inline">git clone [url]</span>: Clone an
            existing repository from a URL.
          </li>
          <li>
            <span className="code-inline">git add [file]</span>: Stage changes
            for the next commit.
          </li>
          <li>
            <span className="code-inline">git add .</span>: Stage all changes
            for the next commit.
          </li>
          <li>
            <span className="code-inline">git commit -m &quot;[your message]&quot;</span>: Commit
            staged changes with a descriptive message.
          </li>
          <li>
            <span className="code-inline">git push</span>: Push local commits to
            the remote repository.
          </li>
          <li>
            <span className="code-inline">git pull</span>: Fetch and merge
            changes from the remote repository to your local repository.
          </li>
        </ul>
        <h4>Official Documentations</h4>
        <ul className="list-disc pl-4">
          <li>
            <Link
              href="https://nextjs.org/docs"
              className="text-tag hover:underline"
              target="_blank"
            >
              Next.js Documentation
            </Link>
          </li>
          <li>
            <Link
              href="https://tailwindcss.com/docs/installation/framework-guides/nextjs"
              className="text-tag hover:underline"
              target="_blank"
            >
              Tailwind CSS Documentation
            </Link>
          </li>
          <li>
            <Link
              href="https://vercel.com/docs"
              className="text-tag hover:underline"
              target="_blank"
            >
              Vercel Documentation
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

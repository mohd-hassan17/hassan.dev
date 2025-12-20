"use client";

import { AiOutlineArrowDown } from "react-icons/ai";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { ShowcaseItem } from "./ShowcaseItem";
import { TransitionLink } from "../utils/TransitionLink";
import styles from "./showcase.module.scss";

export const Showcase = () => {
  const projects = [
    {
      title: "CodeZen",
      img: "/assets/codezen.png",
      code: "https://github.com/mohd-hassan17/CodeZen",
      link: "https://code-zen-rho.vercel.app/",
      tech: ["Next.js", "React.js", "Judge0", "ShadcnUI", "PostgreSQL"],
      desc: "CodeZen is a LeetCode-style coding platform where users can solve programming problems, run code using Judge0, and track their progress.",
      modal: (
        <>
          CodeZen is a LeetCode-inspired coding platform built with Next.js. It
          allows users to solve algorithmic problems, execute code in real time
          using the Judge0 API, and manage problem submissions. The app features
          a clean UI with ShadcnUI and uses PostgreSQL for storing problems,
          user progress, and submissions.
        </>
      ),
    },

    {
      title: "CodeSnippet UI",
      img: "/assets/codesnippetui.png",
      code: "https://github.com/mohd-hassan17/codesnippetui",
      link: "https://codesnippetui-pi.vercel.app/",
      tech: ["Next.js", "React.js", "TypeScript", "FumaDocs", "Motion", "GSAP"],
      desc: "CodeSnippet UI is a shadcn/ui-inspired component library showcasing reusable UI components with smooth animations and documentation.",
      modal: (
        <>
          CodeSnippet UI is a clone inspired by shadcn/ui, focused on reusable,
          modern UI components. It includes well-documented components powered
          by FumaDocs, enhanced with Motion and GSAP animations. Built with
          TypeScript and Next.js, the project demonstrates scalable component
          architecture and polished UI interactions.
        </>
      ),
    },

    {
      title: "Snippet Master",
      img: "/assets/snippetmaster.png",
      code: "https://github.com/mohd-hassan17/",
      link: "https://snippetmaster.vercel.app/",
      tech: ["Next.js", "React.js", "TypeScript", "MongoDB", "TailwindCSS"],
      desc: "Snippet Master is a code snippet management app that allows developers to save, organize, and quickly access reusable code snippets.",
      modal: (
        <>
          Snippet Master is a productivity-focused application for developers to
          store and manage reusable code snippets. Users can save snippets by
          language or category and access them anytime. The app is built with
          Next.js and TypeScript, styled using Tailwind CSS, and uses MongoDB
          for persistent storage.
        </>
      ),
    },

    {
      title: "Converso",
      img: "/assets/converso.jpg",
      code: "https://github.com/mohd-hassan17/converso",
      link: "https://converso-virid.vercel.app/",
      tech: ["Next.js", "Supabase", "Reactjs", "TypeScript", "Vapi"],
      desc: "Converso is an AI-powered learning app where users choose a topic and engage in real-time voice conversations with an intelligent AI tutor.",
      modal: (
        <>
          Converso is an AI-powered learning app where users choose a topic and
          engage in real-time voice conversations with an intelligent AI tutor.
        </>
      ),
    },
    {
      title: "Storeit",
      img: "/assets/codrive1.jpg",
      code: "https://github.com/mohd-hassan17/CoDrive",
      link: "https://storeit-tawny.vercel.app/",
      tech: ["Next.js", "Appwrite", "Reactjs", "TypeScript", "ShadcnUI"],
      desc: "Storeit is a collaborative file-sharing and management platform inspired by Google Drive. It enables users to upload, share, and collaborate in real-time",
      modal: (
        <>
          CoDrive is a collaborative file-sharing and management platform
          inspired by Google Drive. It enables users to upload, organize, share,
          and collaborate on files in real-time, with a focus on simplicity,
          security, and teamwork.
        </>
      ),
    },
    {
      title: "Brainwave",
      img: "/gallery/brainwave.webp",
      code: "https://github.com/mohd-hassan17/",
      link: "https://brainwave-fv.netlify.app",
      tech: ["React", "Tailwind", "GSAP", "Three.js"],
      desc: "Brainwave is a modern UI/UX website built using React.js and Tailwind  CSS, designed with contemporary principles in mind.",
      modal: (
        <>
          Brainwave is a modern UI/UX website built using React.js and Tailwind
          CSS. It features smooth parallax effects and bento box layouts,
          offering a stylish UI. With polished animations.
        </>
      ),
    },

    {
      title: "iPhone 15",
      img: "/gallery/iphone.webp",
      code: "https://github.com/mohd-hassan17",
      link: "https://iphone15-fv.vercel.app",
      tech: ["React", "Three.js", "Tailwind", "GSAP"],
      desc: "A clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of Three.js and GSAP for 3D and animations.",
      modal: (
        <>
          This is a clone of Apple&apos;s iPhone 15 Pro website using React.js
          and TailwindCSS. It highlights the effective use of GSAP (Greensock
          Animations) and Three.js for displaying iPhone 15 Pro models in
          various colors and shapes.
        </>
      ),
    },
    {
      title: "Klimate",
      img: "/assets/klimate.jpg",
      code: "https://github.com/mohd-hassan17/Klimate",
      link: "https://klimate-wine.vercel.app/",
      tech: ["Next.js", "Reactjs", "TypeScript", "TanStack"],
      desc: "Klimate is ideal for users who want a minimalistic, fast, and reliable weather app that instantly adapts to their location without manual input.",
      modal: (
        <>
          Klimate is a modern, responsive weather application that delivers
          accurate, real-time weather updates based on the user’s current
          location. Built using TanStack Query (React Query) for efficient data
          fetching and caching, Klimate focuses on speed, usability, and clean
          UI.
        </>
      ),
    },

    {
      title: "Codemate",
      img: "/assets/codemate.jpg",
      code: "https://github.com/mohd-hassan17/code-reviewer",
      link: "https://codemate-dun.vercel.app/",
      tech: ["Next.js", "TypeScript", "openAI", "Reactjs", "Appwrite"],
      desc: "Codemate is a AI Code Reviewer is an intelligent tool that helps developers automatically review their code for bugs, bad practices, and performances.",
      modal: (
        <>
          Codemate is a AI Code Reviewer is an intelligent tool that helps
          developers automatically review their code for bugs, bad practices,
          and performance issues using AI-powered analysis. It offers feedback,
          suggestions, and even refactoring tips—acting like a virtual senior
          developer reviewing your pull requests.
        </>
      ),
    },
  ];

  return (
    <section className="section-wrapper text-white " id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.linkToGallery}>
        <TransitionLink href="#" aria-label="View Full Gallery">
          <AiOutlineArrowDown size="2rem" />
          Featured Projects
        </TransitionLink>
      </div>

      <div className={styles.projects}>
        {projects.map((project) => {
          return <ShowcaseItem key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

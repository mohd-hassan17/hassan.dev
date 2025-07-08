'use client'

import { AiOutlineArrowDown } from "react-icons/ai";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { ShowcaseItem } from "./ShowcaseItem";
import { TransitionLink } from "../utils/TransitionLink";
import styles from "./showcase.module.scss";

export const Showcase = () => {

  const projects = [
    {
      title: "CoDrive",
      img: "/assets/codrive.jpg",
      code: "https://github.com/mohd-hassan17/CoDrive",
      link: "https://storeit-tawny.vercel.app/",
      tech: ["Next.js", "appwrite", "Reactjs", "JavaScript", "Figma"],
      desc: "CoDrive is a collaborative file-sharing and management platform inspired by Google Drive.",
      modal: <>CoDrive is a collaborative file-sharing and management platform inspired by Google Drive. It enables users to upload, organize, share, and collaborate on files in real-time, with a focus on simplicity, security, and teamwork.</>,
    },
    {
      title: "Brainwave",
      img: "/gallery/brainwave.webp",
      code: "https://github.com/mohd-hassan17/",
      link: "https://brainwave-fv.netlify.app",
      tech: ["React", "Tailwind", "Vite"],
      desc: "Brainwave is a modern UI/UX website built using React.js and Tailwind  CSS, designed with contemporary principles in mind.",
      modal: <>Brainwave is a modern UI/UX website built using React.js and Tailwind
        CSS, designed with contemporary principles in mind. It features smooth
        parallax effects and bento box layouts, offering a stylish UI that
        adapts well from desktop to mobile devices. With polished animations.
      </>,
    },

    {
      title: "iPhone 15",
      img: "/gallery/iphone.webp",
      code: "https://github.com/mohd-hassan17",
      link: "https://iphone15-fv.vercel.app",
      tech: ["React", "Three.js", "Tailwind", "GSAP"],
      desc: "A clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of Three.js and GSAP for 3D and animations.",
      modal: <>This is a clone of Apple&apos;s iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.</>,
    },
    {
      title: "Klimate",
      img: "/assets/klimate.jpg",
      code: "https://github.com/mohd-hassan17/Klimate",
      link: "https://klimate-wine.vercel.app/",
      tech: ["Next.js", "Reactjs", "TypeScript", "TanStack"],
      desc: "Klimate is ideal for users who want a minimalistic, fast, and reliable weather app that instantly adapts to their location without manual input.",
      modal: <>Klimate is a modern, responsive weather application that delivers accurate, real-time weather updates based on the user’s current location. Built using TanStack Query (React Query) for efficient data fetching and caching, Klimate focuses on speed, usability, and clean UI.</>,
    },

    {
      title: "Codemate",
      img: "/assets/codemate1.jpg",
      code: "https://github.com/mohd-hassan17/code-reviewer",
      link: "https://codemate-dun.vercel.app/",
      tech: ["Next.js", "TypeScript", "openAI", "Tailwind", "appwrite"],
      desc: "AI Code Reviewer is an intelligent tool that helps developers automatically review their code for bugs, bad practices.",
      modal: <>AI Code Reviewer is an intelligent tool that helps developers automatically review their code for bugs, bad practices, and performance issues using AI-powered analysis. It offers feedback, suggestions, and even refactoring tips—acting like a virtual senior developer reviewing your pull requests.</>,
    },

  ];

  return (
    <section className="section-wrapper text-white " id="projects">
      <SectionHeader title='Projects' dir="r" />

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

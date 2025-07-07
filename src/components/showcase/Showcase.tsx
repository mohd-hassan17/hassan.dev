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
      desc: "This is a description.",
      modal: <>This is the modal content</>,
    },
     {
      title: "Brainwave",
      img: "/gallery/brainwave.webp",
      code: "https://github.com/mohd-hassan17/",
      link: "https://brainwave-fv.netlify.app",
      tech: ["React", "Tailwind", "Vite"],
      desc: "This is a description.",
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
      modal: <>This is a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.</>,
    },
    {
      title: "Klimate",
      img: "/assets/klimate.jpg",
      code: "https://github.com/mohd-hassan17/Klimate",
      link: "https://klimate-wine.vercel.app/",
      tech: ["Next.js", "Reactjs", "TypeScript", "TanStack"],
      desc: "This is a description.",
      modal: <>This is the modal content</>,
    },
    
    {
      title: "Codemate",
      img: "/assets/codemate1.jpg",
      code: "https://github.com/mohd-hassan17/code-reviewer",
      link: "https://codemate-dun.vercel.app/",
      tech: ["Next.js", "TypeScript", "openAI", "Tailwind", "appwrite"],
      desc: "This is a description.",
      modal: <>This is the modal content</>,
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

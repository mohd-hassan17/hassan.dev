"use client"

import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowUp } from "react-icons/ai";
import { TransitionLink } from "../utils/TransitionLink";
import { GalleryItem } from "@/components/gallery/GalleryItem";
import styles from "./gallery.module.scss";
import Filter from "./Filter";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("💜");
  const [goUpBtn, setGoUpBtn] = useState(false);

  const [filteredProjects, setFilteredProjects] = useState(
    projects.filter((project) => project.cat.includes("💜"))
  );

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    setFilteredProjects(
      projects.filter((project) => project.cat.includes(filter))
    );
  };

  const handleScroll = () => {
    setGoUpBtn(window.scrollY >= 350);
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <main className={styles.galleryWrapper} id="gallery">
        {/* Back Home */}
        <TransitionLink
          className={styles.goBackBtn}
          href="/#projects"
          aria-label="Back to Homepage">
          <AiOutlineArrowLeft size="2.4rem" />
        </TransitionLink>

        {/* Filter */}
        <Filter activeFilter={activeFilter} handleFilter={handleFilter} />

        {/* Gallery */}
        <section className={styles.galleryItem}>
          {filteredProjects.map((project) => (
            <GalleryItem
              key={`${project.title}-${activeFilter}`}
              {...project}
            />
          ))}
        </section>

        {/* Up Button */}
        <button
          className={styles.goUpBtn}
          style={{ bottom: goUpBtn ? "3rem" : "-50%" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top">
          <AiOutlineArrowUp size="2.4rem" />
        </button>
      </main>
    </>
  );
};

const projects = [
  //! P1 -> NEXT.JS -> APPLICATION(S)
  {
    cat: "💜, App, Next",
    title: "Evently",
    img: "/gallery/evently.webp",
    code: "https://github.com/basedhound/event-platform_app_next",
    link: "https://evently-fv.vercel.app",
    tech: ["Next", "MongoDB", "Tailwind", "TS"],
    modal: (
      <>
        🍵 Built on Next.js 14, the events application stands as a
        comprehensive, full-stack platform for managing events. It serves as a
        hub, spotlighting diverse events taking place globally. Featuring
        seamless payment processing through Stripe, you have the capability to
        purchase tickets for any event or even initiate and manage your own
        events.
        <br />
        <br />
        🥐 
      </>
    ),
  },
  {
    cat: "💜, App, Next",
    title: "Canva clone",
    img: "/gallery/canva.webp",
    code: "https://github.com/basedhound/canva-clone_app_next",
    link: "https://imaginify-fv.vercel.app",
    tech: ["Next", "Rapid API", "Tailwind", "TS"],
    modal: (
      <>
        🍵 An AI image SaaS platform that excels in image processing
        capabilities, integrates a secure payment infrastructure, offers
        advanced image search functionalities, and supports multiple AI
        features—including image restoration, recoloring, object removal,
        generative filling, and background removal.
        <br />
        <br />
        🥐 
      </>
    ),
  },
  {
    cat: "💜, App, Next",
    title: "Car Hub",
    img: "/gallery/carhub.webp",
    code: "https://github.com/basedhound/car-hub_app_next",
    link: "https://carhub-fv.netlify.app/",
    tech: ["Next", "Rapid API", "Tailwind", "TS"],
    modal: (
      <>
        🍵 Developed with Next.js and leveraging its server-side rendering
        capabilities, this Car Showcase website presents various car types,
        showcasing comprehensive information in a well-designed format with
        advanced filtering and pagination support for an enhanced user
        experience.
        <br />
        <br />
        🥐 
      </>
    ),
  },
  {
    cat: "App, Next",
    title: "Threads clone",
    img: "/gallery/threads.webp",
    code: "https://github.com/basedhound/threads-clone_app_next",
    link: "https://threads-fv.vercel.app",
    tech: ["Next", "MongoDB", "Tailwind", "TS"],
    modal: (
      <>
        🍵 Full-stack Threads clone built on Next.js 14+. It includes
        comprehensive user interaction, community management functionalities,
        robust technical implementation, and a range of features like nested
        deep comments, notifications, real-time search, and more.
        <br />
        <br />
        🥐 
      </>
    ),
  },
  {
    cat: "💜, App, Next",
    title: "Podcast AI",
    img: "/gallery/podcast.webp",
    code: "https://github.com/basedhound/podcastr-ai_app_next",
    link: "https://podcastr-fv.vercel.app",
    tech: ["Next", "Plaid", "Dwolla", "TS"],
    modal: (
      <>
        🍵 AI SaaS platform that empowers users to create,
        discover, and enjoy podcasts with advanced features such as
        text-to-audio conversion using multi-voice AI powered by OpenAI API,
        podcast thumbnail image generation, and seamless playback. The platform
        includes secure authentication using Clerk, ensuring a safe and
        personalized user experience.
        <br />
        <br />
        🥐 
      </>
    ),
  },
  {
    cat: "App, Next",
    title: "Zoom clone",
    img: "/gallery/zoom.webp",
    code: "https://github.com/basedhound/zoom-clone_app_next",
    link: "https://yoom-fv.vercel.app",
    tech: ["Next", "GetStream", "Tailwind", "TS"],
    modal: (
      <>
        🍵 Built with the latest Next.js and TypeScript, this project replicates
        Zoom, a widely used video conferencing tool. It enables users to
        securely log in, create meetings and access various meeting
        functionalities such as recording, screen sharing, and managing
        participants.
        <br />
        <br />
        🥐 
      </>
    ),
  },
  {
    cat: "App, Next",
    title: "Horizon Bank",
    img: "/gallery/horizon.webp",
    code: "https://github.com/basedhound/bank-platform_app_next",
    link: "https://horizon-bank-fv.vercel.app",
    tech: ["Next", "Plaid", "Dwolla", "TS"],
    modal: (
      <>
        🍵 Built with Next.js, Horizon is a financial SaaS platform that
        connects to multiple bank accounts, displays transactions in real-time,
        allows users to transfer money to other platform users, and manages
        their finances altogether.
        <br />
        <br />
        🥐 
      </>
    ),
  },
  {
    cat: "💜, App, Next",
    title: "Sales Page Model",
    img: "/gallery/salespage.webp",
    code: "https://demo-sf.vercel.app/",
    link: "https://demo-sf.vercel.app/",
    tech: ["Next", "React", "TS", "MongoDB", "Stripe"],
    modal: (
      <>
        🍵 This is a Next.js starter project designed for fast development,
        featuring NextAuth for authentication, MongoDB for data management, and
        Stripe for payment integration. Built with React, TypeScript, and
        TailwindCSS, it provides a scalable foundation for web apps. It includes
        tools like Axios for HTTP requests, Zod for validation, Mailgun for
        email delivery, and DaisyUI for UI components. With React 18 and Next.js
        14, it&apos;s ideal for building sales pages, e-commerce sites, or apps with
        user and payment management.
        <br />
        <br />
        🥐 
      </>
    ),
  },
  {
    cat: "App, Next",
    title: "Pricewise",
    img: "/gallery/pricewise.webp",
    code: "https://github.com/basedhound/pricewise-scraper_app_next",
    link: "https://pricewise-fv.vercel.app",
    tech: ["Next", "Bright Data", "MongoDB", "TS"],
    modal: (
      <>
        🍵 Developed using Next.js and Bright Datas webunlocker, this
        e-commerce product scraping site is designed to assist users in making
        informed decisions. It notifies users when a product drops in price and
        helps competitors by alerting them when the product is out of stock, all
        managed through cron jobs.
        <br />
        <br />
        🥐 
      </>
    ),
  },
  {
    cat: "App, Next",
    title: "Prompt Share",
    img: "/gallery/promptshare.webp",
    code: "https://github.com/basedhound/prompt-share_app_next",
    link: "https://prompt-share-fv.vercel.app",
    tech: ["Next", "MongoDB", "Tailwind", "TS"],
    modal: (
      <>
        🍵 Next.js application designed for seamless AI prompt sharing between
        users. Explore, create, and share prompts effortlessly with MongoDB
        integration and secure authentication via NextAuth. Enjoy a modern
        design and responsive interface for optimal user experience.
        <br />
        <br />
        🥐 
      </>
    ),
  },
  {
    cat: "App, Next",
    title: "Figma clone",
    img: "/gallery/figma.webp",
    code: "https://github.com/basedhound/figma-clone_app_next",
    link: "https://figpro-fv.vercel.app",
    tech: ["Next", "LiveBlocks", "Fabric", "TS"],
    modal: (
      <>
        🍵 A minimalistic Figma clone to show how to add real-world features
        like live collaboration with cursor chat, comments, reactions, and
        drawing designs (shapes, image upload) on the canvas using fabric.js.
        <br />
        <br />
        🥐 
      </>
    ),
  },
  {
    cat: "App, Next",
    title: "AnimeDB",
    img: "/gallery/animedb.webp",
    code: "https://github.com/basedhound/anime-db_app_next",
    link: "https://animedb-fv.netlify.app",
    tech: ["Next", "Rapid API", "Framer", "TS"],
    modal: (
      <>
        🍵 Explore your favorite anime with this Next.js application powered by
        Shikimori API. Discover new shows, enjoy seamless scrolling through an
        extensive anime database, and experience smooth transitions with Framer
        Motion.
        <br />
        <br />
        </>
    ),
  },
  //! P2 -> NEXT.JS -> UI/X ONLY
  {
    cat: "Design, Next",
    title: "Portfolio v3",
    img: "/gallery/portfolio3.webp",
    code: "https://github.com/basedhound/portfolio-v3_next",
    link: "/",
    tech: ["Next", "Sass", "Framer", "TypeScript"],
    modal: (
      <>
        🍵 This portfolio is a showcase of my skills, built with React and
        powered by Next.js. Ive leveraged TypeScript to ensure robust code
        quality and maintainability. A styling system crafted with Sass brings a
        polished visual identity to life. And, with Framer Motion and Anime.js,
        Ive added a touch of dynamism with smooth animations and transitions,
        creating an engaging user experience.
        <br />
        <br />
        </>
    ),
  },
  {
    cat: "Design, Next",
    title: "Spotlight",
    img: "/gallery/spotlight.webp",
    code: "https://github.com/basedhound/spotlight_portfolio_next",
    link: "https://spotlight-fv.netlify.app",
    tech: ["Next", "Threejs", "Framer", "TS"],
    modal: (
      <>
        🍵 Built with Next.js for handling the user interface, Three.js for
        rendering 3D elements, Framer motion for beautiful animations, and
        styled with TailwindCSS, this portfolio demonstrates the developers
        skills in a unique manner that creates a lasting impact.
        <br />
        <br />
      
      </>
    ),
  },
  {
    cat: "Design, Next",
    title: "Hilink",
    img: "/gallery/hilink.webp",
    code: "https://github.com/basedhound/hilink-travel_ui_next",
    link: "https://hilink-travel-fv.netlify.app",
    tech: ["Next", "Tailwind", "TypeScript"],
    modal: (
      <>
        🍵 Modern landing page design for a travel website built with Next.js,
        TailwindCSS, and TypeScript. This project leverages Next.js for
        server-side rendering (SSR) and static site generation (SSG), enhancing
        performance and SEO while offering features like automatic code
        splitting and API routes. TailwindCSS is used for its utility-first
        approach, enabling rapid UI development with pre-built classes for
        custom design and consistent styling. TypeScript ensures robust and
        maintainable code by providing static typing, which helps in catching
        errors early and improving overall application stability. The
        combination of these technologies results in a high-performance,
        visually appealing landing page tailored for travel enthusiasts.
        <br />
        <br />
        
      </>
    ),
  },

  //! P3 -> REACT -> APPLICATION(S)
  {
    cat: "App, React",
    title: "Refine Dashboard",
    img: "/gallery/refine.webp",
    code: "https://github.com/basedhound/dashboard_app_react-refine",
    link: "https://dashboard-refine-fv.netlify.app",
    tech: ["React", "Refine", "GraphQL"],
    modal: (
      <>
        🍵 React-based internal tools, admin panels, dashboards, B2B apps with
        flexibility in mind. An open-source, headless React meta-framework,
        developed with a commitment to best practices, flexibility, minimal tech
        debt, and team alignment, could be a perfect fit for dynamic
        environments.
        <br />
        <br />
       
      </>
    ),
  },
  {
    cat: "💜, App, React",
    title: "3D T-Shirts",
    img: "/gallery/tshirts3d.webp",
    code: "https://github.com/basedhound/3d-tshirts_app_react",
    link: "https://3d-tshirts-fv.netlify.app",
    tech: ["React", "Threejs", "Node", "MongoDB"],
    modal: (
      <>
        🍵 Create your own style with this 3D Customization App. Pick colors,
        add logos, and try AI designs to make your virtual swag unique. Built
        using React.js, Three.js, and OpenAI.
        <br />
        <br />
      
      </>
    ),
  },
  {
    cat: "App, React",
    title: "Summarize AI",
    img: "/gallery/summarize.webp",
    code: "https://github.com/basedhound/summarizer-ai_react",
    link: "https://summarize-fv.netlify.app",
    tech: ["React", "OpenAI", "Rapid API"],
    modal: (
      <>
        🍵 Summarize any article with one click using the powerful OpenAI model.
        This web app features a modern interface, allowing users to input
        article URLs for concise AI-generated summaries. It saves summaries
        locally for easy history management and offers copy-to-clipboard
        functionality for effortless sharing. Advanced RTK Query API requests
        optimize data fetching and management.
        <br />
        <br />
     </>
    ),
  },
  {
    cat: "💜, App, React",
    title: "Instagram clone",
    img: "/gallery/snapgram.webp",
    code: "https://github.com/basedhound/instagram-clone_app_react",
    link: "https://snapgram-fv.vercel.app",
    tech: ["React", "Appwrite", "TanStack"],
    modal: (
      <>
        🍵 Explore social media with this user-friendly platform that has a nice
        look and lots of features. Easily create and explore posts, and enjoy a
        strong authentication system and quick data fetching using React Query
        for a smooth user experience.
        <br />
        <br />
      </>
    ),
  },
  {
    cat: "App, React",
    title: "GM Social",
    img: "/gallery/gmsocial.webp",
    code: "https://github.com/basedhound/gm-social_app_react",
    link: "https://github.com/basedhound/gm-social_app_react",
    tech: ["React", "Node", "Express", "MongoDB"],
    modal: (
      <>
        🍵 A fullstack social media application built with the MERN stack
        (React, Node.js, Express, MongoDB) as the final project for the Web
        Developer course at OpenClassrooms. This project involves creating a
        complete social media platform from scratch, featuring robust CRUD
        operations for users, posts, and admin accounts. The backend includes
        enhanced security measures using Helmet, Crypto-js, Bcrypt, and more. It
        demonstrates comprehensive skills in both frontend and backend
        development, including user authentication, database management, and
        dynamic interactions.
        <br />
        <br />
    </>
    ),
  },
  {
    cat: "App, React",
    title: "Workout",
    img: "/gallery/workout.webp",
    code: "https://github.com/basedhound/workout_app_react",
    link: "https://workout-app-fv.netlify.app",
    tech: ["React", "Rapid API", "Material UI"],
    modal: (
      <>
        🍵 Fitness application built on React.js that offers a comprehensive
        suite of features to enhance your workout experience. With the
        functionality to choose exercise categories and specific muscle groups,
        users can browse through a library of over one thousand exercises, each
        accompanied by practical examples. The application supports pagination
        for easy navigation and provides detailed information for each exercise.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "App, React",
    title: "CryptoDB",
    img: "/gallery/cryptodb.webp",
    code: "https://github.com/basedhound/cryptodb_app_react",
    link: "https://cryptodb-fv.netlify.app",
    tech: ["React", "Rapid API", "Redux"],
    modal: (
      <>
        🍵 CryptoDB is a React application that integrates RapidAPI for features
        such as Bing News Search and Crypto Ranking. It utilizes Redux Toolkit
        for efficient state management, Ant Design for polished UI components,
        and Chart.js for dynamic data visualization.
        <br />
        <br />
        </>
    ),
  },
  {
    cat: "App, React",
    title: "Budget",
    img: "/gallery/budget.webp",
    code: "https://github.com/basedhound/budget-app_react",
    link: "https://budget-fv.netlify.app",
    tech: ["React", "Bootstrap"],
    modal: (
      <>
        🍵 Budgeting application built using React, focusing on CRUD (Create,
        Read, Update, Delete) operations. It covers intermediate and
        beginner-level React concepts, demonstrating how to manage budget data
        effectively.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "App, React",
    title: "Notes",
    img: "/gallery/notes.webp",
    code: "https://github.com/basedhound/summarizer-ai_react",
    link: "https://notes-fv.netlify.app",
    tech: ["React", "Bootstrap", "TypeScript"],
    modal: (
      <>
        🍵 Summarize any article with one click using the powerful OpenAI model.
        This web app features a modern interface, allowing users to input
        article URLs for concise AI-generated summaries. It saves summaries
        locally for easy history management and offers copy-to-clipboard
        functionality for effortless sharing. Advanced RTK Query API requests
        optimize data fetching and management.
        <br />
        <br />
       </>
    ),
  },

  //! P4 -> REACT -> UI/X ONLY
  {
    cat: "💜, Design, React",
    title: "iPhone 15",
    img: "/gallery/iphone.webp",
    code: "https://github.com/basedhound/iPhone-15_ui_react",
    link: "https://iphone15-fv.vercel.app",
    tech: ["React", "GSAP", "Threejs", "Tailwind"],
    modal: (
      <>
        🍵 This is a clone of Apples iPhone 15 Pro website using React.js and
        TailwindCSS. It highlights the effective use of GSAP (Greensock
        Animations) and Three.js for displaying iPhone 15 Pro models in various
        colors and shapes.
        <br />
        <br />
      </>
    ),
  },
  {
    cat: "💜, Design, React",
    title: "3D Island",
    img: "/gallery/island3d.webp",
    code: "https://github.com/basedhound/3d-island_portfolio_react",
    link: "https://3d-island-fv.vercel.app/",
    tech: ["React", "Threejs", "Tailwind"],
    modal: (
      <>
        🍵 This 3D website, built with React and powered by Three.js, features
        engaging interactive elements. Navigate aboard a small plane to explore
        a floating island and discover various information. On the contact page,
        a fox will dynamically react as you fill out the fields!
        <br />
        <br />
      </>
    ),
  },
  {
    cat: "💜, Design, React",
    title: "Gericht",
    img: "/gallery/gericht.webp",
    code: "https://github.com/basedhound/gericht-restaurant_ui_react",
    link: "https://gericht-restaurant-fv.netlify.app",
    tech: ["React", "CSS", "JS"],
    modal: (
      <>
        🍵 This restaurant landing page showcases a contemporary design
        developed using React, emphasizing reusable functional components and a
        well-organized file and folder structure. It emphasizes mastery of
        fundamental CSS properties such as flex for flexible layout design.
        Responsive design is ensured with meticulously implemented media
        queries, optimizing display across all devices.
        <br />
        <br />
      </>
    ),
  },
  {
    cat: "Design, React",
    title: "HooBank",
    img: "/gallery/hoobank.webp",
    code: "https://github.com/basedhound/hoo-bank_ui_react",
    link: "https://hoobank-fv.netlify.app",
    tech: ["React", "Tailwind", "Vite"],
    modal: (
      <>
        🍵 This bank landing page showcases a contemporary design developed
        using React, emphasizing reusable functional components and a
        well-organized file and folder structure. It integrates Tailwind CSS for
        streamlined styling, emphasizing mastery of fundamental CSS properties
        such as flex for flexible layout design. Responsive design is ensured
        with meticulously implemented media queries, optimizing display across
        all devices.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "💜, Design, React",
    title: "Brainwave",
    img: "/gallery/brainwave.webp",
    code: "https://github.com/basedhound/brainwave_ui_react",
    link: "https://brainwave-fv.netlify.app",
    tech: ["React", "Tailwind", "Vite"],
    modal: (
      <>
        🍵 Brainwave is a modern UI/UX website built using React.js and Tailwind
        CSS, designed with contemporary principles in mind. It features smooth
        parallax effects and bento box layouts, offering a stylish UI that
        adapts well from desktop to mobile devices. With polished animations and
        a user-friendly experience, Brainwave sets a high standard while
        providing inspiration for modern applications and websites.
        <br />
        <br />
      </>
    ),
  },
  {
    cat: "Design, React",
    title: "GPT3",
    img: "/gallery/gpt3.webp",
    code: "https://github.com/basedhound/gpt3_ui_react",
    link: "https://gpt3-fv.netlify.app",
    tech: ["React", "CSS", "JS"],
    modal: (
      <>
        🍵 This landing page features a modern design built with React,
        utilizing functional components for reusability and a structured file
        and folder system. It incorporates fundamental CSS properties for
        mastering Flexbox and Grid, adheres to the CSS BEM Model, and includes
        both soft animations and complex gradients. With perfectly placed media
        queries, the page ensures responsiveness across all devices.
        <br />
        <br />
      </>
    ),
  },
  {
    cat: "Design, React",
    title: "Hua Astro",
    img: "/gallery/hua.webp",
    code: "https://github.com/basedhound/hua-astro_react",
    link: "https://hua-astro-fv.netlify.app",
    tech: ["React", "Astro", "Tailwind", "Framer", "TS"],
    modal: (
      <>
        🍵 This project is a test and my first experience with the Astro
        framework. It showcases a simple portfolio concept for a graphic artist.
        I used React, TypeScript, Astro, Tailwind CSS, and Framer Motion to
        create a visually engaging and interactive site.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "💜, Design, React",
    title: "Nike",
    img: "/gallery/nike.webp",
    code: "https://github.com/basedhound/nike_ui_react",
    link: "https://nike-fv.netlify.app",
    tech: ["React", "Tailwind"],
    modal: (
      <>
        🍵 Modern Nike landing page designed with React and Tailwind CSS,
        featuring a visually appealing hero section, popular products showcase,
        unique About Us section, special offers display, testimonials, and a
        newsletter integration. This project maximizes Tailwind CSS with best
        practices, theming techniques, and JavaScript-like tasks. The entire
        site is mobile-responsive, highlighting Tailwind flexibility and
        design capabilities.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "Design, React",
    title: "K-POP Social",
    img: "/gallery/kpop.webp",
    code: "https://github.com/basedhound/kpop-social_ui_react",
    link: "https://ksocial-fv.netlify.app",
    tech: ["React", "CSS", "JS"],
    modal: (
      <>
        🍵 User interface design for a social media platform inspired by the
        vibrant aesthetic of Kpop culture. Built with React, it features cozy,
        girly color palettes and aesthetics. Leveraging the Mantine library and
        complemented by Unicons, it aims to deliver an engaging and visually
        appealing user experience.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "React",
    title: "Portfolio v2",
    img: "/gallery/portfolio2.webp",
    code: "https://github.com/basedhound/portfolio-v2_react",
    link: "https://portfolio-v2-fv.netlify.app",
    tech: ["React", "Framer", "Swiper.js", "Email.js"],
    modal: (
      <>
        🍵 A modern and minimalist portfolio website crafted using React and
        Vite. The site features smooth animations powered by Framer Motion, a
        responsive carousel implemented with the Swiper library, and also
        typewriter effect which adds a dynamic touch to the text elements.
        Additionally, dynamic filtering and sorting enhance the usability of the
        portfolio. For communication, EmailJS is integrated to enable direct
        contact using the form.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "React",
    title: "Portfolio v1",
    img: "/gallery/portfolio1.webp",
    code: "https://github.com/basedhound/portfolio-v1_reactt",
    link: "https://portfolio-v1-fv.netlify.app",
    tech: ["React", "Sanity", "Framer", "Sass"],
    modal: (
      <>
        🍵 Portfolio website built using React for dynamic UI components and
        Sanity as a headless CMS for flexible content management. The project
        also incorporates Framer Motion for smooth animations and Sass for
        maintainable styles. This portfolio demonstrates my skills in leveraging
        modern web technologies to create a dynamic and visually appealing
        online presence.
        <br />
        <br />
       </>
    ),
  },
  //! P5 -> MOBILE
  {
    cat: "Mobile",
    title: "Aora Video",
    img: "/gallery/aora.webp",
    code: "https://github.com/basedhound/video-sharing_react-native",
    link: "/",
    tech: ["React Native", "Expo", "Appwrite"],
    modal: (
      <>
        🍵 Built with React Native for seamless user experiences, Animatable for
        captivating animations, and integrated with the dependable backend
        systems of Appwrite, this app showcases modern design and functionality,
        enabling seamless sharing of videos within the community.
        <br />
        <br />
        </>
    ),
  },
  {
    cat: "Mobile",
    title: "Job Seeker",
    img: "/gallery/jobseek.webp",
    code: "https://github.com/basedhound/job-seeker_react-native",
    link: "/",
    tech: ["React Native", "Expo", "Rapide API"],
    modal: (
      <>
        🍵 A hands-on experience in React Native development, this project
        involves building a feature-rich job seeker app with a strong focus on
        UI/UX, external data integration, and best practices. The app leverages
        RapidAPI to efficiently help users find job opportunities.
        
        <br />
       </>
    ),
  },

  //! P6 -> HTML/CSS/JS
  {
    cat: "Design, ",
    title: "Modern Scroll",
    img: "/gallery/modernscroll.webp",
    code: "https://github.com/basedhound/scroll-animation_js",
    link: "https://scroll-animation-fv.netlify.app",
    tech: ["HTML", "CSS", "JS"],
    modal: (
      <>
        🍵 Landing page featuring a modern scroll animation, built using only
        HTML, CSS, and JavaScript, without any libraries. This design
        incorporates smooth, engaging animations triggered by scrolling,
        enhancing user interaction and visual appeal with a clean and
        contemporary aesthetic.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "Design",
    title: "Accessories",
    img: "/gallery/accessories.webp",
    code: "https://github.com/basedhound/accessory-shop_ui",
    link: "https://accessories-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for an accessory shop featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "💜, Design",
    title: "Clothing",
    img: "/gallery/clothing.webp",
    code: "https://github.com/basedhound/clothing-shop_ui",
    link: "https://clothing-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a clothing shop featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "Design",
    title: "Coffee",
    img: "/gallery/coffee1.webp",
    code: "https://github.com/basedhound/coffee-brand-1_ui",
    link: "https://coffee-1-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a coffee brand featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "💜, Design",
    title: "Coffee 2",
    img: "/gallery/coffee2.webp",
    code: "https://github.com/basedhound/coffee-brand-2_ui",
    link: "https://coffee-2-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a coffee brand featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "Design",
    title: "Coffee 3D",
    img: "/gallery/coffee3.webp",
    code: "https://github.com/basedhound/coffee-3d_ui",
    link: "https://coffee-3d-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a coffee brand featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
      </>
    ),
  },
  {
    cat: "Design",
    title: "Christmas 1",
    img: "/gallery/christmas1.webp",
    code: "https://github.com/basedhound/christmas-1_ui",
    link: "https://christmas-1-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for Christmas Day featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
         </>
    ),
  },
  {
    cat: "Design",
    title: "Christmas 2",
    img: "/gallery/christmas2.webp",
    code: "https://github.com/basedhound/christmas-2_ui",
    link: "https://christmas-2-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for Christmas Day featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
      </>
    ),
  },
  {
    cat: "Design",
    title: "Christmas 3",
    img: "/gallery/christmas3.webp",
    code: "https://github.com/basedhound/christmas-3-parallax_ui",
    link: "https://christmas-3-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for Christmas Day featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
      </>
    ),
  },
  {
    cat: "Design",
    title: "Delivery",
    img: "/gallery/delivery.webp",
    code: "https://github.com/basedhound/delivery-service_ui",
    link: "https://delivery-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a delivery service featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
      </>
    ),
  },
  {
    cat: "Design",
    title: "Electric Cars",
    img: "/gallery/electric-cars.webp",
    code: "https://github.com/basedhound/electric-car-shop_ui",
    link: "https://electric-cars-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for an electric car shop featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "Design",
    title: "Plants",
    img: "/gallery/garden.webp",
    code: "https://github.com/basedhound/plant-shop_ui",
    link: "https://plants-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a gardening shop featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "Design",
    title: "Halloween 1",
    img: "/gallery/halloween1.webp",
    code: "https://github.com/basedhound/halloween-1_ui",
    link: "https://halloween-1-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for Halloween featuring a modern and minimalist
        aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced with smooth
        animations powered by ScrollReveal.js library.
        <br />
        <br />
        </>
    ),
  },
  {
    cat: "Design",
    title: "Halloween 2",
    img: "/gallery/halloween2.webp",
    code: "https://github.com/basedhound/halloween-2_ui",
    link: "https://halloween-2-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for Halloween featuring a modern and minimalist
        aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced with smooth
        animations powered by ScrollReveal.js library.
        <br />
        <br />
        </>
    ),
  },
  {
    cat: "💜, Design",
    title: "Headphones",
    img: "/gallery/headphones.webp",
    code: "https://github.com/basedhound/headphone-shop_ui",
    link: "https://headphones-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a headphone shop featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
      </>
    ),
  },
  {
    cat: "Design",
    title: "Juice Brand",
    img: "/gallery/juice.webp",
    code: "https://github.com/basedhound/juice-brand_ui",
    link: "https://juice-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a juice brand featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
       </>
    ),
  },

  {
    cat: "Design",
    title: "Lamps",
    img: "/gallery/lamps.webp",
    code: "https://github.com/basedhound/lamp-shop_ui",
    link: "https://lamps-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a lamp shop featuring a modern and minimalist
        aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced with smooth
        animations powered by ScrollReveal.js library.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "💜, Design",
    title: "Real Estate",
    img: "/gallery/realestate.webp",
    code: "https://github.com/basedhound/real-estate-agency_ui",
    link: "https://real-estate-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a real estate agency featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
        </>
    ),
  },
  {
    cat: "Design",
    title: "Sneakers",
    img: "/gallery/sneakers.webp",
    code: "https://github.com/basedhound/sneaker-shop_ui",
    link: "https://sneakers-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a sneaker shop featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "Design",
    title: "Space Travel",
    img: "/gallery/space.webp",
    code: "https://github.com/basedhound/space-travel_ui",
    link: "https://space-travel-fv.netlify.app",
    tech: ["HTML", "CSS", "JS"],
    modal: (
      <>
        🍵 A responsive Space Travel website built with HTML, CSS, and
        JavaScript, featuring a modern landing page with interactive elements.
        This project highlights responsive design principles, effective use of
        media queries for adaptive styling, and JavaScript-driven interactions
        to ensure a dynamic and engaging user experience across all devices.
        <br />
        <br />
        </>
    ),
  },

  {
    cat: "💜, Design",
    title: "Sushi",
    img: "/gallery/sushi1.webp",
    code: "https://github.com/basedhound/sushi-restaurant-1_ui",
    link: "https://sushi-1-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Vite"],
    modal: (
      <>
        🍵 Landing page design for a sushi restaurant featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
        </>
    ),
  },

  {
    cat: "💜, Design",
    title: "Sushi 2",
    img: "/gallery/sushi2.webp",
    code: "https://github.com/basedhound/sushi-restaurant-2_ui",
    link: "https://sushi-2-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a sushi restaurant featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "Design",
    title: "Tasty Food",
    img: "/gallery/tasty.webp",
    code: "https://github.com/basedhound/tasty-restaurant_ui",
    link: "https://tasty-restaurant-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a restaurant featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
       </>
    ),
  },

  {
    cat: "Design",
    title: "Travel Agency 1",
    img: "/gallery/travel1.webp",
    code: "https://github.com/basedhound/travel-agency-1_ui",
    link: "https://travel-1-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a travel agency featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
        ScrollReveal.js.
      </>
    ),
  },
  {
    cat: "💜, Design",
    title: "Travel Agency 2",
    img: "/gallery/travel2.webp",
    code: "https://github.com/basedhound/travel-agency-2_ui",
    link: "https://travel-2-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a travel agency featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
     </>
    ),
  },
  {
    cat: "💜, Design",
    title: "Watches",
    img: "/gallery/watches.webp",
    code: "https://github.com/basedhound/watch-shop_ui",
    link: "https://watches-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a watch shop featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
      </>
    ),
  },
  {
    cat: "Design",
    title: "Workout Plan",
    img: "/gallery/workout2.webp",
    code: "https://github.com/basedhound/yoga-coach_ui",
    link: "https://yoga-coach-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a yoga coaching platform featuring a modern
        and minimalist aesthetic, crafted using HTML, CSS, and JavaScript.
        Enhanced with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "Design",
    title: "Yoga Coach",
    img: "/gallery/yoga.webp",
    code: "https://github.com/basedhound/workout-program_ui",
    link: "https://workout-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a workout program featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "Design",
    title: "404 Ghost",
    img: "/gallery/404ghost.webp",
    code: "https://github.com/basedhound/404-ghost_ui",
    link: "https://404-ghost-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Error 404 page design featuring a modern and minimalist aesthetic,
        crafted using HTML, CSS, and JavaScript. Enhanced with smooth animations
        powered by ScrollReveal.js library.
        <br />
        <br />
        </>
    ),
  },

  {
    cat: "Design",
    title: "NFT",
    img: "/gallery/nft.webp",
    code: "https://github.com/basedhound/nft_ui",
    link: "https://nft-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a NFT website featuring a modern and
        minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced
        with smooth animations powered by ScrollReveal.js library.
        <br />
        <br />
      </>
    ),
  },
  {
    cat: "💜, Design",
    title: "IMG Slider",
    img: "/gallery/imgslider1.webp",
    code: "https://github.com/basedhound/background-img-slider-1_js",
    link: "https://bg-img-slider-1.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design featuring a stunning image background slider and
        paradise islands theme. Created using HTML, CSS, and JavaScript, with
        smooth transitions and engaging visuals to captivate visitors. Dynamic
        animations created with GSAP and interactive slider powered by
        Swiper.js.
        <br />
        <br />
     </>
    ),
  },
  {
    cat: "Design",
    title: "IMG Slider 2",
    img: "/gallery/imgslider2.webp",
    code: "https://github.com/basedhound/background-img-slider-2_js",
    link: "https://bg-img-slider-2.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design featuring a stunning image background slider and
        four seasons theme. Created using HTML, CSS, and JavaScript, with smooth
        transitions and engaging visuals to captivate visitors. Interactive
        slider powered by Swiper.js.
        <br />
        <br />
      </>
    ),
  },
  {
    cat: "Design",
    title: "Video BG",
    img: "/gallery/videobg.webp",
    code: "https://github.com/basedhound/background-video_js",
    link: "https://bg-video-1.netlify.app",
    tech: ["HTML", "CSS", "JS"],
    modal: (
      <>
        🍵 Landing page design featuring a captivating video background. Created
        using HTML, CSS, and JavaScript only.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "💜, Design",
    title: "Video Slider",
    img: "/gallery/videoslider.webp",
    code: "https://github.com/basedhound/background-video-slider_js",
    link: "https://bg-video-slider-1.netlify.app",
    tech: ["HTML", "CSS", "JS"],
    modal: (
      <>
        🍵 Landing page design featuring a captivating video background slider
        and an adventure theme. Created using HTML, CSS, and JavaScript only,
        with smooth transitions and engaging visuals to captivate visitors.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "Design",
    title: "Parallax 1",
    img: "/gallery/parallax1.webp",
    code: "https://github.com/basedhound/parallax-mountain-1_js",
    link: "https://parallax-1-fv.netlify.app",
    tech: ["HTML", "CSS", "JS"],
    modal: (
      <>
        🍵 Parallax landing page design featuring a modern and minimalist
        aesthetic, crafted using HTML, CSS, and JavaScript. This project is a
        test to build a parallax effect while scrolling the page.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "Design",
    title: "Parallax 2",
    img: "/gallery/parallax2.webp",
    code: "https://github.com/basedhound/parallax-mountain-2_js",
    link: "https://parallax-2-fv.netlify.app",
    tech: ["HTML", "CSS", "JS"],
    modal: (
      <>
        🍵 Parallax landing page design featuring a modern and minimalist
        aesthetic, crafted using HTML, CSS, and JavaScript. This project is a
        test to build a parallax effect while scrolling the page.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "Design",
    title: "Parallax 3",
    img: "/gallery/parallax3.webp",
    code: "https://github.com/basedhound/parallax-mountain-3_js",
    link: "https://parallax-3-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Parallax landing page design featuring a modern and minimalist
        aesthetic, crafted using HTML, CSS, and JavaScript. This project is a
        test to build a parallax effect while scrolling the page.
        <br />
        <br />
        </>
    ),
  },
  {
    cat: "Design",
    title: "Resume 1",
    img: "/gallery/resume1.webp",
    code: "https://github.com/basedhound/resume-1",
    link: "https://resume-1-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a resume featuring a modern and minimalist
        aesthetic, crafted using HTML, CSS, and JavaScript. It includes a
        dark/light mode and features the ability to download a resume as a PDF
        file.
        <br />
        <br />
       </>
    ),
  },
  {
    cat: "Design",
    title: "Resume 2",
    img: "/gallery/resume2.webp",
    code: "https://github.com/basedhound/resume-2",
    link: "https://resume-2-fv.netlify.app",
    tech: ["HTML", "CSS", "JS", "Sass"],
    modal: (
      <>
        🍵 Landing page design for a resume featuring a modern and minimalist
        aesthetic, crafted using HTML, CSS, and JavaScript. It includes a
        dark/light mode and features the ability to download a resume as a PDF
        file.
        <br />
        <br />
        </>
    ),
  },
  {
    cat: "Design",
    title: "Modern Gallery",
    img: "/gallery/moderngallery.webp",
    code: "https://github.com/basedhound/responsive-gallery_css",
    link: "https://responsive-gallery-fv.netlify.app",
    tech: ["HTML", "CSS", "JS"],
    modal: (
      <>
        🍵 Responsive gallery designed with Flexbox, featuring a modern
        aesthetic and seamless layout adjustments across various devices. Built
        using HTML, CSS, this gallery offers an intuitive and visually appealing
        way to showcase images.
        <br />
        <br />
        </>
    ),
  },
  {
    cat: "Design",
    title: "Ohmyfood",
    img: "/gallery/ohmyfood.webp",
    code: "https://github.com/basedhound/ohmyfood-restaurant_ui",
    link: "https://ohmyfood-fv.netlify.app",
    tech: ["HTML", "CSS", "Sass"],
    modal: (
      <>
        🍵 Landing/Menu pages design for a restaurant featuring a modern and
        minimalist aesthetic, crafted using HTML and CSS only. Enhanced with
        smooth CSS animations built from scratch.
        <br />
        <br />
     par des animations CSS fluides.
      </>
    ),
  },
];

export default Gallery;

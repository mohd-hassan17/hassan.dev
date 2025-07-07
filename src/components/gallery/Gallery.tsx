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
        🥐 Construite avec Next.js 14, cette application se présente comme une
        plateforme complète et évolutive pour la gestion des événements. Elle
        agit comme un hub mettant en lumière une diversité d'événements à
        travers le monde. Intégrant un traitement de paiement fluide via Stripe,
        elle vous permet d'acheter des billets pour n'importe quel événement ou
        même de créer et gérer vos propres événements.
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
        🥐 Une plateforme SaaS d'images IA qui excelle dans les capacités de
        traitement d'images, intègre une infrastructure de paiement sécurisée,
        offre des fonctionnalités avancées de recherche d'images, et prend en
        charge plusieurs fonctionnalités IA, notamment la restauration d'images,
        la recoloration, la suppression d'objets, le remplissage génératif et la
        suppression d'arrière-plan.
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
        🥐 Développé avec Next.js et exploitant ses capacités de rendu côté
        serveur, ce site web de présentation de voitures propose différents
        types de véhicules, offrant des informations détaillées dans un format
        bien conçu avec un support avancé de filtrage et de pagination pour une
        expérience utilisateur améliorée.
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
        🥐 Clone de Threads en full-stack réalisé avec Next.js 14+. Ce projet
        comprend une interaction utilisateur approfondie, des fonctionnalités de
        gestion communautaire, une implémentation technique robuste, ainsi
        qu'une gamme de fonctionnalités telles que des commentaires imbriqués,
        des notifications, une recherche en temps réel, et bien plus encore.
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
        🥐 Une plateforme SaaS d'IA qui permet aux utilisateurs de
        créer, découvrir et écouter des podcasts avec des fonctionnalités
        avancées telles que la conversion texte-en-audio utilisant une IA
        multi-voix alimentée par l'API OpenAI, la génération d'images miniatures
        de podcasts et une lecture fluide. La plateforme inclut une
        authentification sécurisée utilisant Clerk, garantissant une expérience
        utilisateur sûre et personnalisée.
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
        🥐 Construit avec les dernières versions de Next.js et TypeScript, ce
        projet réplique Zoom, un outil populaire de visioconférence. Il permet
        aux utilisateurs de se connecter en toute sécurité, de créer des
        réunions et d'accéder à diverses fonctionnalités de réunion telles que
        l'enregistrement, le partage d'écran et la gestion des participants.
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
        🥐 Construit avec Next.js, Horizon est une plateforme SaaS financière
        qui se connecte à plusieurs comptes bancaires, affiche les transactions
        en temps réel, permet aux utilisateurs de transférer de l'argent à
        d'autres utilisateurs de la plateforme et gère leurs finances de manière
        globale.
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
        14, it's ideal for building sales pages, e-commerce sites, or apps with
        user and payment management.
        <br />
        <br />
        🥐 Il s'agit d'un projet de démarrage Next.js conçu pour un
        développement rapide, avec NextAuth pour l'authentification, MongoDB
        pour la gestion des données et Stripe pour l'intégration des paiements.
        Construit avec React, TypeScript et TailwindCSS, il offre une base
        évolutive pour les applications web. Il inclut des outils comme Axios
        pour les requêtes HTTP, Zod pour la validation, Mailgun pour la gestion
        des e-mails et DaisyUI pour les composants UI. Avec React 18 et Next.js
        14, il est idéal pour créer des pages de vente, des sites e-commerce ou
        des applications avec gestion des utilisateurs et des paiements.
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
        🍵 Developed using Next.js and Bright Data's webunlocker, this
        e-commerce product scraping site is designed to assist users in making
        informed decisions. It notifies users when a product drops in price and
        helps competitors by alerting them when the product is out of stock, all
        managed through cron jobs.
        <br />
        <br />
        🥐 Développé avec Next.js et le webunlocker de Bright Data, ce site de
        scraping de produits e-commerce est conçu pour aider les utilisateurs à
        prendre des décisions éclairées. Il informe les utilisateurs lorsque le
        prix d'un produit baisse et aide les concurrents en les alertant lorsque
        le produit est en rupture de stock, le tout géré à travers des tâches
        cron.
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
        🥐 Application Next.js conçue pour le partage prompts entre
        utilisateurs. Découvrez, créez et partagez des prompts facilement grâce
        à l'intégration MongoDB et à l'authentification sécurisée via NextAuth.
        Profitez d'un design moderne et d'une interface responsive pour une
        expérience utilisateur optimale.
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
        🥐 Un clone minimaliste de Figma conçu pour illustrer l'intégration de
        fonctionnalités réalistes telles que la collaboration en temps réel avec
        chat de curseur, commentaires, réactions, ainsi que la création de
        designs (formes, téléchargement d'images) sur le canevas à l'aide de
        fabric.js.
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
        🥐 Explorez vos animes préférés facilement avec cette application
        Next.js alimentée par l'API Shikimori. Décrouvrez de nouvelles séries,
        profitez d'un défilement fluide à travers une vaste base de données
        d'animes et d'animations modernes avec Framer Motion.
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
        powered by Next.js. I've leveraged TypeScript to ensure robust code
        quality and maintainability. A styling system crafted with Sass brings a
        polished visual identity to life. And, with Framer Motion and Anime.js,
        I've added a touch of dynamism with smooth animations and transitions,
        creating an engaging user experience.
        <br />
        <br />
        🥐 Ce portfolio est une vitrine de mes compétences, conçu avec React et
        propulsé par Next.js. J'ai mis à profit TypeScript pour assurer une
        qualité de code robuste et maintenable. Un système de styling conçu avec
        Sass donne vie à une identité visuelle soignée. Et, avec Framer Motion
        et Anime.js, j'ai ajouté une touche de dynamisme avec des animations et
        des transitions fluides, créant une expérience utilisateur engageante.
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
        styled with TailwindCSS, this portfolio demonstrates the developer's
        skills in a unique manner that creates a lasting impact.
        <br />
        <br />
        🥐 Conçu avec Next.js pour l'interface utilisateur, Three.js pour le
        rendu 3D, Framer Motion pour des animations élégantes, et stylisé avec
        TailwindCSS, ce portfolio illustre les compétences du développeur de
        manière moderne et marquante.
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
        🥐 Page d'accueil au design moderne pour un site de voyage, développée
        avec Next.js, TailwindCSS et TypeScript. Ce projet utilise Next.js pour
        le rendu côté serveur (SSR) et la génération de sites statiques (SSG),
        optimisant les performances et le SEO avec des fonctionnalités comme le
        découpage automatique du code et les routes API. TailwindCSS facilite le
        développement rapide de l'interface utilisateur grâce à ses classes
        utilitaires, permettant un design personnalisé et cohérent. TypeScript
        améliore la robustesse et la maintenabilité du code en offrant une
        typage statique, ce qui permet de détecter les erreurs tôt et d'assurer
        la stabilité de l'application.
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
        🥐 Applications internes, panneaux d'administration, tableaux de bord et
        applications B2B basés sur React, conçus pour offrir une grande
        flexibilité. Développé selon les meilleures pratiques, favorisant la
        flexibilité, minimisant la dette technique et favorisant l'alignement
        d'équipe, idéal pour les environnements dynamiques.
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
        🥐 Créez votre propre style avec cette application de personnalisation
        3D. Choisissez vos couleurs, ajoutez des logos et essayez des designs IA
        pour rendre votre style virtuel unique. Réalisée avec React.js, Three.js
        et OpenAI.
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
        🥐 Résumez n'importe quel article en un clic grâce au puissant modèle
        OpenAI. Cette application web offre une interface moderne et conviviale,
        permettant aux utilisateurs d'entrer des URL d'articles pour obtenir des
        résumés concis générés par l'IA. Les résumés sont enregistrés localement
        pour une gestion facile de l'historique, et une fonction de copie dans
        le presse-papiers facilite le partage. Les requêtes API avancées de RTK
        Query optimisent la récupération et la gestion des données.
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
        🥐 Explorez les réseaux sociaux avec cette plateforme conviviale, au
        design élégant et riche en fonctionnalités. Créez et découvrez des
        publications facilement, et bénéficiez d'un système d'authentification
        sécurisé ainsi que d'une récupération rapide des données grâce à React
        Query, pour une expérience utilisateur fluide et agréable.
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
        🥐 Une application de réseau social fullstack construite avec le stack
        MERN (React, Node.js, Express, MongoDB) dans le cadre du projet final du
        cours de Développeur Web à OpenClassrooms. Ce projet consiste à créer
        une plateforme de réseau social complète, avec des opérations CRUD
        robustes pour les utilisateurs, les publications et les comptes
        administrateurs. Le backend intègre des mesures de sécurité avancées
        telles que Helmet, Crypto-js, Bcrypt, et plus encore. Il démontre des
        compétences complètes en développement frontend et backend, incluant
        l'authentification des utilisateurs, la gestion de la base de données,
        et des interactions dynamiques.
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
        🥐 Application de fitness construite avec React.js qui offre une suite
        complète de fonctionnalités pour améliorer votre expérience
        d'entraînement. Grâce à la possibilité de choisir des catégories
        d'exercices et des groupes musculaires spécifiques, les utilisateurs
        peuvent parcourir une bibliothèque de plus de mille exercices, chacun
        accompagné d'exemples pratiques. L'application prend en charge la
        pagination pour une navigation facile et fournit des informations
        détaillées pour chaque exercice.
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
        🥐 CryptoDB est une application React qui intègre RapidAPI pour des
        fonctionnalités telles que la recherche d'actualités Bing et le
        classement des cryptomonnaies. Elle utilise Redux Toolkit pour une
        gestion efficace de l'état, Ant Design pour des composants d'interface
        utilisateur élégants, et Chart.js pour la visualisation dynamique des
        données.
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
        🥐 Application de gestion de budget construite avec React, mettant
        l'accent sur les opérations CRUD (Create, Read, Update, Delete). Elle
        couvre des concepts intermédiaires et débutants de React, démontrant
        comment gérer efficacement les données budgétaires.
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
        🥐 Résumez n'importe quel article en un clic grâce au puissant modèle
        OpenAI. Cette application web offre une interface moderne et conviviale,
        permettant aux utilisateurs d'entrer des URL d'articles pour obtenir des
        résumés concis générés par l'IA. Les résumés sont enregistrés localement
        pour une gestion facile de l'historique, et une fonction de copie dans
        le presse-papiers facilite le partage. Les requêtes API avancées de RTK
        Query optimisent la récupération et la gestion des données.
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
        🍵 This is a clone of Apple's iPhone 15 Pro website using React.js and
        TailwindCSS. It highlights the effective use of GSAP (Greensock
        Animations) and Three.js for displaying iPhone 15 Pro models in various
        colors and shapes.
        <br />
        <br />
        🥐 Ceci est un clone du site web de l'iPhone 15 Pro d'Apple utilisant
        React.js et TailwindCSS. Il met en avant l'utilisation efficace de GSAP
        (Greensock Animations) et de Three.js pour afficher les modèles d'iPhone
        15 Pro dans diverses couleurs et formes.
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
        🥐 Ce site web 3D, construit avec React et propulsé par Three.js,
        propose des éléments interactifs captivants. Naviguez à bord d'un petit
        avion pour explorer une île flottante et découvrir diverses
        informations. Sur la page de contact, un renard réagira dynamiquement à
        mesure que vous remplirez les champs !
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
        🥐 Cette page d'accueil présente un design contemporain développé avec
        React, mettant l'accent sur l'utilisation de composants fonctionnels
        réutilisables et une structure de fichiers bien organisée. Elle en avant
        la maîtrise des propriétés CSS fondamentales telles que flex pour des
        designs de mise en page flexibles. Le design responsive est assuré grâce
        à des media queries soigneusement implémentées, optimisant l'affichage
        sur tous les appareils.
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
        🥐 Cette page d'accueil présente un design contemporain développé avec
        React, mettant l'accent sur l'utilisation de composants fonctionnels
        réutilisables et une structure de fichiers bien organisée. Elle intègre
        Tailwind CSS pour un style simplifié, mettant en avant la maîtrise des
        propriétés CSS fondamentales telles que flex pour des designs de mise en
        page flexibles. Le design responsive est assuré grâce à des media
        queries soigneusement implémentées, optimisant l'affichage sur tous les
        appareils.
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
        🥐 Brainwave est un site web UI/UX moderne créé avec React.js et
        Tailwind CSS, qui incarne les principes actuels du design. Il présente
        des effets de parallaxe fluides et des mises en page bento box, offrant
        une interface élégante adaptée aussi bien aux ordinateurs de bureau
        qu'aux appareils mobiles. Avec des animations soignées et une expérience
        utilisateur exceptionnelle, Brainwave se distingue comme une source
        d'inspiration pour les applications et sites web contemporains.
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
        🥐 Cette page d'accueil arbore un design moderne réalisé avec React,
        exploitant des composants fonctionnels pour leur réutilisabilité. Elle
        intègre des propriétés CSS essentielles pour maîtriser Flexbox et Grid,
        respecte le modèle BEM de CSS, et propose des animations subtiles ainsi
        que des dégradés complexes. Grâce à des media queries judicieusement
        placées, la page garantit une réactivité optimale sur tous les
        appareils.
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
        🥐 Ce projet est un test et ma première expérience avec le framework
        Astro. Il présente un concept simple de portfolio pour un artiste
        graphique. J'ai utilisé React, TypeScript, Astro, Tailwind CSS et Framer
        Motion pour créer un site visuellement attrayant et interactif.
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
        unique "About Us" section, special offers display, testimonials, and a
        newsletter integration. This project maximizes Tailwind CSS with best
        practices, theming techniques, and JavaScript-like tasks. The entire
        site is mobile-responsive, highlighting Tailwind's flexibility and
        design capabilities.
        <br />
        <br />
        🥐 Page d'accueil moderne pour Nike, conçue avec React et Tailwind CSS.
        Ce projet comprend une section héro captivante, une présentation des
        produits populaires, une section "À propos" originale, des offres
        spéciales, des témoignages, et une intégration de la newsletter. Il
        optimise l'utilisation de Tailwind CSS avec des bonnes pratiques et des
        effets interactifs habituellement réalisés avec JavaScript. Le site est
        entièrement responsive, mettant en valeur la flexibilité et les
        capacités de design de Tailwind.
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
        🥐 Design pour un réseau social inspiré par l'esthétique vibrante de la
        culture Kpop. Développé avec React, il intègre une palette de couleurs
        "girly". Utilisant la bibliothèque Mantine et complété par Unicons,
        l'objectif est de fournir une expérience utilisateur engageante et
        visuellement attrayante.
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
        🥐 Un portfolio moderne et minimaliste réalisé avec React et Vite. Le
        site intègre des animations fluides grâce à Framer Motion, un carrousel
        réactif implémenté avec la bibliothèque Swiper, ainsi qu'un effet de
        machine à écrire qui ajoute une touche dynamique aux éléments textuels.
        Le filtrage ainsi que le tri dynamiques améliorent l'utilisation du
        portfolio. Pour la communication, EmailJS est intégré pour permettre un
        contact direct via le formulaire.
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
        🥐 Portfolio réalisé avec React pour des composants UI dynamiques et
        Sanity comme CMS headless pour une gestion de contenu flexible. Le
        projet utilise également Framer Motion pour des animations fluides et
        Sass pour des styles maintenables. Ce portfolio illustre mes compétences
        dans l’utilisation des technologies web modernes pour créer une présence
        en ligne dynamique et visuellement attrayante.
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
        🥐 Construite avec React Native pour une expérience utilisateur fluide,
        "Animatable" pour des animations captivantes, et intégrée aux systèmes
        backend fiables d'Appwrite, cette application présente un design moderne
        et des fonctionnalités facilitant le partage de vidéos au sein d'une
        communauté.
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
        <br />
        🥐 Une expérience pratique du développement en React Native, ce projet
        consiste à créer une application de recherche d'emploi riche en
        fonctionnalités avec un fort accent sur l'UI/UX, l'intégration de
        données externes et les meilleures pratiques. L'application utilise
        RapidAPI pour aider efficacement les utilisateurs à trouver des
        opportunités d'emploi.
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
        🥐 Page d'accueil avec des animations modernes au défilement, réalisées
        uniquement en HTML, CSS et JavaScrip, sans utilisation de bibliothèque.
        Ce design offre des animations fluides et captivantes qui se déclenchent
        lors du défilement, optimisant l'interaction utilisateur et l'attrait
        visuel avec une esthétique moderne et épurée.
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
        🥐 Page d'accueil pour une boutique d'accessoires, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour une boutique de vêtements, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour une marque de café, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour une marque de café, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour une marque de café, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour la fête de Noël, mettant en avant une esthétique
        moderne et minimaliste, réalisée avec HTML, CSS et JavaScript.
        Agrémentée d'animations fluides grâce à la bibliothèque ScrollReveal.js.
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
        🥐 Page d'accueil pour la fête de Noël, mettant en avant une esthétique
        moderne et minimaliste, réalisée avec HTML, CSS et JavaScript.
        Agrémentée d'animations fluides grâce à la bibliothèque ScrollReveal.js.
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
        🥐 Page d'accueil pour la fête de Noël, mettant en avant une esthétique
        moderne et minimaliste, réalisée avec HTML, CSS et JavaScript.
        Agrémentée d'animations fluides grâce à la bibliothèque ScrollReveal.js.
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
        🥐 Page d'accueil pour un service de livraison, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour une boutique de voitures électriques, mettant en
        avant une esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour une boutique de jardinage, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour Halloween, mettant en avant une esthétique
        moderne et minimaliste, réalisée avec HTML, CSS et JavaScript.
        Agrémentée d'animations fluides grâce à la bibliothèque ScrollReveal.js.
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
        🥐 Page d'accueil pour Halloween, mettant en avant une esthétique
        moderne et minimaliste, réalisée avec HTML, CSS et JavaScript.
        Agrémentée d'animations fluides grâce à la bibliothèque ScrollReveal.js.
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
        🥐 Page d'accueil pour une boutique de casques audio, mettant en avant
        une esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour une marque de jus, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour une boutique de lampes, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour une agence immobilière, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour une boutique de sneakers, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Un site web responsive sur le thème de l'Espace construit avec HTML,
        CSS et JavaScript, présentant une page de destination moderne avec des
        éléments interactifs. Ce projet met en avant les principes de design
        responsive, l'utilisation efficace des media queries pour un style
        adaptatif, et des interactions JavaScript pour garantir une expérience
        utilisateur dynamique et engageante sur tous les appareils.
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
        🥐 Page d'accueil pour un restaurant de sushi, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour un restaurant de sushi, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        <br />
        🥐 Page d'accueil pour un restaurant, mettant en avant une esthétique
        moderne et minimaliste, réalisée avec HTML, CSS et JavaScript.
        Agrémentée d'animations fluides grâce à la bibliothèque ScrollReveal.js.
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
        🥐 Page d'accueil pour une agence du voyage, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
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
        🥐 Page d'accueil pour une agence du voyage, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour une boutique de montres, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour une plateforme de formateurs de yoga, mettant en
        avant une esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page d'accueil pour programme de musculation, mettant en avant une
        esthétique moderne et minimaliste, réalisée avec HTML, CSS et
        JavaScript. Agrémentée d'animations fluides grâce à la bibliothèque
        ScrollReveal.js.
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
        🥐 Page Erreur 404 mettant en avant une esthétique moderne et
        minimaliste, réalisée avec HTML, CSS et JavaScript. Agrémentée
        d'animations fluides grâce à la bibliothèque ScrollReveal.js.
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
        🥐 Page d'accueil pour un site NFT, mettant en avant une esthétique
        moderne et minimaliste, réalisée avec HTML, CSS et JavaScript.
        Agrémentée d'animations fluides grâce à la bibliothèque ScrollReveal.js.
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
        🥐 Page d'accueil intégrant un diaporama d'images en arrière-plan sur
        les thème des îles paradisiaques. Réalisée en HTML, CSS et JavaScript,
        avec des transitions fluides et des visuels captivants pour attirer les
        visiteurs. Animations dynamiques créées avec GSAP et diaporama
        interactif optimisé par Swiper.js.
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
        🥐 Page d'accueil intégrant un diaporama d'images en arrière-plan sur
        les thème des saisons. Réalisée en HTML, CSS et JavaScript, avec des
        transitions fluides et des visuels captivants pour attirer les
        visiteurs. Diaporama interactif optimisé par Swiper.js.
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
        🥐 Page d'accueil avec un background vidéo captivant sur le thème de
        l'Aventure. Réalisée uniquement en HTML, CSS et JavaScript.
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
        🥐 Page d'accueil avec un diaporama de fond vidéo captivant sur le thème
        de l'Aventure. Réalisée uniquement en HTML, CSS et JavaScript, avec des
        transitions fluides et des visuels engageants pour captiver les
        visiteurs.
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
        🥐 Page d'accueil Parallax avec un design moderne et minimaliste,
        réalisée en HTML, CSS et JavaScript. Ce projet est un test pour créer un
        effet de parallaxe lors du défilement de la page.
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
        🥐 Page d'accueil Parallax avec un design moderne et minimaliste,
        réalisée en HTML, CSS et JavaScript. Ce projet est un test pour créer un
        effet de parallaxe lors du défilement de la page.
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
        🥐 Page d'accueil Parallax avec un design moderne et minimaliste,
        réalisée en HTML, CSS et JavaScript. Ce projet est un test pour créer un
        effet de parallaxe lors du défilement de la page.
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
        🥐 Page d'accueil pour un CV, mettant en avant une esthétique moderne et
        minimaliste, réalisée avec HTML, CSS et JavaScript. Il inclut un mode
        sombre/clair et permet de télécharger un CV au format PDF.
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
        🥐 Page d'accueil pour un CV, mettant en avant une esthétique moderne et
        minimaliste, réalisée avec HTML, CSS et JavaScript. Il inclut un mode
        sombre/clair et permet de télécharger un CV au format PDF.
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
        🥐 Galerie responsive conçue avec Flexbox, arborant une esthétique
        moderne et un agencement fluide sur tout type d'appareil. Réalisée en
        HTML et CSS, cette galerie offre un moyen intuitif et visuellement
        attrayant pour présenter des images.
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
        🥐 Pages d'accueil/menu pour un restaurant présentant une esthétique
        moderne et minimaliste, réalisées uniquement avec HTML et CSS. Embellie
        par des animations CSS fluides.
      </>
    ),
  },
];

export default Gallery;

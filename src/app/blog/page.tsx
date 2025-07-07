'use client'

import PageWrapper from "@/components/PageWrapper";
import './blog-section.css';


const AboutPage = () => {
    return (
        <>
        <PageWrapper>
  <section className="blog-section">
  <div className="container-blog">
    <h2>
      My <span className="highlight">Blog</span>
    </h2>
    <p className="intro">
      {`I'm a passionate `}<strong>Fullstack Developer</strong>
      {` crafting seamless user experiences with technologies like `}
      <strong>Next.js, Node.js, MongoDB</strong>
      {`, and more. Currently diving deeper into `}
      <strong>React Native</strong>
      {` to expand into mobile app development. I'm also exploring the exciting world of `}
      <strong>Generative AI</strong>
      {`, building tools that blend creativity and code.`}
    </p>

    <div className="blog-grid">
      <div className="blog-card">
        <h3>Building for Web & Mobile</h3>
        <p>
          {`A breakdown of how I approach building responsive fullstack applications that work seamlessly across devices.`}
        </p>
      </div>

      <div className="blog-card">
        <h3>Getting Started with Generative AI</h3>
        <p>
          {`My personal journey into the world of GenAI—what tools I'm using and how I'm integrating AI into my projects.`}
        </p>
      </div>
    </div>
  </div>
</section>
        </PageWrapper>
        </>
    );
    }

export default AboutPage;
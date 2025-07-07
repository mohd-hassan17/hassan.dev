'use client'

import PageWrapper from "@/components/PageWrapper";
import './services-section.css';


const SectionPage = () => {
    return (
        <>
        <PageWrapper>
  
<section className="services-section">
      <div className="container">
        <h2>
          My <span className="highlight">Services</span>
        </h2>
        <p className="intro">
          As a Fullstack Developer, I offer end-to-end solutions from frontend design to backend development. I’m also exploring
          <strong> React Native</strong> for mobile apps and experimenting with <strong>Generative AI</strong> to bring intelligent features into digital products.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Frontend Development</h3>
            <p>Building responsive and accessible UIs using React, Next.js, and modern design systems.</p>
          </div>

          <div className="service-card">
            <h3>Backend Development</h3>
            <p>Creating scalable APIs and server-side apps with Node.js, Express, and MongoDB.</p>
          </div>

          <div className="service-card">
            <h3>Mobile Development</h3>
            <p>Learning React Native to build cross-platform mobile applications with a native feel.</p>
          </div>

          <div className="service-card">
            <h3>Generative AI Integration</h3>
            <p>Experimenting with LLMs to enhance user experiences through smart, AI-powered features.</p>
          </div>
        </div>
      </div>
    </section>

        </PageWrapper>
        </>
    );
    }

export default SectionPage;
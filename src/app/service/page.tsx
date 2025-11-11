"use client";

import PageWrapper from "@/components/PageWrapper";
import "./services-section.css";


const SectionPage = () => {
  return (
    <>
      <PageWrapper>
        <section className="services-section">
          <div className="container-service">
            <h2>
              My <span className="highlight">Services</span>
            </h2>
            <p className="intro">
              I design and build{" "}
              <strong className="highlight">high-performance web applications{" "}</strong>
              that ensure seamless user experiences, combining clean frontend design, robust backend systems, and <strong className="highlight">AI-powered automation </strong>for smarter, user-focused solutions.{" "}
            </p>

            <div className="services-grid">
              <div className="service-card">
                <h3>Frontend Development</h3>
                <p>
                  Building responsive, accessible, and high-performance UIs with
                  React, Next.js, and modern design systems to deliver seamless
                  user experiences.
                </p>
              </div>

              <div className="service-card">
                <h3>Backend Development</h3>
                <p>
                  Developing secure and scalable APIs, microservices, and
                  server-side applications using Node.js, Express, and databases
                  like MongoDB and PostgreSQL.
                </p>
              </div>

              <div className="service-card">
                <h3>Generative AI Solutions</h3>
                <p>
                  Integrating LLMs and AI frameworks (ChatGPT, LangChain,
                  LangGraph) to build intelligent chatbots, automated workflows,
                  and AI-powered features.
                </p>
              </div>
               <div className="service-card">
                <h3>RAG Applications</h3>
                <p>
                  Building advanced Retrieval-Augmented Generation systems for knowledge-intensive apps with real-time, accurate responses.
                </p>
              </div>
              <div className="service-card">
                <h3>UI/UX Design</h3>
                <p>
                  Crafting clean, user-friendly interfaces and intuitive designs that enhance user engagement.
                </p>
              </div>


               <div className="service-card">
                <h3>Mobile Development</h3>
                <p>
                  Creating cross-platform mobile applications with React Native,
                  combining native performance with the flexibility of
                  JavaScript.
                </p>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
};

export default SectionPage;

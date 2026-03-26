import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <>
      <main className="main-grid">
        {/* <!--profile--> */}
        <Link href="#" className="profile-grid-box bg-gredient">
          <div className="profile-box-text  ">
            <h1 className="font-bold text-3xl">Hi, Mohd Hassan.</h1>
            <p>{`Full-Stack Developer | Specializing in GenAI, scalable systems, and AI-powered SaaS applications, building high-performance and user-focused products.`}</p>
            <Image src="/assets/icon.svg" width={50} height={50} alt="icon" />
          </div>
        </Link>

        <div className="about-project-container">
          <div className="marquee-grid-box bg-gredient">
            <div className="marquee">
              <div className="marquee-content">
                <span>Built by Mohd Hassan 🚀</span>
                <span>Code. Design. Ship. ✨</span>
                <span>From Idea to Launch 🔧</span>
                <span>Modern Web Builds 💻</span>
              </div>
              <div className="marquee-content" aria-hidden="true">
                <span>Built by Mohd Hassan 🚀</span>
                <span>Code. Design. Ship. ✨</span>
                <span>From Idea to Launch 🔧</span>
                <span>Modern Web Builds 💻</span>
              </div>
            </div>
          </div>

          {/* about */}
          <Link href={"/about"} className="box-grid about-grid-box bg-gredient">
            <Image
              src="/assets/sign.png"
              alt="about"
              className="grid-box-img"
              width={200}
              height={100}
            />
            <div className="grid-text-container">
              <div className="grid-text">
                <span>More About Me</span>
                <strong>Resume</strong>
              </div>
              <div className="grid-icon">
                <Image
                  src="/assets/icon.svg"
                  alt="arrow"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </Link>

          {/* work */}

          <Link href={"/projects"} className="box-grid bg-gradient">
            <Image
              src="/assets/my-works.png"
              alt="about"
              className="grid-box-img"
              width={200}
              height={100}
            />
            <div className="grid-text-container">
              <div className="grid-text">
                <span>ShowCase</span>
                <strong>Project </strong>
              </div>
              <div className="grid-icon">
                <Image
                  src="/assets/icon.svg"
                  alt="arrow"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </Link>
        </div>

        {/* blog */}
        <Link href={"/blog"} className="box-grid bg-gredient blog-grid">
          <Image
            src="/assets/gfonts.png"
            alt="about"
            className="grid-box-img"
            width={200}
            height={100}
          />
          <div className="grid-text-container">
            <div className="grid-text">
              <span>My Blog</span>
              <strong>Tech Thoughts</strong>
            </div>
            <div className="grid-icon">
              <Image
                src="/assets/icon.svg"
                alt="arrow"
                width={50}
                height={50}
              />
            </div>
          </div>
        </Link>

        {/* services */}

        <Link href={"/service"} className="box-grid bg-gredient service-grid">
          <div className="service-icon">
            <FontAwesomeIcon icon={["fas", "code"]} className="text-[1.8rem]" />
            <FontAwesomeIcon
              icon={["fas", "gears"]}
              className="text-[1.8rem]"
            />
            <FontAwesomeIcon
              icon={["fas", "pen-fancy"]}
              className="text-[1.8rem]"
            />
            <FontAwesomeIcon
              icon={["fas", "cloud"]}
              className="text-[1.8rem]"
            />
          </div>

          <div className="grid-text-container">
            <div className="grid-text">
              <span> My Services </span>
              <strong> Services </strong>
            </div>
            <div className="grid-icon">
              <Image
                src="/assets/icon.svg"
                alt="arrow"
                width={50}
                height={50}
              />
            </div>
          </div>
        </Link>

        {/* social */}

        <div className="social-grid bg-gredient box-grid">
          <div className="social-container bg-gradient">
            <Link
              href="https://github.com/mohd-hassan17"
              target="_blank"
              className="social-link"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohd-hassan17/"
              target="_blank"
              className="social-link"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </Link>
          </div>

          <div className="grid-text-container">
            <div className="grid-text">
              <span>Follow Me</span>
              <strong>Social</strong>
            </div>
            <div className="grid-icon">
              <Image
                src="/assets/icon.svg"
                alt="arrow"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>

        {/* projects */}

        <div className="project-count-grid box-grid bg-gredient">
          <div className="grid-project-box bg-gredient">
            <span>🌍</span>
            <strong>Fullstack Developer</strong>
          </div>
          <div className="grid-project-box bg-gredient">
            <span>🤖</span>
            <strong> AI & Innovation</strong>
          </div>
          <div className="grid-project-box bg-gredient">
            <span>✨</span>
            <strong>Design & Experience</strong>
          </div>
        </div>

        {/* contact */}
        <Link
          href="/contact"
          className="contact-grid-hero bg-gredient box-grid"
        >
          <Image
            className="contact-grid-top-icon contact-icon-hero"
            src="/assets/icon2.png"
            alt="arrow"
            width={45}
            height={45}
          />
          <h2>
            {`Let's`} <br /> work <span> together.</span>
          </h2>
          <Image
            src="/assets/icon.svg"
            className="contact-icon-hero"
            alt="arrow"
            width={50}
            height={50}
          />
        </Link>
      </main>
      {/* <ContactSection /> */}
    </>
  );
};

export default Hero;

import Header from "@/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode, faGears, faPenFancy, faCloud } from '@fortawesome/free-solid-svg-icons';


const AboutPage = () => {
  return (
    <>
    
<main className="main-grid text-white">
{/* <!--profile--> */}
<Link href="#" className="profile-grid-box bg-gredient">
<div className="profile-box-img">
    
    <Image src="/assets/me.png" width={80} height={80} alt="profile"/>
</div>
<div className="profile-box-text">
<span>A Web Developer</span>
<h1>David Henderson.</h1>
<p>I am a Web Developer Based on san francisco.</p>
    <Image src="/assets/icon.svg" width={50} height={50} alt="icon"/>
</div>
</Link>

<div className="about-project-container">

  <div className="marquee-grid-box bg-gredient">
    <div className="marquee">
      <div className="marquee-content">
        <span>Latest Work And</span> Features - 
        <span>Latest Work And</span> Features - 
        <span>Latest Work And</span> Features - 
        <span>Latest Work And</span> Features -
      </div>
    </div>
  </div>

  {/* about */}
<Link href={"#"} className="box-grid about-grid-box bg-gredient">
<Image src="/assets/sign.png" alt="about" className="grid-box-img" width={200} height={100} />
<div className="grid-text-container">
  <div className="grid-text">
  <span>
    More About Me
  </span>
  <strong>
    Resume
  </strong>
  </div>
  <div className="grid-icon">
    <Image src="/assets/icon.svg" alt="arrow" width={50} height={50} />
  </div>
</div>
</Link>

{/* work */}

<Link href={"#"} className="box-grid bg-gradient">
<Image src="/assets/my-works.png" alt="about" className="grid-box-img" width={200} height={100} />
<div className="grid-text-container">
  <div className="grid-text">
  <span>
   ShowCase
  </span>
  <strong>
Project  </strong>
  </div>
  <div className="grid-icon">
    <Image src="/assets/icon.svg" alt="arrow" width={50} height={50} />
  </div>
</div>
</Link>
</div>

{/* blog */}
<Link href={"#"} className="box-grid bg-gredient blog-grid">
<Image src="/assets/gfonts.png" alt="about" className="grid-box-img" width={200} height={100} />
<div className="grid-text-container">
  <div className="grid-text">
  <span>
    My Blog 
  </span>
  <strong>gfonts</strong>
  </div>
  <div className="grid-icon">
    <Image src="/assets/icon.svg" alt="arrow" width={50} height={50} />
    </div>
</div>
</Link>

{/* services */}

<Link href={"#"} className="box-grid bg-gredient service-grid">  
<div className="service-icon">
<FontAwesomeIcon icon={faCode} className="text-[1.8rem]" />
<FontAwesomeIcon icon={faGears} className="text-[1.8rem]" />
<FontAwesomeIcon icon={faPenFancy} className="text-[1.8rem]" />
<FontAwesomeIcon icon={faCloud} className="text-[1.8rem]" />

</div>

<div className="grid-text-container">
  <div className="grid-text">
  <span> My Services </span>
  <strong> Services </strong>
  </div>
  <div className="grid-icon">
    <Image src="/assets/icon.svg" alt="arrow" width={50} height={50} />
  </div>
</div>
</Link>

{/* social */}

<div className="social-grid bg-gredient box-grid">
  <div className="social-container bg-gradient">
    <Link href="#" className="social-link">
  <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link href="#" className="social-link">
  <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      {/* <Link href="#" className="social-link">
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </Link> */}
  </div>

  <div className="grid-text-container">
    <div className="grid-text">
    <span>Follow Me</span>
    <strong>Social</strong>
</div>
<div className="grid-icon">
    <Image src="/assets/icon.svg" alt="arrow" width={50} height={50} />
  </div>
</div>
    </div>

{/* projects */}

<div className="project-count-grid box-grid bg-gredient">
<div className="grid-project-box bg-gredient">
<span>07</span>
<strong>Years Experience</strong>
</div>
<div className="grid-project-box bg-gredient">
<span>+125</span>
<strong>Client WorldWide</strong>
</div>
<div className="grid-project-box bg-gredient">
<span>+210</span>
<strong>Total Projects</strong>
</div>
</div>

{/* contact */}
<Link href="#" className="contact-grid bg-gredient box-grid">
  <Image className="contact-grid-top-icon" src="/assets/icon2.png" alt="arrow" width={50} height={50} />
  <h2>Let's <br />  work  <span> together.</span></h2>
      <Image src="/assets/icon.svg" alt="arrow" width={50} height={50} />
</Link>

</main>

{/* footer */}
    </>
  );
}   

export default AboutPage;
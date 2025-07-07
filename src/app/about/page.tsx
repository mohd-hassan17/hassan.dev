import Header from "@/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode, faGears, faPenFancy, faCloud } from '@fortawesome/free-solid-svg-icons';
import About from "@/components/About";
import PageWrapper from "@/components/PageWrapper";


const AboutPage = () => {
  return (
    <>
    <PageWrapper>
    <About />
    </PageWrapper>
    </>
  );
}   

export default AboutPage;
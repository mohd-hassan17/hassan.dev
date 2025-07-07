
import { Mail, Linkedin, Github, MailIcon } from "lucide-react";
import Link from "next/link";
// import PageWrapper from "./PageWrapper";

export default function ContactSection() {
  return (
    // <PageWrapper>
    <section
      id="contact"
      className=" flex items-center justify-center  text-white px-4"
    >
      <div className="text-center max-w-2xl py-32">
        <h2 className="textC font-extrabold text-white ">
          Contact<span className="text-blue-400 ">.</span>
        </h2>
        <p className="  text-gray-300 px-2">
          Have an idea to discuss? Shoot me an email if you want to connect! You can also find me on{" "}
          <Link
            href="https://linkedin.com/in/your-profile"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>{" "}
          {`if that's more your speed.`}
        </p>

        <div className="pt-10 space-y-4 ">
          <div className="flex items-center justify-center gap-2">
            <Mail size={20} />
            <span>ansarimohdhassan3@gmail.com</span>
          </div>
          <br />
         
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <Link href="https://www.linkedin.com/in/mohd-hassan17/" target="_blank" aria-label="LinkedIn">
            <Linkedin className="hover:text-blue-400 transition" />
          </Link>
          <Link href="https://github.com/mohd-hassan17" target="_blank" aria-label="GitHub">
            <Github className="hover:text-blue-400 transition" />
          </Link>
          <Link href="mailto:ansarimohdhassan3@gmail.com" aria-label="Email">
            <MailIcon className="hover:text-blue-400 transition" />
          </Link>
        </div>
        <br />
      </div>
    </section>
    // </PageWrapper>
  );
}

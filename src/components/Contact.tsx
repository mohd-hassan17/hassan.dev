import { Mail, Linkedin, Github, MailIcon } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
  id="contact"
  className="flex justify-center text-white px-4 "
>
      <div className="text-center max-w-2xl  ">
        <h2 className="textC font-semibold text-white">
          Contact<span className="text-blue-400">.</span>
        </h2>

        <p className="text-gray-300 px-1 text-[13px] sm:text-[14px] lg:text-[15px]">
          Send an email! Or connect with me on
          {" "}
          <Link
            href="https://linkedin.com/in/your-profile"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          .
        </p>

        <div className="pt-10 space-y-4 ">
          <div className="flex items-center justify-center gap-2">
            <Mail size={14} />
            <span className="text-gray-300 text-[13px] sm:text-[14px] lg:text-[15px]">ansarimohdhassan3@gmail.com</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 ">
          <Link
            href="https://www.linkedin.com/in/mohd-hassan17/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin className="hover:text-blue-400 transition" size={18}/>
          </Link>
          <Link
            href="https://github.com/mohd-hassan17"
            target="_blank"
            aria-label="GitHub"
          >
            <Github className="hover:text-blue-400 transition" size={18}/>
          </Link>
          <Link href="mailto:ansarimohdhassan3@gmail.com" aria-label="Email">
            <MailIcon className="hover:text-blue-400 transition" size={18}/>
          </Link>
        </div>
        <br />
      </div>
    </section>
  );
}

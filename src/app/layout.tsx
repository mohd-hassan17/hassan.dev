import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../lib/fontawesome';
import Header from "@/components/Header";
import ContactSection from "@/components/Contact";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you need
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Mohd Hassan",
  description:
    "I design and build modern web applications powered by Generative AI, creating smart, seamless, and user-centric solutions.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <>
      <html lang="en" >

        <body className={poppins.className} id="root">
          <Header />
          {children}
          <ContactSection />
        </body>
      </html>
    </>
  );
}

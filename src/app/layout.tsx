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
  title: "Hassan.dev",
   description:
    "Full-stack developer skilled in Next.js/React and a versatile tech stack, also offering WordPress site development for small businesses.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default  function RootLayout({
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

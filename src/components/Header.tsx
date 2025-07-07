'use client'

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

  const handleUnavailableCV = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent actual download
    toast.error('CV is currently not available');
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close mobile menu when link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navigation">
        <Link href={'/'}>
          <div className="logo">{`{ Hassan }`}</div>
        </Link>

        {/* Desktop Menu */}
        <ul className="menu desktop-menu">
          <li>
            <Link
              href="/"
              className={isActive('/') ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={isActive('/about') ? 'active' : ''}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={isActive('/projects') ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={isActive('/contact') ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CV Button */}
        <div className="nav-buttons desktop-cv">
          <a
            href="/Resume.pdf"
            // target="_blank"
             onClick={handleUnavailableCV}
            rel="noopener noreferrer"
            className="nav-contact"
          >
            View CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-menu-items">
            <li>
              <Link
                href="/"
                className={isActive('/') ? 'active' : ''}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={isActive('/about') ? 'active' : ''}
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={isActive('/projects') ? 'active' : ''}
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={isActive('/contact') ? 'active' : ''}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
            <li className="mobile-cv">
              <a
                // href="/Resume.pdf"
                onClick={handleUnavailableCV}
                className="nav-contact"
              >
                View CV
              </a>
            </li>
          </ul>
        </div>
     
      </nav>
         <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        // pauseOnHover
        theme="dark"
      />
      <style jsx>{`
        :root {
          --text-color:rgb(255, 255, 255);
          --bg-color: #1a1a1a;
          --accent-color: #8b5cf6;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          // background-color: var(--bg-color);
          color: var(--text-color);
          // font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          // position: sticky;
          top: 0;
          // background: rgba(26, 26, 26, 0.95);
          // backdrop-filter: blur(10px);
          // border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
        }

        .navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 980px;
          width: 60%;
          padding: 30px 0px;
          position: relative;
        }

        .logo {
          font-size: 2rem;
          color: var(--text-color);
          font-weight: 500;
          z-index: 1001;
        }

        .menu {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
        }

        .menu li :global(a) {
          margin: 0px 25px;
          color: var(--text-color);
          opacity: 0.6;
          // transition: all ease 0.3s; 
          text-decoration: none;
          position: relative;
        }

        .menu li :global(a):hover,
        .menu li :global(a).active {
          opacity: 1;
          color: var(--text-color);
        }

        .menu li :global(a).active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--text-color);
          border-radius: 2px;
        }

        .nav-contact {
          background-color: var(--accent-color);
          padding: 10px 20px;
          border-radius: 10px;
          color: white;
          text-decoration: none;
          transition: all ease 0.3s;
          font-weight: 500;
          border:0.5px solid rgb(149, 173, 253);
        }

        .nav-contact:hover {
          background-color:rgb(77, 116, 247);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
           border: 1px solid black;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-color);
          cursor: pointer;
          padding: 5px;
          z-index: 1001;
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: rgba(26, 26, 26, 0.98);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transform: translateX(100%);
          transition: transform 0.3s ease;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu-items {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          list-style: none;
          gap: 2rem;
        }

        .mobile-menu-items li {
          width: 100%;
          text-align: center;
        }

        .mobile-menu-items li :global(a) {
          color: var(--text-color);
          font-size: 1.5rem;
          text-decoration: none;
          opacity: 0.8;
          transition: all ease 0.3s;
          display: block;
          padding: 1rem;
        }

        .mobile-menu-items li :global(a):hover,
        .mobile-menu-items li :global(a).active {
          opacity: 1;
          color: text-white;
        }

        .mobile-cv {
          margin-top: 2rem;
        }

        .mobile-cv .nav-contact {
          font-size: 1.2rem;
          padding: 12px 24px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .navigation {
            padding: 20px 0px;
          }

          .logo {
            font-size: 1.5rem;
          }

          .desktop-menu,
          .desktop-cv {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .mobile-menu {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .navigation {
            width: 95%;
            padding: 15px 0px;
          }

          .logo {
            font-size: 1.3rem;
          }

          .mobile-menu-items li :global(a) {
            font-size: 1.3rem;
          }

          .mobile-cv .nav-contact {
            font-size: 1.1rem;
            padding: 10px 20px;
          }
        }

        /* Tablet Styles */
        @media (max-width: 1024px) and (min-width: 769px) {
          .navigation {
            width: 95%;
          }

          .menu li :global(a) {
            margin: 0px 15px;
          }

          .logo {
            font-size: 1.8rem;
          }
        }

        /* Large Desktop */
        @media (min-width: 1200px) {
          .navigation {
            max-width: 1400px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
'use client'

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
// @ts-ignore
import 'react-toastify/dist/ReactToastify.css';
// @ts-ignore
import './header.css';


const Header = () => {

  // const handleUnavailableCV = (e: React.MouseEvent) => {
  //   e.preventDefault(); // prevent actual download
  //   toast.error('CV is currently not available');
  // };

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
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
                className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CV Button */}
        <div className="nav-buttons desktop-cv">
          <a
            href="https://drive.google.com/file/d/1zIVWY6A8OmJ8_0HyUPDMcC1DjJPPwPwt/view?usp=drive_link"
            target="_blank"
            //  onClick={handleUnavailableCV}
            rel="noopener noreferrer"
            className="nav-contact"
          >
            <button className="">
            View CV
              </button>
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
      className={`mobile-link ${isActive('/') ? 'activee' : ''}`}
      onClick={handleLinkClick}
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      href="/about"
      className={`mobile-link ${isActive('/about') ? 'activee' : ''}`}
      onClick={handleLinkClick}
    >
      About
    </Link>
  </li>
  <li>
    <Link
      href="/projects"
      className={`mobile-link ${isActive('/projects') ? 'activee' : ''}`}
      onClick={handleLinkClick}
    >
      Projects
    </Link>
  </li>
  <li>
    <Link
      href="/contact"
      className={`mobile-link ${isActive('/contact') ? 'activee' : ''}`}
      onClick={handleLinkClick}
    >
      Contact
    </Link>
  </li>
  <li className="mobile-cv">
    <a
     href="https://drive.google.com/file/d/1hNM8ovfpIgypxIWBDGKJKukKaP9kZbBU/view?usp=sharing"
      target="_blank"
      // onClick={handleUnavailableCV}  https://drive.google.com/file/d/1zIVWY6A8OmJ8_0HyUPDMcC1DjJPPwPwt/view?usp=drive_link
      className="nav-contact"
    >
      <button className="">
      View CV
        </ button>
    </a>
  </li>
</ul>

</div>
     
      </nav>
         <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        theme="dark"
      />
    
    </header>
  );
};

export default Header;
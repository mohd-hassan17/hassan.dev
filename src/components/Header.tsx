'use client';

import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ correct hook for App Router

const Header = () => {
  const pathname = usePathname(); // ✅ usePathname instead of useRouter()

  const isActive = (path: string): boolean => pathname === path;

  return (
    <header>
      <nav className="navigation">
        <Link href="/" className="logo">{`{ Hassan }`}</Link>
        
        <ul className="menu">
          <li>
            <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
          </li>
          <li>
            <Link href="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</Link>
          </li>
          <li>
            <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
          </li>
        </ul>

        <div className="nav-buttons">
<a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-contact text-white bg-blue-600 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-700 hover:text-white"
>
  View CV
</a>
        
{/* <Link href="#" className="nav-contact text-white">Let's Talk</Link> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;

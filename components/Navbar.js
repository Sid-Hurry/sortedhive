"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 px-[20px] py-[12px] text-[#1F2937] border-b border-[#d5d4d4bf] shadow-sm bg-white/90 backdrop-blur-md font-gill transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="font-bold text-2xl">
          <Link href="/">SortedHive</Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-5 items-center text-[18px] transition-all duration-300 ease-in-out">
          <li className="hover:scale-105 transition-transform duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <Link href="/texttool">Tools</Link>
          </li>
          <li>
            <Link href="/shorten">
              <button className="bg-[#1F2937] text-[#F0FDFA] px-2 py-1 rounded-md cursor-pointer text-[16px] hover:bg-[#57534E] transition-colors duration-300 font-sans">
                Shortener
              </button>
            </Link>
          </li>
          <li>
            <Link href="/qr">
              <button className="bg-[#1F2937] text-[#F0FDFA] px-2 py-1 rounded-md cursor-pointer text-[16px] hover:bg-[#57534E] transition-colors duration-300 font-sans">
                QR Code
              </button>
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <X className="cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu className="cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Slide-In Mobile Menu */}
      <div
        className={`fixed top-[56px] right-0 w-2/3 h-full bg-white z-40 transition-transform duration-300 ease-in-out shadow-lg md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col pt-4 px-4 gap-4 text-[18px] text-right">
          <li className="hover:scale-105 transition-transform duration-300">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <Link href="/texttool" onClick={() => setMenuOpen(false)}>Tools</Link>
          </li>
          <li>
            <Link href="/shorten" onClick={() => setMenuOpen(false)}>
              <button className="bg-[#1F2937] text-[#F0FDFA] px-2 py-1 rounded-md cursor-pointer text-[16px] hover:bg-[#57534E] transition-colors duration-300 font-sans w-full text-right">
                Shortener
              </button>
            </Link>
          </li>
          <li>
            <Link href="/qr" onClick={() => setMenuOpen(false)}>
              <button className="bg-[#1F2937] text-[#F0FDFA] px-2 py-1 rounded-md cursor-pointer text-[16px] hover:bg-[#57534E] transition-colors duration-300 font-sans w-full text-right">
                QR Code
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

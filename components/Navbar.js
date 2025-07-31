"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll hide/show effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#d5d4d4bf] transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } shadow-sm font-gill`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-[20px] py-[12px]">
        <div className="font-bold text-2xl">
          <Link href="/">SortedHive</Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-5 items-center text-[18px] transition-all duration-300 ease-in-out">
          {["Home", "About", "Contact", "Tools"].map((item) => (
            <li
              key={item}
              className="hover:scale-105 transition-transform duration-300"
            >
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
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

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          {menuOpen ? (
            <X className="cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu className="cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <X className="cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>
        <ul className="flex flex-col pt-4 px-6 gap-4 text-[18px] text-right">
          {["Home", "About", "Contact", "Tools"].map((item) => (
            <li
              key={item}
              className="hover:scale-105 transition-transform duration-300"
            >
              <Link href={`/${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/shorten" onClick={() => setMenuOpen(false)}>
              <button className="bg-[#1F2937] text-[#F0FDFA] w-full py-2 rounded-md cursor-pointer text-[16px] hover:bg-[#57534E] transition-colors duration-300 font-sans">
                Shortener
              </button>
            </Link>
          </li>
          <li>
            <Link href="/qr" onClick={() => setMenuOpen(false)}>
              <button className="bg-[#1F2937] text-[#F0FDFA] w-full py-2 rounded-md cursor-pointer text-[16px] hover:bg-[#57534E] transition-colors duration-300 font-sans">
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

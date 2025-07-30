"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-[20px] py-[12px] text-[#1F2937] border-b border-[#d5d4d4bf] shadow-md font-gill">
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

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          {menuOpen ? (
            <X className="cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu className="cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col mt-4 gap-4 text-[18px] md:hidden items-end text-right pr-4 transition-all duration-300 ease-in-out">
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
              <button className="bg-[#1F2937] text-[#F0FDFA] px-2 py-1 rounded-md cursor-pointer text-[16px] hover:bg-[#57534E] transition-colors duration-300 font-sans">
                Shortener
              </button>
            </Link>
          </li>
          <li>
            <Link href="/qr" onClick={() => setMenuOpen(false)}>
              <button className="bg-[#1F2937] text-[#F0FDFA] px-2 py-1 rounded-md cursor-pointer text-[16px] hover:bg-[#57534E] transition-colors duration-300 font-sans">
                QR Code
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[60px] py-[12px] text-[#1F2937] border-b border-[#d5d4d4bf] shadow-md font-gill">
      <ul>
        <li className="font-bold text-2xl">
          <Link href="/">SortedHive</Link>
        </li>
      </ul>
      <ul className="flex gap-5 justify-center items-center text-[18px] transition-all duration-300 ease-in-out">
        <li className="hover:scale-105 transition-transform duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:scale-105 transition-transform duration-300">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:scale-105 transition-transform duration-300">
          <Link href="/contact">Contact</Link>
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
    </nav>
  );
};

export default Navbar;

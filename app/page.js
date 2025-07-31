"use client";
import Image from "next/image";
import Link from "next/link";
import FloatingChatBot from "@/components/chatbot";
import Lottie from "lottie-react";
import animationData from "@/public/animations/Rocket research.json";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-26 select-none">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center font-gill">
        {/* === LEFT TEXT SIDE === */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Cut the clutter. Keep it short.
          </p>
          <p className="mt-5 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-lg">
            SortedHive is a URL shortener and QR code generator.
            Easily create short links and QR codes in seconds.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
            <Link href="/shorten" className="try w-full sm:w-auto">
              <button className="btnn w-full sm:w-auto">Shortener</button>
            </Link>
            <Link href="/qr" className="try w-full sm:w-auto">
              <button className="btnn w-full sm:w-auto">QR Code</button>
            </Link>
          </div>
        </div>

        {/* === RIGHT ANIMATION SIDE === */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="w-72 sm:w-80 md:w-[480px] h-auto">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </section>

      <FloatingChatBot />
    </div>
  );
}

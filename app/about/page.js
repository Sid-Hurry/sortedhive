"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FloatingChatBot from '@/components/chatbot';

const Page = () => {
  return (
    <div className="select-none font-gill">
      {/* Logo Section */}
      <div className="flex justify-center my-8 sm:my-10">
        <Link href="/qr">
          <Image
            src="/logoo.png"
            alt="SortedHive Logo"
            width={210}
            height={210}
            className="mix-blend-darken max-w-full h-auto"
          />
        </Link>
      </div>

      {/* Features Section */}
      <section className="bg-white px-4 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            SortedHive is a simple and fast URL shortener and QR code generator
            that helps you turn long, messy links into short, clean ones and scannable codes.
            Whether you are sharing links on social media, managing campaigns,
            or just want cleaner URLs — SortedHive gets it done in seconds.
          </p>
          <p className="mt-4 font-bold text-xl sm:text-2xl">
            Curious to try it out? Just click the logo to get started!
          </p>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <FeatureCard title="Lightning Fast" description="Generate short links instantly with a clean and easy-to-use interface. Turn long URLs into short, powerful links effortlessly." />
            <FeatureCard title="Custom Links" description="Customize your shortened URLs with meaningful keywords. Make your links more recognizable, memorable, and easier to manage." />
            <FeatureCard title="QR Code Generator" description="Easily create QR codes for any URL. Perfect for business cards, flyers, posters, and offline sharing." />
            <FeatureCard title="Open Source" description="Built with transparency. View the code, contribute, or fork it your way." />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white">
        <div className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {faqList.map((faq, index) => (
            <details key={index} className="border border-gray-300 rounded-lg p-4 cursor-pointer">
              <summary className="text-base sm:text-lg font-semibold">{faq.question}</summary>
              <div className="mt-2 text-gray-600">{faq.answer}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer Links */}
      <div className="text-center mb-10 px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="https://github.com/Sid-Hurry/sortedhive"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md shadow hover:bg-stone-700 transition w-full sm:w-auto text-center"
          >
            GitHub Repo
          </Link>

          <Link
            href="/analytic"
            className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md shadow hover:bg-stone-700 transition w-full sm:w-auto text-center"
          >
            Analytics (Beta)
          </Link>
        </div>
        <FloatingChatBot />
      </div>
    </div>
  )
}

export default Page;

// === Reusable FeatureCard Component ===
const FeatureCard = ({ title, description }) => (
  <div className="p-6 bg-gray-50 rounded-xl shadow-lg text-left">
    <div className="text-lg sm:text-xl font-semibold mb-2">{title}</div>
    <div className="text-gray-600 text-sm sm:text-base">{description}</div>
  </div>
);

// === FAQ Data ===
const faqList = [
  {
    question: "Is SortedHive free to use?",
    answer:
      "Yes, SortedHive is completely free to use. You can shorten as many links or generate as many QR codes as you would like.",
  },
  {
    question: "Do I need to sign up to shorten URLs or create QR codes?",
    answer:
      "No sign-up is required. Just paste your long URL, click generate, and copy your short link or scan the QR instantly.",
  },
  {
    question: "Can I customize the short link?",
    answer:
      "Yes! You can choose a custom alias for your shortened URL, if it is available.",
  },
  {
    question: "How can I use the QR code feature?",
    answer:
      "After generating your link, go to the QR Generator page, enter the URL, and instantly download or scan your QR code.",
  },
  {
    question: "How long are my short links active?",
    answer:
      "Your links remain active unless deleted manually (feature coming soon...). We do not expire links automatically.",
  },
];

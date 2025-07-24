"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='select-none'>
      <div className='flex justify-center my-10'>
        <Link href={"/qr"}>
          <Image src="/logoo.png" alt="SortedHive Logo" width={200} height={200} className='mix-blend-darken max-w-full h-auto' />
        </Link>
      </div>

      <section className="bg-white font-gill">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            SortedHive is a simple and fast URL shortener and QR code generator that helps you turn long, messy links into short, clean ones and scannable codes. Whether you are sharing links on social media, managing campaigns, or just want cleaner URLs — SortedHive gets it done in seconds.
            <p className='mt-4 font-bold text-2xl'>
              Curious to try it out? Just click the logo to get started!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="p-6 bg-gray-50 rounded-xl shadow-xl">
              <div className="text-xl font-semibold mb-2">Lightning Fast</div>
              <div className="text-gray-600">Generate short links instantly with a clean and easy-to-use interface. Turn long URLs into short, powerful links effortlessly.</div>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow-xl">
              <div className="text-xl font-semibold mb-2">Custom Links</div>
              <div className="text-gray-600">Customize your shortened URLs with meaningful keywords. Make your links more recognizable, memorable, and easier to manage.</div>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow-xl">
              <div className="text-xl font-semibold mb-2">QR Code Generator</div>
              <div className="text-gray-600">Easily create QR codes for any URL. Perfect for business cards, flyers, posters, and offline sharing.</div>
            </div>

            {/* <div className="p-6 bg-gray-50 rounded-xl shadow-xl">
              <div className="text-xl font-semibold mb-2">Trackable</div>
              <div className="text-gray-600">(Coming Soon) Analytics and click tracking for deeper insights.</div>
            </div> */}

            <div className="p-6 bg-gray-50 rounded-xl shadow-xl">
              <div className="text-xl font-semibold mb-2">Open Source</div>
              <div className="text-gray-600">Built with transparency. View the code, contribute, or fork it your way.</div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 bg-white font-gill select-none">
        <div className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          <details className="border border-gray-400 rounded-lg p-4 cursor-pointer">
            <summary className="text-lg font-semibold">Is SortedHive free to use?</summary>
            <div className="mt-2 text-gray-600">
              Yes, SortedHive is completely free to use. You can shorten as many links or generate as many QR codes as you would like.
            </div>
          </details>

          <details className="border border-gray-400 rounded-lg p-4 cursor-pointer">
            <summary className="text-lg font-semibold">Do I need to sign up to shorten URLs or create QR codes?</summary>
            <div className="mt-2 text-gray-600">
              No sign-up is required. Just paste your long URL, click generate, and copy your short link or scan the QR instantly.
            </div>
          </details>

          <details className="border border-gray-400 rounded-lg p-4 cursor-pointer">
            <summary className="text-lg font-semibold">Can I customize the short link?</summary>
            <div className="mt-2 text-gray-600">
              Yes! You can choose a custom alias for your shortened URL, if it is available.
            </div>
          </details>

          <details className="border border-gray-400 rounded-lg p-4 cursor-pointer">
            <summary className="text-lg font-semibold">How can I use the QR code feature?</summary>
            <div className="mt-2 text-gray-600">
              After generating your link, go to the QR Generator page, enter the URL, and instantly download or scan your QR code.
            </div>
          </details>

          <details className="border border-gray-400 rounded-lg p-4 cursor-pointer">
            <summary className="text-lg font-semibold">How long are my short links active?</summary>
            <div className="mt-2 text-gray-600">
              Your links remain active unless deleted manually (feature coming soon...). We do not expire links automatically.
            </div>
          </details>
        </div>
      </section>
  <div className="text-center mb-5 flex flex-col md:flex-row justify-center items-center gap-4">
  <Link
    href="https://github.com/Sid-Hurry?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-md shadow hover:bg-stone-700 transition"
  >
    GitHub Repo
  </Link>

  <Link
    href="/analytic"
    className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-md shadow hover:bg-stone-700 transition"
  >
    Analytics (Beta)
  </Link>
</div>


    </div>
  )
}

export default page;
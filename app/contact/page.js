import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-16 font-gill bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section - Contact Info */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4">
            Let’s Connect
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-3">
            Have something in mind? Let’s talk.
          </p>
          <p className="text-sm sm:text-base text-gray-600 mb-8">
            If you have any inquiries or just want to say hi, please use the
            contact form. I’ll get back to you as soon as possible and am
            looking forward to connecting!
          </p>

          <div className="flex items-center gap-3 mb-6 text-gray-700">
            <Image src="/email.svg" alt="Email Icon" width={24} height={24} />
            <span className="break-all text-sm sm:text-base">
              siddharthhooda0013@gmail.com
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-2">
            <Link
              href="https://github.com/Sid-Hurry"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image
                className="object-contain"
                src="/github.svg"
                alt="GitHub"
                width={26}
                height={26}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/siddharth-hooda-188606324/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image
                className="object-contain"
                src="/icons8-linkedin-50.svg"
                alt="LinkedIn"
                width={26}
                height={26}
              />
            </Link>
            <Link
              href="https://x.com/02_Opinionated?t=wkeK3m3p4Fpj7nUO3x0saw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image
                className="object-contain"
                src="/X_icon.svg.png"
                alt="Twitter / X"
                width={26}
                height={26}
              />
            </Link>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form className="space-y-4 w-full">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-400 p-3 rounded-md bg-white outline-none focus:ring-2 focus:ring-gray-500 transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-400 p-3 rounded-md bg-white outline-none focus:ring-2 focus:ring-gray-500 transition"
            required
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border border-gray-400 p-3 rounded-md bg-white outline-none focus:ring-2 focus:ring-gray-500 transition resize-none"
          ></textarea>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-black hover:bg-stone-700 transition text-lg rounded-md"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

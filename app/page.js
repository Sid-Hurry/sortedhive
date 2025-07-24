import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-12 select-none">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center font-gill">
        <div className="flex flex-col justify-start">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left ">
            Cut the clutter. Keep it short.
          </p>
          <p className="mt-5 text-lg sm:text-xl md:text-2xl text-center md:text-left">
            SortedHive is a URL shortener and QR code generator.
Easily create short links and QR codes in seconds.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <Link href="/shorten" className="try">
              <button className="btnn">Shortener</button>
            </Link>
            {/* <Link href="https://github.com/" target="_blank" className="try">
              <button className="btnn">GitHub</button>
            </Link> */}
            <Link href="/qr" className="try">
              <button className="btnn">Qr Code</button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            className="mix-blend-darken max-w-full h-auto"
            src="/vecteezy_human-interactive-tech-interaction-images-of-robot-human_6552210-1-removebg-preview.png"
            alt="ShrinkHive Visual"
            width={480}
            height={450}
            priority
          />
        </div>
      </section>
    </div>
  );
}
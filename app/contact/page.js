import Image from "next/image";
export default function Contact() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-20 font-gill bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <div>
          <h2 className="text-5xl  text-gray-800 mb-3 ">Lets Connect</h2>
          <p className="text-lg text-gray-600 mb-2">Have something in mind? Let’s talk.</p>
          <p className="text-gray-600 mb-10">
            If you have any inquiries or just want to say hi, please use the contact form.
I’ll get back to you as soon as possible and looking forward to connecting!
          </p>

          <div className="flex items-center gap-2 mb-2 text-gray-700">
            <span className="text-xl"><Image src="/email.svg" alt="Email Icon" width={25} height={25} /></span>
            <a href="mailto:youremail@gmail.com" className="underline hover:text-black transition">
              siddharthhooda0013@gmail.com
            </a>
          </div>

          <div className="flex gap-2 mt-4 text-2xl">
            {/* <span><Image src="/web.svg" alt="Facebook Icon" width={25} height={25} /></span> */}
            <a href="https://github.com/Sid-Hurry" target="_blank" rel="noopener noreferrer"><Image className="object-contain" src="/github.svg" alt="Instagram Icon" width={25} height={25} /></a>
            <a href="https://www.linkedin.com/in/siddharth-hooda-188606324/" target="_blank" rel="noopener noreferrer"><Image className="object-contain" src="/icons8-linkedin-50.svg" alt="Linkedin Icon" width={25} height={25} /></a>
            <a href="https://x.com/02_Opinionated?t=wkeK3m3p4Fpj7nUO3x0saw&s=09" target="_blank" rel="noopener noreferrer"><Image className="object-contain" src="/X_icon.svg.png" alt="Twitter Icon" width={25} height={25} /></a>
          </div>
        </div>

        <form className="space-y-4 w-full">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-400 p-2 bg-transparent outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-400 p-2 bg-transparent outline-none"
            required
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border border-gray-400 p-2 bg-transparent outline-none"
          ></textarea>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-3 py-1.5  text-white bg-black hover:bg-stone-700 transition text-xl rounded-[7px]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
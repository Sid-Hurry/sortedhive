"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        console.log(result);
        setToastMessage(result.message || "Link generated successfully!");
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 5000);
      })
      .catch((error) => {
        console.error("Error occurred while generating short URL:", error);
        setToastMessage("An error occurred while generating the URL. Please try again.");
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 5000);
      });
  };

  return (
    <div className='mx-auto w-full max-w-[90%] sm:max-w-lg bg-gray-50 my-10 p-6 sm:p-8 rounded-lg flex flex-col gap-6 shadow-2xl font-gill'>
      <h1 className='text-2xl sm:text-3xl font-bold text-center text-gray-800'>
        Generate your short URLs
      </h1>

      <div className='flex flex-col gap-4'>
        <input
          type="text"
          value={url}
          className='bg-gray-100 rounded-md p-3 text-base shadow focus:outline-slate-200'
          placeholder='Enter your URL'
          onChange={e => seturl(e.target.value)}
        />
        <input
          type="text"
          value={shorturl}
          className='bg-gray-100 rounded-md p-3 text-base shadow focus:outline-slate-200'
          placeholder='Enter preferred short URL'
          onChange={e => setshorturl(e.target.value)}
        />
      </div>

      <div className='flex justify-center'>
        <button
          onClick={generate}
          className='bg-slate-800 text-white rounded-md px-6 py-2 text-sm sm:text-base hover:bg-stone-600 transition-all duration-200'
        >
          Generate
        </button>
      </div>

      {generated && (
        <p className='text-center text-lg sm:text-xl font-semibold break-all'>
          Your Short URL:{" "}
          <Link
            href={generated}
            target="_blank"
            className='text-sky-600 hover:text-sky-800 underline'
          >
            {generated}
          </Link>
        </p>
      )}

      {toastVisible && (
        <div className="fixed bottom-6 right-4 sm:right-8 bg-slate-800 text-white px-4 py-2 rounded-md shadow-lg animate-slide-up z-50 text-sm sm:text-base">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default Shorten;

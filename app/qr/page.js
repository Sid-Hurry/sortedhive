"use client";
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [showQR, setShowQR] = useState(false);

  const handleClear = () => {
    setInput("");
    setShowQR(false);
  };

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 md:px-10 py-10 font-gill text-gray-800 select-none">
      <div className="max-w-xl w-full mx-auto text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          QR Code Generator
        </h1>
        <p className="text-base sm:text-lg">
          Paste any link or text to generate a QR code instantly.
        </p>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter URL or text"
          className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-slate-400 transition duration-300"
        />

        <button
          onClick={() => setShowQR(true)}
          className="w-full sm:w-auto bg-slate-800 hover:bg-stone-700 text-white px-6 py-2 rounded-md transition duration-300"
        >
          Generate QR Code
        </button>

        {showQR && input && (
          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="bg-white p-4 border border-gray-300 rounded-md shadow">
              <QRCodeCanvas value={input} size={200} bgColor="#FFFFFF" fgColor="#000000" />
            </div>
            <button
              onClick={handleClear}
              className="bg-slate-800 hover:text-orange-500 text-white px-4 py-2 rounded-md transition duration-300"
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;

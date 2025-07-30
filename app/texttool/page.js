'use client';
import React, { useState, useEffect } from 'react';
import { Copy } from 'lucide-react';
import FloatingChatBot from '@/components/chatbot';

const TextAndFileTools = () => {
  const [textInput, setTextInput] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [showCopy, setShowCopy] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success'); // 'success' | 'error'
  const [showToast, setShowToast] = useState(false);

  const showToastMessage = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  const toUpper = () => {
    if (!textInput.trim()) {
      showToastMessage('Please enter something', 'error');
      return;
    }
    setConvertedText(textInput.toUpperCase());
    setShowCopy(true);
    showToastMessage('Converted to Uppercase', 'success');
  };

  const toLower = () => {
    if (!textInput.trim()) {
      showToastMessage('Please enter something', 'error');
      return;
    }
    setConvertedText(textInput.toLowerCase());
    setShowCopy(true);
    showToastMessage('Converted to Lowercase', 'success');
  };

  const toSlug = () => {
    if (!textInput.trim()) {
      showToastMessage('Please enter something', 'error');
      return;
    }
    const result = textInput
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/[\s_-]+/g, '-');
    setConvertedText(result);
    setShowCopy(true);
    showToastMessage('Converted to Slug', 'success');
  };

  const copyToClipboard = () => {
    if (!convertedText.trim()) {
      showToastMessage('Nothing to copy', 'error');
      return;
    }
    navigator.clipboard.writeText(convertedText);
    showToastMessage('Copied to clipboard', 'success');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-10 font-gill">
      {/* Text Tools */}
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">Text Tools</h2>
        <textarea
          rows={5}
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-50 border border-gray-200 text-base shadow-sm mb-4 focus:outline-none focus:ring-1 focus:ring-slate-300"
          placeholder="Enter your text"
        />
        <div className="flex flex-wrap gap-3 mb-4">
          <button onClick={toUpper} className="bg-[#0f172a] text-white px-4 py-2 rounded-md text-sm sm:text-base hover:opacity-90">
            Uppercase
          </button>
          <button onClick={toLower} className="bg-[#0f172a] text-white px-4 py-2 rounded-md text-sm sm:text-base hover:opacity-90">
            Lowercase
          </button>
          <button onClick={toSlug} className="bg-[#0f172a] text-white px-4 py-2 rounded-md text-sm sm:text-base hover:opacity-90">
            Slugify
          </button>
        </div>

        {convertedText && (
          <div className="relative">
            <p className="font-medium text-gray-700 mb-1">Converted Text:</p>
            <div className="bg-gray-100 p-3 rounded-md text-gray-800 relative pr-10 overflow-x-auto break-words">
              {convertedText}
              {showCopy && (
                <button
                  onClick={copyToClipboard}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                >
                  <Copy size={18} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <FloatingChatBot />

      {/* Toast Message */}
      {showToast && (
        <div className="fixed bottom-4 left-4 sm:left-6 z-50 flex items-center max-w-[90%] sm:max-w-xs shadow-lg rounded-md overflow-hidden animate-fade-in-up">
          <div
            className={`w-1.5 h-full ${
              toastType === 'success' ? 'bg-green-500' : 'bg-orange-500'
            }`}
          />
          <div className="bg-[#1e293b] text-white px-3 py-2 text-sm font-semibold w-full break-words">
            {toastMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextAndFileTools;

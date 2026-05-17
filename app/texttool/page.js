'use client';
import React, { useState, useEffect } from 'react';
import { Copy, Trash2, Lock, Type, Shield, RefreshCw, Check, Sliders } from 'lucide-react';
import FloatingChatBot from '@/components/chatbot';

const SortedHiveUtilitySuite = () => {
  // Navigation State
  const [activeTab, setActiveTab] = useState('text'); // 'text' or 'password'

  // Toast State
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');

  const triggerToast = (message, type = 'success') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // ==========================================
  // TAB 1: TEXT TOOLS STATE & HANDLERS
  // ==========================================
  const [textInput, setTextInput] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [showCopy, setShowCopy] = useState(false);

  const handleEmptyCheck = () => {
    if (!textInput.trim()) {
      triggerToast('Please enter some text first', 'warning');
      return true;
    }
    return false;
  };

  const toUpper = () => {
    if (handleEmptyCheck()) return;
    setConvertedText(textInput.toUpperCase());
    setShowCopy(true);
  };

  const toLower = () => {
    if (handleEmptyCheck()) return;
    setConvertedText(textInput.toLowerCase());
    setShowCopy(true);
  };

  const toSlug = () => {
    if (handleEmptyCheck()) return;
    const result = textInput
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/[\s_-]+/g, '-');
    setConvertedText(result);
    setShowCopy(true);
  };

  const toCamelCase = () => {
    if (handleEmptyCheck()) return;
    const result = textInput
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase()
      )
      .replace(/\s+/g, '');
    setConvertedText(result);
    setShowCopy(true);
  };

  const toTitleCase = () => {
    if (handleEmptyCheck()) return;
    const result = textInput
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setConvertedText(result);
    setShowCopy(true);
  };

  const clearTextAll = () => {
    setTextInput('');
    setConvertedText('');
    setShowCopy(false);
  };

  const copyTextToClipboard = () => {
    if (!convertedText) return;
    navigator.clipboard.writeText(convertedText);
    triggerToast('Copied to clipboard!', 'success');
  };

  // ==========================================
  // TAB 2: SECURE PASSWORD GENERATOR
  // ==========================================
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    numbers: true,
    symbols: true,
  });

  const handleCheckboxChange = (key) => {
    setOptions((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      // Prevent deselecting all options
      const activeCount = Object.values(updated).filter(Boolean).length;
      if (activeCount === 0) {
        triggerToast('At least one character type must be selected', 'warning');
        return prev;
      }
      return updated;
    });
  };

  // Fisher-Yates Shuffle
  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const generatePassword = () => {
    const { upper, lower, numbers, symbols } = options;
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:\',.<>?/';

    let characterPool = '';
    let guaranteedChars = [];

    if (upper) {
      characterPool += upperChars;
      guaranteedChars.push(upperChars[Math.floor(Math.random() * upperChars.length)]);
    }
    if (lower) {
      characterPool += lowerChars;
      guaranteedChars.push(lowerChars[Math.floor(Math.random() * lowerChars.length)]);
    }
    if (numbers) {
      characterPool += numberChars;
      guaranteedChars.push(numberChars[Math.floor(Math.random() * numberChars.length)]);
    }
    if (symbols) {
      characterPool += symbolChars;
      guaranteedChars.push(symbolChars[Math.floor(Math.random() * symbolChars.length)]);
    }

    if (characterPool.length === 0) return;

    let generated = [...guaranteedChars];
    const remainingLength = length - guaranteedChars.length;

    for (let i = 0; i < remainingLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generated.push(characterPool[randomIndex]);
    }

    // Shuffle to randomize positions of guaranteed chars
    const shuffled = shuffleArray(generated);
    setPassword(shuffled.join(''));
  };

  // Automatically regenerate password when settings or tab change
  useEffect(() => {
    if (activeTab === 'password') {
      generatePassword();
    }
  }, [length, options, activeTab]);

  const copyPasswordToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    triggerToast('Password copied to clipboard!', 'success');
  };

  // Helper to calculate password strength metrics (entropy based)
  const calculateStrength = () => {
    if (!password) return { score: 0, label: 'None', color: 'bg-gray-300', width: 'w-0', textClass: 'text-gray-500' };

    let poolSize = 0;
    if (options.upper) poolSize += 26;
    if (options.lower) poolSize += 26;
    if (options.numbers) poolSize += 10;
    if (options.symbols) poolSize += 29;

    // Shannon entropy E = L * log2(P)
    const entropy = length * (Math.log(poolSize) / Math.log(2));

    if (entropy < 35) {
      return { score: 1, label: 'Very Weak (Too unsafe)', color: 'bg-red-500', width: 'w-1/5', textClass: 'text-red-500' };
    } else if (entropy < 55) {
      return { score: 2, label: 'Weak (Vulnerable)', color: 'bg-orange-500', width: 'w-2/5', textClass: 'text-orange-500' };
    } else if (entropy < 75) {
      return { score: 3, label: 'Medium (Decent)', color: 'bg-yellow-500', width: 'w-3/5', textClass: 'text-yellow-500' };
    } else if (entropy < 90) {
      return { score: 4, label: 'Strong (Very Secure)', color: 'bg-green-500', width: 'w-4/5', textClass: 'text-green-500' };
    } else {
      return { score: 5, label: 'Excellent (Military Grade)', color: 'bg-emerald-500', width: 'w-full', textClass: 'text-emerald-600 font-bold' };
    }
  };

  const strength = calculateStrength();

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-8 font-gill select-none">
      
      {/* Title Header */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">SortedHive Utility Suite</h1>
        <p className="text-gray-600 text-sm sm:text-base">Fast, secure, and client-side developer helper tools.</p>
      </div>

      {/* Tabs Navigation Bar */}
      <div className="flex border border-gray-200 bg-gray-50/70 p-1.5 rounded-2xl gap-2 shadow-inner">
        <button
          onClick={() => setActiveTab('text')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 ${
            activeTab === 'text'
              ? 'bg-white text-slate-800 shadow-md border border-gray-100 scale-100'
              : 'text-gray-500 hover:text-slate-700 hover:bg-gray-100/50'
          }`}
        >
          <Type size={18} />
          Text Case Converter
        </button>
        <button
          onClick={() => setActiveTab('password')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 ${
            activeTab === 'password'
              ? 'bg-white text-slate-800 shadow-md border border-gray-100 scale-100'
              : 'text-gray-500 hover:text-slate-700 hover:bg-gray-100/50'
          }`}
        >
          <Lock size={18} />
          Password Generator
        </button>
      </div>

      {/* ==========================================
          TAB 1: TEXT TOOLS COMPONENT
          ========================================== */}
      {activeTab === 'text' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 w-full transition-all duration-500 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Type className="text-slate-800" size={20} />
              Text Tools
            </h2>
            <button
              onClick={clearTextAll}
              className="text-red-500 hover:text-red-700 hover:bg-red-50/50 px-3 py-1 rounded-lg flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition"
            >
              <Trash2 size={16} />
              Clear All
            </button>
          </div>
          
          <textarea
            rows={5}
            value={textInput}
            onChange={(e) => {
              setTextInput(e.target.value);
              setConvertedText('');
              setShowCopy(false);
            }}
            className="w-full p-4 rounded-xl bg-gray-50/60 border border-gray-200 text-base shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:bg-white transition"
            placeholder="Type or paste your text here..."
          />

          <div className="flex flex-wrap gap-2.5 mb-5">
            <button onClick={toUpper} className="bg-slate-800 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow hover:bg-stone-600 transition cursor-pointer">
              UPPERCASE
            </button>
            <button onClick={toLower} className="bg-slate-800 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow hover:bg-stone-600 transition cursor-pointer">
              lowercase
            </button>
            <button onClick={toSlug} className="bg-slate-800 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow hover:bg-stone-600 transition cursor-pointer">
              slug-ify
            </button>
            <button onClick={toCamelCase} className="bg-slate-800 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow hover:bg-stone-600 transition cursor-pointer">
              camelCase
            </button>
            <button onClick={toTitleCase} className="bg-slate-800 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow hover:bg-stone-600 transition cursor-pointer">
              Title Case
            </button>
          </div>

          {convertedText && (
            <div className="relative border border-slate-100 rounded-xl bg-slate-50/50 p-4 transition-all duration-300">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Converted Text:</p>
              <div className="text-gray-800 font-medium break-words pr-12 text-sm sm:text-base leading-relaxed">
                {convertedText}
              </div>
              {showCopy && (
                <button
                  onClick={copyTextToClipboard}
                  className="absolute right-3 top-4 p-2 bg-white text-gray-600 hover:text-slate-800 rounded-lg shadow-sm border border-gray-100 transition hover:scale-105 cursor-pointer"
                  title="Copy to clipboard"
                >
                  <Copy size={16} />
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* ==========================================
          TAB 2: SECURE PASSWORD GENERATOR COMPONENT
          ========================================== */}
      {activeTab === 'password' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 w-full transition-all duration-500 animate-fade-in flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Shield className="text-slate-800" size={22} />
              Secure Password Generator
            </h2>
            <button
              onClick={generatePassword}
              className="text-slate-800 hover:text-stone-600 hover:bg-gray-50 px-3 py-1.5 border border-gray-200 rounded-xl flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition cursor-pointer shadow-sm"
            >
              <RefreshCw size={14} className="animate-spin-slow" />
              Regenerate
            </button>
          </div>

          {/* Password Visual Display */}
          <div className="relative border border-slate-100 rounded-xl bg-slate-900 text-white p-5 flex items-center justify-between shadow-inner">
            <div className="font-mono text-base sm:text-lg lg:text-xl tracking-wider select-all break-all pr-14 leading-relaxed font-bold text-emerald-400">
              {password}
            </div>
            <button
              onClick={copyPasswordToClipboard}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-slate-800 hover:bg-slate-700 text-emerald-400 hover:text-emerald-300 rounded-xl border border-slate-700 shadow-md transition hover:scale-105 cursor-pointer"
              title="Copy Password"
            >
              <Copy size={18} />
            </button>
          </div>

          {/* Strength Meter */}
          <div className="bg-gray-50/70 p-4 border border-gray-100 rounded-xl flex flex-col gap-2.5">
            <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
              <span className="text-gray-500">Password Strength:</span>
              <span className={strength.textClass}>{strength.label}</span>
            </div>
            
            {/* Strength Bar */}
            <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden flex shadow-inner">
              <div className={`h-full ${strength.color} ${strength.width} transition-all duration-500 ease-out`} />
            </div>
          </div>

          {/* Configurations Layout */}
          <div className="flex flex-col gap-5 pt-2">
            
            {/* Length Configuration */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center font-semibold text-xs sm:text-sm">
                <span className="text-gray-700 flex items-center gap-1.5">
                  <Sliders size={16} className="text-gray-400" />
                  Password Length
                </span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md border border-slate-200 font-mono font-bold text-sm">
                  {length} Chars
                </span>
              </div>
              <input
                type="range"
                min="8"
                max="64"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-slate-800 focus:outline-none"
              />
            </div>

            {/* Character Pool Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1.5">
              
              {/* UPPERCASE Checkbox */}
              <label 
                className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition select-none ${
                  options.upper 
                    ? 'border-slate-800 bg-slate-50/50 shadow-sm font-semibold' 
                    : 'border-gray-200 text-gray-500 hover:bg-gray-50/30'
                }`}
              >
                <input
                  type="checkbox"
                  checked={options.upper}
                  onChange={() => handleCheckboxChange('upper')}
                  className="hidden"
                />
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                  options.upper 
                    ? 'bg-slate-800 border-slate-800 text-white' 
                    : 'border-gray-300 bg-white'
                }`}>
                  {options.upper && <Check size={14} strokeWidth={3} />}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm">Uppercase Letters</span>
                  <span className="text-2xs sm:text-xs text-gray-400 font-mono">A-Z</span>
                </div>
              </label>

              {/* lowercase Checkbox */}
              <label 
                className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition select-none ${
                  options.lower 
                    ? 'border-slate-800 bg-slate-50/50 shadow-sm font-semibold' 
                    : 'border-gray-200 text-gray-500 hover:bg-gray-50/30'
                }`}
              >
                <input
                  type="checkbox"
                  checked={options.lower}
                  onChange={() => handleCheckboxChange('lower')}
                  className="hidden"
                />
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                  options.lower 
                    ? 'bg-slate-800 border-slate-800 text-white' 
                    : 'border-gray-300 bg-white'
                }`}>
                  {options.lower && <Check size={14} strokeWidth={3} />}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm">Lowercase Letters</span>
                  <span className="text-2xs sm:text-xs text-gray-400 font-mono">a-z</span>
                </div>
              </label>

              {/* Numbers Checkbox */}
              <label 
                className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition select-none ${
                  options.numbers 
                    ? 'border-slate-800 bg-slate-50/50 shadow-sm font-semibold' 
                    : 'border-gray-200 text-gray-500 hover:bg-gray-50/30'
                }`}
              >
                <input
                  type="checkbox"
                  checked={options.numbers}
                  onChange={() => handleCheckboxChange('numbers')}
                  className="hidden"
                />
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                  options.numbers 
                    ? 'bg-slate-800 border-slate-800 text-white' 
                    : 'border-gray-300 bg-white'
                }`}>
                  {options.numbers && <Check size={14} strokeWidth={3} />}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm">Numbers</span>
                  <span className="text-2xs sm:text-xs text-gray-400 font-mono">0-9</span>
                </div>
              </label>

              {/* Symbols Checkbox */}
              <label 
                className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition select-none ${
                  options.symbols 
                    ? 'border-slate-800 bg-slate-50/50 shadow-sm font-semibold' 
                    : 'border-gray-200 text-gray-500 hover:bg-gray-50/30'
                }`}
              >
                <input
                  type="checkbox"
                  checked={options.symbols}
                  onChange={() => handleCheckboxChange('symbols')}
                  className="hidden"
                />
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                  options.symbols 
                    ? 'bg-slate-800 border-slate-800 text-white' 
                    : 'border-gray-300 bg-white'
                }`}>
                  {options.symbols && <Check size={14} strokeWidth={3} />}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm">Symbols & Special</span>
                  <span className="text-2xs sm:text-xs text-gray-400 font-mono">!@#$%^&*</span>
                </div>
              </label>

            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Bot Re-integration */}
      <FloatingChatBot />

      {/* Unified Premium Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 left-4 sm:left-6 z-50 flex items-center max-w-[90%] sm:max-w-xs shadow-2xl rounded-xl overflow-hidden border border-[#2b394e] animate-slide-up">
          <div
            className={`w-1.5 self-stretch ${
              toastType === 'success' ? 'bg-emerald-500' : 'bg-amber-500'
            }`}
          />
          <div className="bg-[#0f172a] text-[#f8fafc] px-4 py-3 text-xs sm:text-sm font-semibold w-full break-words shadow-lg flex items-center gap-2">
            {toastType === 'success' ? <Check size={16} className="text-emerald-400" /> : null}
            {toastMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortedHiveUtilitySuite;

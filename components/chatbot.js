"use client";
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const qaMap = [
  {
    keywords: ["hello", "hi", "hey", "greetings", "yo"],
    answer: "Hello there! How can I assist you today?",
    type: "greeting"
  },
  {
    keywords: ["shorten", "how do i shorten", "create link"],
    answer:
      "Just paste your URL into the input field and click “Generate”. We will instantly create a short link."
  },
  {
    keywords: ["custom", "alias", "customize"],
    answer:
      "Yes! You can choose a custom alias when shortening your link, if it is available."
  },
  {
    keywords: ["limit", "usage", "how many", "quota"],
    answer:
      "There is no usage limit. You can shorten as many links and generate as many QR codes as you like."
  },
  {
    keywords: ["expire", "time", "duration"],
    answer:
      "Links do not expire automatically. Manual expiry options are on our roadmap."
  },
  {
    keywords: ["edit", "delete", "update", "modify"],
    answer:
      "Currently, editing or deleting links is not supported, but we plan to add it soon."
  },
  {
    keywords: ["analytics", "track", "clicks", "metrics", "stats"],
    answer:
      "Yes, SortedHive offers basic analytics—click counts, QR scans, and referrer info via the Analytics Beta page."
  },
  {
    keywords: ["qr code", "qr", "scan", "generate qr"],
    answer:
      "You can generate and download QR codes instantly. Scan tracking is available in Beta."
  },
  {
    keywords: ["what is", "about", "SortedHive"],
    answer:
      "SortedHive is a free, no-login platform to shorten URLs and create QR codes instantly."
  },
  {
    keywords: ["account", "sign up", "login", "signup"],
    answer:
      "No account or login is required to use SortedHive."
  },
  {
    keywords: ["bulk", "many at once", "bulk shorten"],
    answer:
      "Bulk URL shortening is not supported yet, but it is on the feature list."
  },
  {
    keywords: ["preview", "qr preview"],
    answer:
      "Yes, after generating a link you can preview the QR code before downloading."
  },
  {
    keywords: ["data", "privacy", "store", "secure", "safe"],
    answer:
      "We do not store personal data or track individual users."
  },
  {
    keywords: ["private", "visibility", "hidden"],
    answer:
      "All links are publicly accessible if someone has the URL. Private link features are coming."
  },
  {
    keywords: ["third party", "ads", "share"],
    answer:
      "No, we dont share your data with third parties or show ads."
  },
  {
    keywords: ["open source", "github", "contribute", "code"],
    answer:
      "Yes! The code is available on GitHub: https://github.com/Sid-Hurry/sortedhive"
  },
  {
    keywords: ["contribute", "help", "collaborate"],
    answer:
      "We would love your contributions! Visit our GitHub repo to fork or raise issues."
  },
  {
    keywords: ["tech", "stack", "framework"],
    answer:
      "SortedHive is built with Next.js and Tailwind CSS, and deployed using Vercel."
  },
  {
    keywords: ["mobile", "responsive"],
    answer: "Yes, SortedHive is fully responsive and mobile-friendly."
  },
  {
    keywords: ["features", "roadmap", "upcoming", "plans"],
    answer:
      "We are working on features like link expiry, editing, user profiles, and advanced analytics."
  },
  {
    keywords: ["paid", "price", "cost", "pricing"],
    answer: "SortedHive is completely free—no plans or payments needed now or in the future."
  },
  {
    keywords: ["support", "help", "contact", "feedback"],
    answer:
      "For questions, feedback or issues, visit our GitHub or email support@sortedhive.com."
  }
];

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! I am the SortedHive Assistant. Ask me anything!"
    }
  ]);
  const chatRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const text = input.trim();
    const lower = text.toLowerCase();

    const matched = qaMap.find((qa) =>
      qa.keywords.some((k) => lower.includes(k))
    );

    const response = matched
      ? matched.answer
      : "I am not sure about that yet. Try rephrasing or check back later!";

    setMessages((prev) => [
      ...prev,
      { sender: "user", text },
      { sender: "bot", text: response }
    ]);
    setInput("");
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {open ? (
          <div className="w-80 h-96 flex flex-col bg-white border border-gray-300 rounded-xl shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white rounded-t-xl">
              <span className="font-semibold text-sm">SortedHive Assistant</span>
              <button
                onClick={() => setOpen(false)}
                className="hover:text-red-400"
              >
                <X size={18} />
              </button>
            </div>
            <div
              ref={chatRef}
              className="flex-1 overflow-y-auto px-3 py-2 space-y-2 text-sm"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg inline-block break-words max-w-[75%] text-left ${
                      msg.sender === "user"
                        ? "bg-gray-200 text-black rounded-br-none"
                        : "bg-gray-100 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 border-t border-gray-200">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="w-full border rounded-lg px-3 py-1 text-sm outline-none"
                placeholder="Type your question..."
              />
            </div>
          </div>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
          >
            <MessageCircle size={20} />
          </button>
        )}
      </div>
    </>
  );
};

export default ChatBot;

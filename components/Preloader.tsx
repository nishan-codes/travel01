"use client";

import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const loadingTimeout = setTimeout(() => {
      setFadeOut(true);
      // Wait for fade animation to complete before unmounting
      setTimeout(() => setLoading(false), 500);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated Spinner */}
      <div className="relative mb-8">
        <div className="w-16 h-16 border-4 border-slate-600 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-500 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
      </div>

      {/* Loading Text with Typewriter Effect */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Loading
        </h1>
        <div className="flex space-x-1 justify-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-slate-700 rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      </div>

      {/* Loading Message */}
      <p className="text-slate-300 text-sm mt-4 animate-pulse">
        Preparing your experience...
      </p>
    </div>
  );
};

export default Preloader;
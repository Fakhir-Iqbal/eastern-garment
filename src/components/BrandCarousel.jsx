"use client"

import React, { useEffect, useState } from "react";

export default function brandCarousel () {
  const logos = [
    "/Logo/BSCI.png.crdownload", 
    "/Logo/Oekotex.png.crdownload",
    "/Logo/URS.png.crdownload",
    "/Logo/WRAP.png.crdownload",
    "/Logo/URS-1.png.crdownload",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 1000); // Auto-scroll every 1 second
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div className="relative overflow-hidden w-full bg-gray-100 py-4">
      <div
        className="flex transition-transform duration-500 ease-linear"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {logos.map((logo, index) => (
          <div key={index} className="min-w-full flex justify-center items-center">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};



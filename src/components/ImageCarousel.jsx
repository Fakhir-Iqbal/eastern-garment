'use client'
import React from "react";
import { useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";


const ImageCarousel = () => {
    const images = [
        { id: 1, src: "/Certificates/1.jpg" },
        { id: 2, src: "/Certificates/2.jpg" },
        { id: 3, src: "/Certificates/3.jpg" },
        { id: 4, src: "/Certificates/4.jpg" },
        { id: 5, src: "/Certificates/5.jpg" },
        { id: 6, src: "/Certificates/6.jpg" },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="flex flex-col items-center justify-center mx-auto relative py-10">
            <div className="relative w-full h-auto md:h-screen">
                
                <img
                    src={images[currentIndex].src} alt={`carousel ${currentIndex}`}
                    className="w-full h-full object-contain rounded-lg transition-opacity duration-700 ease-in-out opacity-100"
                />

                <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full" >
                    <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400" />
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full" >
                    <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400" />
                </button>

            </div>
        </div>
    );
};

export default ImageCarousel;
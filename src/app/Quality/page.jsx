import React from 'react'
import Image from 'next/image'
import { QualityCardData } from '@/lib/Constant'

export const metadata = {
  title: 'Quality | Eastern Garment',
  description: 'Discover Eastern Garments commitment to quality through our rigorous processes, sustainable practices, and cutting-edge technology that ensure every product meets the highest industry standards.',
};

export default function Quality() {
  return (
    <div>
      <div className="relative">
        <Image
          src="/quality-bg.jpg"
          height={1000}
          width={1000}
          alt="aboutBanner"
          className="w-full h-[85vh] object-cover opacity-40 brightness-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-blue-950">
            Quality Assurance Process
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold mt-2 md:mt-4 w-full md:w-3/4 lg:w-2/3">
            State-of- the-art workrooms assure maximum productivity at every stage to achieve higher quality
            and superior products. Statistical process control (SPC) methods are employed in order to monitor
            and control all the processes so the company can operate at its full potential. Global methods and
            certifications of quality control like JC Penney Quality Assurance System, Parallel Management System
            for Production and Quality Assurance, On-line Quality Information System and In-House Audit Team maintain
            the equilibrium between the manufacturer and the consumer allowing us to produce excellent textile products.
          </p>
        </div>
      </div>


<div className="grid grid-cols-1 gap-10 max-w-7xl mx-auto py-10 px-2">
        {QualityCardData.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            <div className="w-full flex justify-center">
              <Image
                src={section.image}
                alt={section.title}
                width={1200}
                height={1500}
                className="rounded-lg"
              />
            </div>
            <div className="w-full px-4 text-center md:text-left mt-4 md:mt-0">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-600">{section.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
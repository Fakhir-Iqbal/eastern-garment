import React from 'react'
import Image from 'next/image'
import { planCardData } from '@/lib/Constant'

export const metadata = {
  title: 'Plan & Activities | Eastern Garment',
  description: 'Explore the strategic plans and ongoing activities of Eastern Garments. Learn how we are shaping the future of the fashion industry through innovative initiatives, sustainability efforts, and community-driven projects.',
};


export default function PlanActivities() {
  return (
    <div>
      <div className="relative">
        <Image
          src="/about-banner.jpg"
          height={1000}
          width={1000}
          alt="aboutBanner"
          className="w-full h-[85vh] object-cover opacity-30 brightness-50 contrast-200"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-blue-950">
            Plan & Activities
          </h1>
        </div>
      </div>




      <div className="grid grid-cols-1 gap-10 max-w-7xl mx-auto py-10 px-2">
        {planCardData.map((section, index) => (
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
              {section.list && (
                <ul className="mt-4 list-disc list-inside space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}
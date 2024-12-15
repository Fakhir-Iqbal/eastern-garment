import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: 'Eastern Digital Studio | Eastern Garment',
  description: 'Discover how Eastern Garments leverages cutting-edge 3D garment design software like VStitcher and CLO to enhance design workflows and reduce production costs in their digital studio.',
};

export default function DigitalStudio() {
  return (
    <div>
      
      <div className="relative">
        <Image
          src="/studio.jpg"
          height={1000}
          width={1000}
          alt="aboutBanner"
          className="w-full h-[85vh] object-cover opacity-40 brightness-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-blue-950">
            Eastern Digital Studio
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold mt-2 md:mt-4 w-full md:w-3/4 lg:w-2/3">
            Being customer focused– and subsequently customer committed –is a process that requires motivation, planning,
            and investment. It’s a pledge we make for the long-term period. New technologies help make things simple, and
            simplified experiences are something customers have come to expect. Eastern Garment’s mission has always been
            to build the future of fashion. This is happening now at eds. eastern-garments.com. This website is the legacy
            of where we come from. It will become part of the future as we keep building the platform further.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto py-10 p-1' >
        <Image
          src="/studio1.jpg"
          height={1000}
          width={1000}
          alt="aboutBanner"
          className="w-full h-[85vh] object-cover"
        />
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-blue-950 mt-10">
          3D SOFTWARE
        </h1>
        <p className="text-sm sm:text-lg md:text-xl font-semibold mb-10">
          Eastern Garments is using the world’s most technically advanced, intuitive, and cohesive 3D garment design software to
          achieve a seamless digital workflow. Using VStitcher and CLO’s latest software actually saves a lot of time in the design
          process and reduces a lot of the production cost. In designing a collection, it can be visualized which helps to enhance
          the communication between us and our potential buyers and customers.
        </p>
        <Image
          src="/studio1.jpg"
          height={1000}
          width={1000}
          alt="aboutBanner"
          className="w-full h-[85vh] object-cover"
        />
      </div>

    </div>
  )
}
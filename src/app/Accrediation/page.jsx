import React from 'react'
import Image from 'next/image'

export default function Accrediation() {
  return (
    <div>

      <div className="relative">
        <Image
          src="/certificate-bg.jpg"
          height={1000}
          width={1000}
          alt="aboutBanner"
          className="w-full h-[85vh] object-cover opacity-50 brightness-50 contrast-200"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-blue-950">
            Certifications
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold mt-2 md:mt-4 w-full md:w-3/4 lg:w-2/3">
            Eastern Garments carries massive amount of experience and technical knowledge of knitted apparel manufacturing and supplying. Our certifications and recognitions speak volumes of our credibility and authority in the field of apparel manufacturing. We are the recipients of various awards that adds laurels to our already glorified path that enables us to produce greater and superior apparel products.
            <span className='font-bold' > WRAP, BSCI, OEKO-TEX and  HBI. </span>
          </p>
        </div>
      </div>

    </div>
  )
}


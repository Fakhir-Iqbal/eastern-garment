import React from 'react'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { testimonialsCardData } from '@/lib/Constant'
import Image from 'next/image'

export const metadata = {
  title: 'Experties | Eastern Garment',
  description: 'Explore the expertise of Eastern Garments in garment manufacturing, design, and sustainable fashion practices. Learn how our skilled team delivers high-quality solutions for the fashion industry.',
};

export default function Expertise() {
  return (
    <>
      <div className="relative">
        <Image
          src="/expertiesImages/history.jpg"
          height={1000}
          width={1000}
          alt="aboutBanner"
          className="w-full h-[85vh] object-cover opacity-40 brightness-50 contrast-200"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-blue-950">
            Our Expertise
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold mt-2 md:mt-4 w-full md:w-3/4 lg:w-2/3">
            Eastern Garments controls a highly technical and advanced knit garment manufacturing facility. Its prime function is to manufacture up to date, innovative and high quality knitted apparel products via state of the art machines and technology. The facility can produce 600,000 garments per day. Our customer includes
            <span className='font-bold' > HBI, Champion, Alternatives, Under Armour, Gear for Sports, 47 Brand, Fanatics, Russell Athletic, Dickies, Carrefour</span>  etc.
          </p>
        </div>
        
      </div>
      <div className='py-10' >
        {/* <h1 className='text-center text-7xl text-blue-950 font-bold pt-5' >Our Expertise</h1> */}
        <AnimatedTestimonials testimonials={testimonialsCardData} />
      </div>
    </>
  )
}

import React from 'react'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { testimonialsCardData } from '@/lib/Constant'
import Image from 'next/image'

export default function Expertise() {
  return (
    <>
      <div className='max-w-7xl mx-auto' >
        <Image height={1000} width={1000} alt='ExpertBanner' className='h-full w-full rounded-lg brightness-75 contrast-125' src='/expertiesImages/history.jpg' />
        <p className='my-5 text-gray-600' >Eastern Garments controls a highly technical and advanced knit garment manufacturing facility. Its prime function is to manufacture up to date, innovative and high quality knitted apparel products via state of the art machines and technology. The facility can produce 600,000 garments per day. Our customer includes
          <span className='font-bold' > HBI, Champion, Alternatives, Under Armour, Gear for Sports, 47 Brand, Fanatics, Russell Athletic, Dickies, Carrefour</span>  etc.</p>
      </div>
      <div>
        <h1 className='text-center text-7xl text-blue-950 font-bold pt-5' >Our Expertise</h1>
        <AnimatedTestimonials testimonials={testimonialsCardData} />
      </div>
    </>
  )
}

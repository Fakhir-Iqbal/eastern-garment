import React from 'react'
import Image from 'next/image'

export default function Sustainability() {
  return (
    <div className='bg-white'>
      <Image src='/sustainable-banner.jpg' height={1000} width={1000} alt='aboutBanner' className='w-full h-[75vh]' />
      <div className='max-w-7xl mx-auto' >
        <h3 className='text-7xl md:text-8xl text-blue-950 font-bold text-center py-10' >Sustainability Initiatives</h3>
        <p className='text-xl font-semibold' >
          Eastern garments regularly produce variety of unmatched,
          unique and trendy collection of denim jeans, jerseys, denim
          knits; such as hoodies, jeggings, polo shirts and crew necks
          for men, women and children according to international standards.
          Our exclusive product range promises the consumer comfort,
          luxury and premium quality and furthermore gives them the
          sense of satisfaction and aesthetics so they can rise and
          shine in every way of life.
        </p>
        <Image src='/sustainable1.jpg' height={1000} width={1000} alt='aboutBanner' className='w-full h-[75vh]' />
        <Image src='/sustainable2.jpg' height={1000} width={1000} alt='aboutBanner' className='w-full h-[85vh]' />


      </div>
    </div>
  )
}

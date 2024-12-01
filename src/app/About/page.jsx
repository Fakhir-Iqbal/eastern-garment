import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div className='max-w-7xl mx-auto' >
            <div className='relative py-3' >
                <Image src='/about-banner.jpg' height={1000} width={1000} alt='aboutBanner' className='w-full opacity-40 brightness-50 contrast-200' />
                <div className='absolute inset-0 flex flex-col items-center justify-center' >
                    <h1 className='text-7xl font-bold text-blue-950 text-center' >About Us</h1>
                    <p className='text-2xl text-center font-semibold w-2/3' >Our excellence is reflected in our service and relationship with customers providing peace of mind through professionalism, dedication and integrity.</p>
                </div>
                <p className='py-5' >Eastern Group is a global manufacturer and a trusted name in the field of knit and woven garments. We use state-of- the-art technology to produce apparel for men, women and children. Since establishment in 1976, Eastern has focused on meeting or exceeding customer requirements in terms of quality, service, delivery, and overall value.</p>
            </div>
        </div>
    )
}

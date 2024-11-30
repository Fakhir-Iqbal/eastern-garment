import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div>
            <div className='max-w-7xl mx-auto' >
                <Image src='/about-banner.jpg' height={1000} width={1000} alt='aboutBanner' className='w-full' />
                <h3>Our excellence is reflected in our service and relationship with customers providing peace of mind through professionalism, dedication and integrity.</h3>

            </div>
        </div>
    )
}

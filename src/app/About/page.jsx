import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <>
            <div className='relative' >
                <Image src='/about-banner.jpg' height={1000} width={1000} alt='aboutBanner' className='w-full opacity-30 brightness-50 contrast-200' />
                <div className='absolute inset-0 flex flex-col items-center justify-center' >
                    <h1 className='text-7xl md:text-9xl font-bold text-blue-950 text-center' >About Us</h1>
                    <p className='text-2xl text-center font-semibold w-2/3' >Our excellence is reflected in our service and relationship with customers providing peace of mind through professionalism, dedication and integrity.</p>
                </div>
                <p className='py-5 max-w-7xl mx-auto text-center' >Eastern Group is a global manufacturer and a trusted name in the field of knit and woven garments. We use state-of- the-art technology to produce apparel for men, women and children. Since establishment in 1976, Eastern has focused on meeting or exceeding customer requirements in terms of quality, service, delivery, and overall value.</p>
            </div>
            <div className='max-w-7xl mx-auto' >

                <div className="p-6 flex justify-center py-10">
                    <div className="grid max-w-7xl grid-cols-1 md:grid-cols-2 ">
                        {/* VISION Section */}
                        <div className="grid bg-blue-50 p-5 rounded-2xl">
                            <Image
                                src="/vision.avif"
                                alt="Vision Icon"
                                width={60}
                                height={60}
                                className="mb-4"
                            />
                            <h2 className="text-2xl font-bold">VISION</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Continue to reach new heights with dedication and hard work</li>
                                <li>Process integration to drive value</li>
                                <li>Focused approach toward specific customer needs</li>
                            </ul>
                        </div>

                        {/* MISSION Section */}
                        <div className="grid">
                            <Image
                                src="/mission.avif"
                                alt="Mission Icon"
                                width={60}
                                height={60}
                                className="mb-4"
                            />
                            <h2 className="text-2xl font-bold">MISSION</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>To be the vendor of choice for our customers</li>
                                <li>Constant innovation in processes and practices</li>
                                <li>Drive compelling value propositions in our target markets</li>
                            </ul>
                        </div>

                        {/* VALUES Section */}
                        <div className="grid col-span-3 mt-5">
                            <Image
                                src="/values.avif"
                                alt="Values Icon"
                                width={60}
                                height={60}
                                className="mb-4"
                            />
                            <h2 className="text-2xl font-bold">VALUES</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Innovation-led design</li>
                                <li>Constant improvement</li>
                                <li>Value long-term relationships – with both internal and external stakeholders</li>
                                <li>Integrity and commitment</li>
                                <li>Trust and mutual respect</li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

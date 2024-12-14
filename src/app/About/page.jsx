import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <>
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
                        About Us
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold mt-2 md:mt-4 w-full md:w-3/4 lg:w-2/3">
                        Our excellence is reflected in our service and relationship with customers
                        providing peace of mind through professionalism, dedication, and integrity.
                    </p>
                </div>

                <p className="py-5 px-2 md:px-8 max-w-7xl mx-auto text-center">
                    Eastern Group is a global manufacturer and a trusted name in the field of knit
                    and woven garments. We use state-of-the-art technology to produce apparel for
                    men, women, and children. Since establishment in 1976, Eastern has focused on
                    meeting or exceeding customer requirements in terms of quality, service,
                    delivery, and overall value.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="p-6 flex flex-col items-center py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl">
                        <div className="flex flex-col">
                            <Image
                                src="/vision.avif"
                                alt="Vision Icon"
                                width={60}
                                height={60}
                                className="mb-4"
                            />
                            <h2 className="text-2xl font-bold">VISION</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
                                <li>Continue to reach new heights with dedication and hard work</li>
                                <li>Process integration to drive value</li>
                                <li>Focused approach toward specific customer needs</li>
                            </ul>
                        </div>

                        <div className="flex flex-col">
                            <Image
                                src="/mission.avif"
                                alt="Mission Icon"
                                width={60}
                                height={60}
                                className="mb-4"
                            />
                            <h2 className="text-2xl font-bold">MISSION</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
                                <li>To be the vendor of choice for our customers</li>
                                <li>Constant innovation in processes and practices</li>
                                <li>Drive compelling value propositions in our target markets</li>
                            </ul>
                        </div>

                        <div className="col-span-1 md:col-span-2 ">
                            <Image
                                src="/values.avif"
                                alt="Values Icon"
                                width={60}
                                height={60}
                                className="mb-4"
                            />
                            <h2 className="text-2xl font-bold">VALUES</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
                                <li>Innovation-led design</li>
                                <li>Constant improvement</li>
                                <li>
                                    Value long-term relationships – with both internal and external
                                    stakeholders
                                </li>
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

import React from 'react'
import Image from 'next/image';
import { HeroParallax } from '@/components/ui/hero-parallax'
import { HeroSectionProductsData, HeroBrandData, OurDivisonCardData } from "@/lib/Constant";
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';


const Home = () => {
  return (
    <>
      <HeroParallax products={HeroSectionProductsData} />

      <div className='h-[40rem] bg-gradient-to-r from-white via-blue-100 to-blue-200' >
        <div className='container relative' >
          <div className='md:m-20 pt-20 min-w-auto max-w-[720px]' >
            <h3 className='text-2xl' >Our Partner</h3>
            <h1 className='text-4xl md:text-7xl font-bold text-blue-950' >WE ARE <br />
              BUILDING <br />
              PARTNERSHIPS</h1>
            <p className='text-sm md:text-md font-semibold' >With a capacity of 1.8 million garments/month, our garments facilities are equipped with the most advanced automated machines and functions capable of producing variety of fashion garments.</p>
          </div>
          <Image height={400} width={400} alt='fabric' src='/fabrics.png' className='absolute top-0 right-0 opacity-40 lg:opacity-100' />


          <div className='max-w-7xl mx-auto' >
            <InfiniteMovingCards
              items={HeroBrandData}
              direction="right"
              speed="fast"
            />
          </div>
        </div>
      </div>

      <div className='container p-1 md:p-16 text-center' >
        <h1 className='text-4xl md:text-7xl font-bold text-blue-950' >Our Division</h1>
        <p className='text-sm md:text-md font-semibold' >Our modern infrastructure ensures maximum efficiency and flexibility.</p>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-10 pt-10 text-start">
          {OurDivisonCardData.map((card, index) => (
            <div
              key={index}
              className="relative bg-black bg-opacity-50 text-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="relative z-10 p-6 py-16">
                <h2 className="text-2xl font-bold uppercase mb-5">{card.title}</h2>
                <p className="text-md">{card.description}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          ))}
        </div>


      </div>

      <div
        className="relative bg-cover bg-center bg-no-repeat border-t-8 border-b-8 border-red-700"
        style={{
          backgroundImage: "url('/bgTexture.jpg')",
        }}
      >
        <div className="container mx-auto px-4 py-10 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="text-white">
              <h3 className="text-sm uppercase tracking-wider text-gray-300 mb-2">
                Eastern Garments
              </h3>
              <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                Innovative, <br />
                Sustainable, <br />
                and Ahead <br />
                of Time
              </h1>
            </div>

            <div className="h-full">
              <iframe
                src="https://www.youtube.com/embed/hAFdW3yzSJo?si=UtnAyAaCdgrXMkdd"
                title="Eastern Garments"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg min-h-72 w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;

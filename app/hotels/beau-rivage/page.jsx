"use client"

import Navbar from '@/components/Navbar'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div> 
        
    <div className='flex lg:flex-row flex-col'>
      <div className='lg:h-[40%] lg:w-[60%] w-screen p-5'>
        <img className='rounded-3xl max-w-full' src="https://media.cntraveler.com/photos/5f678a667193f8759c50da00/master/w_960%2Cc_limit/totel-d'angleterre-geneva-Bellevue-Suite.jpg" alt="/" />
      </div>
    <div className='lg:h-[40%] lg:w-[40%] w-screen p-4 mt-2'>
      <div className='text-3xl font-extrabold'>
        <h1>Beau-Rivage</h1>
      </div>
      <div className='text-2xl font-bold'>
        <p>Genève</p>
      </div> 
      <div className='text-xl font-medium mt-2 text-wrap'>
        <p>
          Beau Rivage is a luxury 5 star hotel in Geneva offering a refined atmosphere for holiday accommodation and one of finest gastronomic offers in the city.Located in the heart of the world city, Beau-Rivage is your starting point for a thousand historical, cultural, artistic or natural discoveries. Our dearest wish: to share with you the best that Geneva has to offer. As the seasons change, follow us as we dive into its shades of color, explore its hidden gems and the vestiges of its history
        </p>
      </div>

      {/* Buttons */}
      <div>
        <Link href="/book-hotel">
          <Button>Book hotel</Button>
        </Link>
      </div>
    </div>
  </div>




      </div>
    </div>
  )
}

export default page

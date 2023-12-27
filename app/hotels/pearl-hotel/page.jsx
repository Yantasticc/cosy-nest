"use client"

import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div> 
        
    <div className='flex lg:flex-row flex-col'>
      <div className='lg:h-[40%] lg:w-[60%] w-screen p-5'>
        <img className='rounded-3xl max-w-full' src="https://media.cntraveler.com/photos/5f678a667193f8759c50da00/master/w_960%2Cc_limit/totel-d'angleterre-geneva-Bellevue-Suite.jpg" alt="/" />
      </div>
    <div className='lg:h-[40%] lg:w-[40%] w-screen p-4 mt-2'>
      <div className='text-3xl font-extrabold'>
        <h1>The Pearl Hotel</h1>
      </div>
      <div className='text-2xl font-bold'>
        <p>Florida</p>
      </div> 
      <div className='text-xl font-medium mt-2 text-wrap'>
        <p>
          The Pearl’s Guest Rooms are luxurious and wonderfully decorated in an elegant coastal style. Many of our guest rooms include private balconies with views of the Gulf of Mexico (Gulf View), the hotel pool and Havana Beach Rooftop (Pool Front or Pool View) or the charming community of Rosemary Beach® (Town View).  Our guest rooms come equipped with either King, Queen or Two Queen Beds. Please note that rollaway beds and/or cribs are not available.
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

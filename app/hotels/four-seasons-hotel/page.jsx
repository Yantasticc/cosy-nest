"use client"

import Navbar from '@/components/Navbar'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
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
        <img className='rounded-3xl max-w-full' src="https://media.cntraveler.com/photos/5da73e6f2b01d600080ef7da/master/w_960%2Cc_limit/Four-Seasons-Hotel-Chicago_CFS_1217.jpg" alt="/" />
      </div>
    <div className='lg:h-[40%] lg:w-[40%] w-screen p-4 mt-2'>
      <div className='text-3xl font-extrabold'>
        <h1>Four Seasons Hotel</h1>
      </div>
      <div className='text-2xl font-bold'>
        <p>Chicago</p>
      </div> 
      <div className='text-xl font-medium mt-2 text-wrap'>
        <p>
          Expertly designed rooms with fast WiFi, complimentary coffee & tea, yoga mats, and more. The best of both worlds for business needs and vacay goals. Leisure & Business. Book Direct and Save. Extended Stay Apartments. Certificate of Excellence. Contactless Arrival. Corporate Rates. Efficiency and Comfort. Groups & Meetings. Prime Locations. Flexible Cancellation. Rooms & Suites. Near Major Transit Hubs. Extended Stay Apartments.
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

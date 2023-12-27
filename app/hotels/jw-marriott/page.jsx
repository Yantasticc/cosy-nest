"use client"

import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const page = () => {
  return (
    <div>
    <div>
      <Navbar />
    </div>
    <div> 
      
  <div className='flex lg:flex-row flex-col'>
    <div className='lg:h-[40%] lg:w-[60%] w-screen p-5'>
      <img className='rounded-3xl max-w-full' src="https://media.cntraveler.com/photos/5db7605811c1e500092e7b19/master/w_960%2Cc_limit/jwmarriott-nashville-2019-2.jpg" alt="/" />
    </div>
  <div className='lg:h-[40%] lg:w-[40%] w-screen p-4 mt-2'>
    <div className='text-3xl font-extrabold'>
      <h1>JW Marriott</h1>
    </div>
    <div className='text-2xl font-bold'>
      <p>Nashville</p>
    </div> 
    <div className='text-xl font-medium mt-2 text-wrap'>
      <p>
        Within the Masai Mara National Reserve in Kenya, the lodge is a sophisticated sanctuary from which to discover animals and breathtaking vistas in harmony. Each of the 20 luxurious tents offer a retreat from the exhilarating guided game drives.Our founder, J. Willard Marriott, believed that taking care of himself allowed him to better care for others. A family man who deeply understood his impact on the those around him, his legacy lives on at over 100 JW Marriott hotels around the globe.
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

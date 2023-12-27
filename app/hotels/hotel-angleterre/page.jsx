"use client"

import React from 'react'
import Navbar from '@/components/Navbar'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

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
        <h1>Hotel d'Angleterre</h1>
      </div>
      <div className='text-2xl font-bold'>
        <p>Geneva</p>
      </div> 
      <div className='text-xl font-medium mt-2 text-wrap'>
        <p>
          Poised on the edge of Lac Léman and deftly combining genuine Swiss hospitality with British elegance, the historic d’Angleterre is a Genevan landmark boasting views of the famous Jet d’Eau and Mont Blanc beyond. Guests enjoy sumptuous lodgings bedecked in exquisite art and elegant furnishings; dine on international cuisine at Windows restaurant whilst enjoying lake views; sip cocktails and revel in the live music in Leopard Bar, and relax with a Cohiba in the hotel’s cigar lounge.
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

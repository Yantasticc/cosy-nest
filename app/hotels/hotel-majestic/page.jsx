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
        <img className='rounded-3xl max-w-full' src="https://media.cntraveler.com/photos/615f1fc2e1cbffc38137d78d/master/w_960%2Cc_limit/Ho%25CC%2582tel%2520Barrie%25CC%2580re%2520Le%2520Majestic%2520Cannes_IMA-12096-%2520-pascal-pronnier.jpg" alt="/" />
      </div>
    <div className='lg:h-[40%] lg:w-[40%] w-screen p-4 mt-2'>
      <div className='text-3xl font-extrabold'>
        <h1>Hôtel Barrière Le Majestic</h1>
      </div>
      <div className='text-2xl font-bold'>
        <p>Cannes</p>
      </div> 
      <div className='text-xl font-medium mt-2 text-wrap'>
        <p>
        Hotel Barrière Le Majestic Cannes is located in the centre of the town of Cannes on the Croisette at 25 km from the aéroport de Nice via the road along the seaside, 1 km (5 mn) from the gare de Cannes, and faces the palais des Festivals on the Croisette. Hotel Barrière Le Majestic Cannes is located 8 km from Antibes, 30 km from Saint-Paul de Vence, 50 km from Monaco and 50 km from Saint-Tropez. Its prestigious neighbors on the Croisette are the InterContinental Carlton Cannes Hotel.
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

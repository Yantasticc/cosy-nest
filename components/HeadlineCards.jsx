import React from 'react'
import Link from "next/link";

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Four Seasons Hotel</p>
          <p className='px-2'>Chicago</p>
          <button className='border-white bg-white text-black mx-2 rounded-full px-2 text-md font-medium absolute bottom-4'>
            <Link href="hotels/four-seasons-hotel">
              Book now
            </Link>
          </button>
        </div>
        <img 
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src="https://media.cntraveler.com/photos/5da73e6f2b01d600080ef7da/master/w_960%2Cc_limit/Four-Seasons-Hotel-Chicago_CFS_1217.jpg" alt="/" />
      </div>

    {/* Card */}
    <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'> Hotel d'Angleterre</p>
          <p className='px-2'>Geneva</p>
          <button className='border-white bg-white text-black mx-2 rounded-full px-2 text-md font-medium absolute bottom-4'>
          <Link href="hotels/hotel-angleterre">
            Book now
          </Link>
          </button>
        </div>
        <img 
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src="https://media.cntraveler.com/photos/5f678a667193f8759c50da00/master/w_960%2Cc_limit/totel-d'angleterre-geneva-Bellevue-Suite.jpg" alt="/" />
      </div>

      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Beau-Rivage</p>
          <p className='px-2'>Genève</p>
          <button className='border-white bg-white text-black mx-2 rounded-full px-2 text-md font-medium absolute bottom-4'>
          <Link href="hotels/beau-rivage">
            Book now
          </Link>
          </button>
        </div>
        <img 
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src="https://media.cntraveler.com/photos/651c5897c0888feaf67ddee2/master/w_960%2Cc_limit/Geneve.png" alt="/" />
      </div>

      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Hôtel Barrière Le Majestic</p>
          <p className='px-2'>Cannes</p>
          <button className='border-white bg-white text-black mx-2 rounded-full px-2 text-md font-medium absolute bottom-4'>
          <Link href="hotels/hotel-majestic">
            Book now
          </Link>
          </button>
        </div>
        <img 
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src="https://media.cntraveler.com/photos/615f1fc2e1cbffc38137d78d/master/w_960%2Cc_limit/Ho%25CC%2582tel%2520Barrie%25CC%2580re%2520Le%2520Majestic%2520Cannes_IMA-12096-%2520-pascal-pronnier.jpg" alt="/" />
      </div>

      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>JW Marriott</p>
          <p className='px-2'>Nashville</p>
          <button className='border-white bg-white text-black mx-2 rounded-full px-2 text-md font-medium absolute bottom-4'>
          <Link href="hotels/jw-marriott">
            Book now
          </Link>
          </button>
        </div>
        <img 
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src="https://media.cntraveler.com/photos/5db7605811c1e500092e7b19/master/w_960%2Cc_limit/jwmarriott-nashville-2019-2.jpg" alt="/" />
      </div>

      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>The Pearl Hotel</p>
          <p className='px-2'> Florida</p>
          <button className='border-white bg-white text-black mx-2 rounded-full px-2 text-md font-medium absolute bottom-4'>
          <Link href="hotels/pearl-hotel">
            Book now
          </Link>
          </button>
        </div>
        <img 
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src="https://media.cntraveler.com/photos/5d82914187e08700090f2d64/master/w_960%2Cc_limit/The-Pearl-Hotel---Signature-Aerial-(2).jpg" alt="/" />
      </div>

    </div>
  )
}

export default HeadlineCards

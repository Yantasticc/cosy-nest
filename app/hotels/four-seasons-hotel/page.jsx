"use client"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { FaWifi } from "react-icons/fa"; 
import { BiDrink } from "react-icons/bi"; 
import { MdRestaurantMenu } from "react-icons/md"; 
import { GiColdHeart } from "react-icons/gi"; 
import { MdOutlinePets } from "react-icons/md"; 
import { FaParking } from "react-icons/fa"; 
import { BiSpa } from "react-icons/bi"; 
import { FaSwimmingPool } from "react-icons/fa"; 
import { BiWifi } from "react-icons/bi"; 
import React from 'react'

const page = () => {
  return (
    <div>
      <div> 
        
        <div className='flex lg:flex-row flex-col'>
          <div className='lg:h-[40%] lg:w-[60%] w-screen p-5'>
            <img className='rounded-3xl max-w-full' src="https://media.cntraveler.com/photos/5da73e6f2b01d600080ef7da/master/w_960%2Cc_limit/Four-Seasons-Hotel-Chicago_CFS_1217.jpg" alt="/" />
          </div>
          <div className='lg:h-[40%] lg:w-[40%] w-screen p-4 mt-2'>
            <div className='text-3xl font-extrabold'>
              <h1>Four Seasons Hotel</h1>
            </div>
            <div className='text-2xl font-bold py-1'>
              <p>Chicago</p>
            </div> 
            <div className='text-xl font-medium mt-1 text-wrap'>
              <p>
                Expertly designed rooms with fast WiFi, complimentary coffee & tea, yoga mats, and more. The best of both worlds for business needs and vacay goals. Leisure & Business. Book Direct and Save. Extended Stay Apartments. Certificate of Excellence. Contactless Arrival. Corporate Rates. Efficiency and Comfort. Groups & Meetings. Prime Locations. Flexible Cancellation. Rooms & Suites. Near Major Transit Hubs. Extended Stay Apartments.Extended Stay Apartments. Certificate of Excellence. Contactless Arrival.
              </p>
            </div>
            
            <div className='flex flex-wrap justify-center item-center'>
              {/* Booking Button */}
              <div className='py-2 flex flex-1'>
                <Link href='/book-hotel'>
                  <Button className='text-base'>Book hotel</Button>
                </Link>
              </div>
              {/* Link */}
              <div className='flex-1 py-2 mr-3 underline text-blue-700'>
                <Link href='/' className='cursor-pointer'>
                  <span>click here to check for offers</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
        <div className="mx-5">
          <div className="text-3xl font-extrabold">
            <h1 className="mb-5">Top amenities</h1>
          </div>
          <div className='grid sm:grid-cols-3 grid-cols-2 gap-y-7 text-xl'>
            <div className="flex ">
              <div className="mr-5">
                <BiWifi />
              </div>
              <div className="4x">
                WiFi in lobby
              </div>
            </div>
            <div className="flex">
              <div className="mr-5">
                <FaWifi />
              </div>
              <div>
                Free WiFi
              </div>
            </div>
            <div className="flex">
              <div className="mr-5">
                <FaSwimmingPool />
              </div>
              <div>
                Pool
              </div>
            </div>
            <div className="flex">
              <div className="mr-5">
                <BiSpa />
              </div>
              <div>
                Spa
              </div>
            </div>
            <div className="flex">
              <div className="mr-5">
                <FaParking />
              </div>
              <div>
                Parking
              </div>
            </div>
            <div className="lg:flex md:flex hidden ">
              <div className="mr-5">
                <MdOutlinePets />
              </div>
              <div>
                Pets
              </div>
            </div>
            <div className="flex">
              <div className="mr-5">
                <GiColdHeart />
              </div>
              <div>
                A/C
              </div>
            </div>
            <div className="flex">
              <div className="mr-5">
                <MdRestaurantMenu />
              </div>
              <div>
                Restaurant
              </div>
            </div>
            <div className="flex">
              <div className="mr-5">
                <BiDrink />
              </div>
              <div>
                Hotel bar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

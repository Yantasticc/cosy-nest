"use client"

import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from "@/components/ui/button"

const Page = () => {
  const [startDate, setStartDate] = useState(new Date());

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
            <div className='text-2xl font-bold'>
              <p>Chicago</p>
            </div>
            {/* Booking form */}
            <div className='text-xl font-medium mt-2 text-wrap border-2 border-gray-200'>
              {/* booking hero */}
              <div className='border-2 bg-green-500 m-3'>
                <div className='flex justify-center'>
                  cosy-nest.com
                </div>
                <div className='flex justify-center space-x-3'>
                  <div>
                    ✔ Free cancellation
                  </div>
                  <div>
                    ✔ Breakfast included
                  </div>
                </div>
                <div className='flex justify-center space-x-3'>
                  <div>
                    RS.12345
                  </div>
                  <div>
                    /View Deal Button\
                  </div>
                </div>
              </div>

              {/* date picker */}
                <div className='flex flex-col items-center'>
                <div className='flex justify-center mb-2'>
                    <div className='mr-3 mt-2'>
                    Check-in: 
                    </div>
                    <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="w-[60%] p-2 text-xl border rounded focus:outline-none focus:ring focus:border-gray-300"
                    calendarClassName="bg-white shadow-lg"
                    />
                </div>
                </div>

                <div className='flex flex-col items-center'>
                <div className='flex justify-center mb-2'>
                    <div className='mr-3 mt-2'>
                    Check-out:
                    </div>
                    <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="w-[60%] p-2 text-xl border rounded focus:outline-none focus:ring focus:border-gray-300"
                    calendarClassName="bg-white shadow-lg"
                    />
                </div>
                </div>

                <div className='mt-4 mr-3 p-4 '>
                    <label className='block text-xl font-medium mb-2'>Number of Guests:</label>
                    <input
                        type='number'
                        className='w-[50%] p-2 text-xl border rounded focus:outline-none focus:ring focus:border-gray-300'
                        placeholder='Enter the number of guests'
                    />
                </div>

                <div className='flex justify-center'>
                    <Button>Submit</Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

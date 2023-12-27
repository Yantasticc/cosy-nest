import React, { useState } from 'react';
import { data } from '../constants/data.js';

const Hotel = () => {

  const [hotel, setHotel] = useState(data);

  //   Filter Type hotel
  const filterType = (category) => {
    setHotel(
      data.filter((hotel) => {
        return hotel.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setHotel(
      data.filter((hotel) => {
        return hotel.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Featured Accommodations
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700 ml-3'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setHotel(data)}
              className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 mx-2 rounded-full'
            >
              All
            </button>
            <button
              onClick={() => filterType('Hotel')}
              className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 mx-2 rounded-full '
            >
              Hotel
            </button>
            <button
              onClick={() => filterType('Resort')}
              className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 mx-2 rounded-full '
            >
              Resort
            </button>
            <button
              onClick={() => filterType('Lodge')}
              className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 mx-2 rounded-full '
            >
              Lodge
            </button>
            <button
              onClick={() => filterType('Villa')}
              className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-full '
            >
              Villa
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700 ml-3'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full'
            >
              <div className='px-3'>
                $
              </div>
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full'
            >
              <div className='px-3'>
                $$
              </div>
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full'
            >
              <div className='px-3'>
                $$$
              </div>
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full'
            >
              <div className='px-3'>
                $$$$
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Display hotel */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {hotel.map((hotel, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{hotel.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {hotel.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
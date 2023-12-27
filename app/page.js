"use client"

import Category from '@/components/Category'
import HeadlineCards from '@/components/HeadlineCards'
import Hero from '@/components/Hero'
import Hotel from '@/components/Hotel'
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Hotel />
      <Category />
    </div>
  )
}

export default Home

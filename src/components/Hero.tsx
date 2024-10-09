"use client"

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'


const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
<div className='flex-l pt-36 padding-x'>
<h1 className='hero__title'>
    Find, book, or rent a car - quckely
    and easily!
</h1>

<p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process.</p>
  
<CustomButton
title="Explore Cars"
containersStyles="bg-primary-blue
text-width rounded-full mt-10"
handleClick={handleScroll}
 />
</div>
    </div>
  )
}

export default Hero
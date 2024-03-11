import React from 'react'
import LeLaundry1 from '../assets/laundromat1.jpg'
import LeLaundry2 from '../assets/laundromat2.jpg'
import LeLaundry3 from '../assets/laundromat3.jpg'
import LeLaundry4 from '../assets/laundromat4.jpg'
import LeLaundry5 from '../assets/laundromat5.jpg'
import LeLaundry6 from '../assets/laundromat6.jpg'

const Laundromat = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1>We Got The Wash</h1>
      <p className='py-4'>You Bring The Clothes</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={LeLaundry5} alt="/" />
        <img className='w-full h-full object-cover' src={LeLaundry3} alt="/" />
        <img className='w-full h-full object-cover' src={LeLaundry2} alt="/" />
        <img className='w-full h-full object-cover' src={LeLaundry6} alt="/" />
        <img className='w-full h-full object-cover' src={LeLaundry4} alt="/" />
      </div>
    </div>
  )
}

export default Laundromat
import React from 'react'
import All from '../assets/All.png'
import Downy from '../assets/Downy.png'
import Gain from '../assets/Gain.png'
import armHammer from '../assets/Arm&Hammer.png'
import Persil from '../assets/Persil.png'
import Tide from '../assets/Tide.png'
import BrandsCard from './BrandsCard'

const Brands = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>


    <BrandsCard bg={All} text='All' />
    <BrandsCard bg={Downy} text='Downy' />
    <BrandsCard bg={Gain} text='Gain' />
    <BrandsCard bg={armHammer} text='armHammer' />
    <BrandsCard bg={Persil} text='Persil' />
    <BrandsCard bg={Tide} text='Tide' />


    </div>
  )
}

export default Brands
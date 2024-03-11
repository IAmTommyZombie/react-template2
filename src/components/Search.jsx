import React from 'react'
import { BiSolidDryer } from "react-icons/bi";
import { GiWashingMachine } from "react-icons/gi";


const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, asperiores.</h2>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere iste qui! Et itaque, dolore natus cum porro fugit rerum deserunt consectetur excepturi minus nemo tenetur ducimus! Sint incidunt saepe molestiae facere nam dolor libero obcaecati sit culpa! Officiis cupiditate culpa ex autem aspernatur fugiat corporis facere libero suscipit? Hic quae rem numquam pariatur iure, animi in provident nostrum et omnis veritatis laudantium corrupti odio beatae aut possimus enim quo nisi, suscipit itaque debitis quam quisquam. Corrupti accusantium at, voluptatem ex iusto perspiciatis asperiores dolores quia ea ullam quaerat alias sapiente culpa provident iure? Dolorem nulla sit hic aliquam libero?</p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                  <button>
                    <GiWashingMachine size={50} />
                  </button>
                  <div>
                    <h3 className='py-2'>Lorem Ipsum</h3>
                    <p className='py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
                
                <div className='flex flex-col lg:flex-row items-center text-center'>
                  <button>
                    <BiSolidDryer size={50} />
                  </button>
                  <div>
                    <h3 className='py-2'>Lorem Ipsum</h3>
                    <p className='py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
            </div>
        </div>

        <div>
          <div className='border text-center'>
            <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full '>
            <div className='flex flex-col my-2'>
              <label>Location</label>
              <select className='border rounded-md p-2'>
                <option>--</option>
                <option>Everett</option>
                <option>Malden</option>
                <option>Watertown</option>
                <option>Medford</option>
              </select>
            </div>
            <div className='flex flex-col my-2'>
              <label>Drop Off</label>
              <input className='border rounded-md p-2' type="date"/>
            </div>
            <div className='flex flex-col my-2'>
              <label>Pick Up</label>
              <input className='border rounded-md p-2' type="date"/>
            </div>
            <button className='w-full py-4'>Rates & Availability</button>
          </form>
        </div>
    </div>
  )
}

export default Search
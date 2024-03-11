import React from 'react'

const BrandsCard = (props) => {
  return (
    <div>
        <div className='relative'>
            <img className='h-full w-full object-cover' src={props.bg} />
            <div className=' absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-xl absolute font-bold '>
                    
                </p>
            </div>
        </div>
    </div>
  )
}

export default BrandsCard
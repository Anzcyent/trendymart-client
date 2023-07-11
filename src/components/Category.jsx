import React from 'react'

const Category = ({name, image, color}) => {
  return (
    <div className='lg:w-1/3 w-full relative lg:mx-2 lg:my-0 my-2 hover:opacity-80 cursor-pointer transition active:scale-95'>
        <img src={image} alt="name" className='w-full h-full ' />
        <div className="flex flex-col justify-center items-center absolute inset-12">
            <span className='font-bold text-white text-4xl' style={{color}}>{name}</span>
            <button className='text-white border p-1 mt-3 hover:bg-white hover:text-black hover:border-0 font-semibold'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Category
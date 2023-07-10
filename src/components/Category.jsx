import React from 'react'

const Category = ({name, image, color}) => {
  return (
    <div className='sm:w-1/3 w-full relative sm:mx-2 sm:my-0 my-2 hover:opacity-80 cursor-pointer transition active:scale-95'>
        <img src={image} alt="name" className='w-full h-full ' />
        <div className="flex flex-col justify-center items-center absolute inset-12">
            <span className='font-bold text-white text-4xl' style={{color}}>{name}</span>
        </div>
    </div>
  )
}

export default Category
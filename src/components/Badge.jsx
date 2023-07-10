import React from 'react'

const Badge = ({children}) => {
  return (
    <div className='rounded-full bg-aqua w-5 h-5 text-xs font-bold text-white flex justify-center items-center absolute top-[-10px] opacity-50'>
        {children}
    </div>
  )
}

export default Badge
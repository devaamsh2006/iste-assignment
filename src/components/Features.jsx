import React from 'react'
import { PiPottedPlantFill } from "react-icons/pi";
import { FcShipped } from "react-icons/fc";
import { LiaRecycleSolid } from "react-icons/lia";
function Features() {
  return (
    <div className='flex justify-around items-center p-6 bg-gray-100'>
        <div className='flex items-center justify-center gap-3'>
        <PiPottedPlantFill className='text-green-500 scale-150'/>
        <div className='flex flex-col'>
        <p className='capitalize'>plants collection</p>
        <p className='font-light'>Any plants for your space</p>
        </div>
        </div>
        <div className='flex items-center justify-center gap-3'>
        <FcShipped className='text-green-500 scale-150'/>
        <div className='flex flex-col'>
        <p className='capitalize'>free shipping</p>
        <p className='font-light'>Free shipping on order</p>
        </div>
        </div>
        <div className='flex items-center justify-center gap-3'>
        <LiaRecycleSolid className='text-green-500 scale-150'/>
        <div className='flex flex-col'>
        <p className='capitalize'>100% money back</p>
        <p className='font-light'>if the item didn't suit you</p>
        </div>
        </div>
    </div>
  )
}

export default Features
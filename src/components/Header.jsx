import React, { useState } from 'react'
import { CiWallet } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RiLeafFill } from "react-icons/ri";
function Header() {
    let [bal,currbal]=useState(0.00)
  return (
    <div className='flex justify-around items-center p-3 bg-gray-300'>
        <h1 className='font-semibold font-sans flex gap-2 items-center scale-105'><RiLeafFill className='text-green-500 scale-150'/>SIMPLY NATURE</h1>
        <div>
            <ul className='flex gap-7 items-center justify-between'>
                <li className='cursor-pointer text-orange-500' tabIndex="0">Home</li>
                <li className='cursor-pointer focus:text-orange-500' tabIndex="0">Store</li>
                <li className='cursor-pointer focus:text-orange-500' tabIndex="0">About Us</li>
                <li className='cursor-pointer focus:text-orange-500' tabIndex="0">Contact Us</li>
                <li className='cursor-pointer focus:text-orange-500' tabIndex="0">My Account</li>
                <li className='flex items-center gap-1 justify-center text-orange-500' tabIndex="0">${bal}<CiWallet /></li>
                <li className='cursor-pointer focus:text-orange-500' tabIndex="0"><CgProfile /></li>
            </ul>
        </div>
    </div>
  )
}

export default Header
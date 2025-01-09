import React from 'react'
import { RiLeafFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
function Footer() {
  return (
    <div>
    <div className='flex justify-around border-t-2 border-slate-400 shadow-xl shadow-gray-50 pt-5 pb-5'>
        <div className='flex flex-col gap-y-2 items-center'>
        <div className='scale-150'>
        <RiLeafFill className='text-green-500 scale-150'/>
        </div>
        <h1 className='capitalize'>simply natural</h1>
        <div className='flex gap-2'>
        <FaFacebook />
        <FaInstagramSquare />
        <FaTwitter />
        <FaLinkedin />
        </div>
        </div>
        <div className='flex flex-col'>
        <h1 className='font-semibold'>Quick Links</h1>
        <p>Introduction</p>
        <p>Know more About us</p>
        <p>Visit Store</p>
        <p>Let's connect</p>
        </div>
        <div className='flex flex-col'>
            <h1 className='font-semibold'>Important Links</h1>
            <p>Privacy Policy</p>
            <p>Shipping Details</p>
            <p>Terms & Conditions</p>
            <p>Media Kit</p>
        </div>
        <div className='flex flex-col'>
            <h1 className='capitalize font-semibold'>get in touch with us for<br /> the best quality plants &<br /> succulents</h1>
            <p className='w-56 flex flex-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dicta culpa necessitatibus dolorem libero in accusantium temporibus earum debitis laudantium.</p>
        </div>
    </div>
    <div className='shadow-sm shadow-black flex justify-around p-4'>
        <p>Copyright <MdOutlineCopyright className='inline' /> 2025 Simply Natural</p>
        <p>Powered by Simply Natural</p>
    </div>
    </div>
  )
}

export default Footer
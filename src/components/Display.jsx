import React from 'react'
import "./Display.css"
import {HashLink as Link} from "react-router-hash-link";

function Display() {
  return (
    <div className='dev p-16'>
        <p className='font-normal px-3'>Best Quality Plants</p>
        <h1 className='capitalize font-semibold text-6xl mb-4 '>amazing variety<br /> of plants starting<br /> just $6</h1>
        <Link to="#products" className='p-2 h-12 bg-red-500 rounded-sm text-white'>Shop Now</Link>
    </div>
  )
}

export default Display
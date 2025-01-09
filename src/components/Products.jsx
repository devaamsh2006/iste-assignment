import React, { useEffect, useState } from 'react';
import "./Products.css"

function Products() {
    const [prod,setprod]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/plants')
        .then(res=>res.json())
        .then(prod=>setprod(prod))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='px-20 py-10'>
        <h1 className='text-center font-bold text-3xl m-3'>Featured Plants</h1>
        <p className='text-center font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='flex flex-wrap gap-x-16 gap-y-10 pl-11 pt-6' id='products'>
        {
            prod.length===0?
            <div class="animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-500"></div>
            :
            prod.map(ele=>{
                return(
                    <div key={ele.id} className='relative bg-slate-100 shadow-md shadow-gray-300 p-2 group hover:bg-slate-700 rounded-sm cursor-pointer'>
                    <img src={ele.image_url} className='w-48 h-48' />
                    <p className='font-medium text-black group-hover:text-white'>{ele.category}</p>
                    <p className='font-medium text-black group-hover:text-white'>{ele.name}</p>
                    {
                     ele.sale ?
                          <div className='flex gap-1'>
                            <p className='line-through group-hover:text-white'>${ele.price}</p>
                            <p className='group-hover:text-white'>${ele.price - 10}</p>
                            <p className='absolute top-1 left-1 bg-white rounded-lg items-center w-11 flex justify-center font-semibold'>Sale</p>
                          </div>
                          :
                          <p className='font-medium text-black group-hover:text-white'>${ele.price}</p>
                    }
                    <p className='font-medium text-black group-hover:text-white'>Rating: {ele.rating}</p>
</div>            
                )
            })

        }
        </div>
    </div>
  )
}

export default Products

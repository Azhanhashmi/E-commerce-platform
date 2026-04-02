import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Built for everyday style, made to stand out.
Wear confidence. Own your look.
Quality you feel, style you show.
Your style journey starts here.
Fashion that fits your vibe.
Designed to impress, priced to move.
Because your outfit tells your story.
Stay trendy. Stay original
            </p>
        </div>

        <div>
            <p className='text-xl font-meduim mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-meduim mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>91-7290891058</li>
                <li>azhanhashmi@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026@ forever.com - All rights reserved</p>
      </div>  

    </div>
  )
}

export default Footer

import React from 'react'

import phone from './images/phone.svg'

const Hero = ({setStripeMenu}) => {
    return (
        <div className='w-[100vw] h-fit md:flex justify-between' onMouseOver={()=>setStripeMenu(false)}>
            {/* <div className='absolute top-0 left-0 -z-10'>
                <img src={hero} alt='hero' className='w-[100vw] h-[80vh] object-cover' />
                <img src={phone} alt='phone' className=' right-[15%] top-[15%] absolute z-30' />
            </div> */}
            <div className='mt-28 md:mt-12 lg:mt-8 md:w-[60vw] flex flex-col flex-wrap'>
                <h2 className='w-[70vw] md:w-[80%] text-5xl lg:text-[5.5rem] font-bold leading-[3.5rem] lg:leading-[5.5rem]'>
                    Payments infrastructure for the internet</h2>
                <p className='mt-8 w-[80%]  text-sm md:text-lg  md:leading-9 text-gray-600'>
                    Millions of companies of all sizes—from startups to Fortune
                    500s—use Stripe’s software and APIs to accept payments,
                    send payouts, and manage their businesses online.</p>
                <button className='bg-black w-fit text-white px-2 py-1 mt-4 rounded-md'>
                    Start now</button>
            </div>
            <div className='hidden md:block md:w-[40vw] md:mr-20 lg:m-0'>
                <img src={phone} alt='phone' 
                className='object-cover h-[80%] lg:h-[90%] ' />
            </div>
        </div>
    )
}

export default Hero
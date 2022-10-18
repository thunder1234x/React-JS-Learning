import React, { useState } from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

import hero from './images/hero.svg'
import StripMenu from './StripMenu'

import sublinks from './data'



const Main = () => {
  const [isOpenStripeMenu , setStripeMenu] = useState(false);
  const [location , setLocation] = useState({});
  const [page , setPage] = useState({page:'', links:[]})

  const openStripMenu =(e)=>{
    const pageContent = e.target.textContent;
    const page = sublinks.find(link=>link.page === pageContent);
    const coOrdinates = e.target.getBoundingClientRect();
    // console.log(pageContent , coOrdinates,page);
    const mid = (coOrdinates.left + coOrdinates.right) /2;
    const bottom = coOrdinates.bottom -3 ;
    setLocation({mid,bottom});
    setPage(page);
    setStripeMenu(true);
  }

  return (
    <div className='p-6 md:px-10 overflow-hidden lg:px-28'>
      <div className='absolute top-0 left-0 -z-10'>
        <img src={hero} alt='hero' className='w-[100vw] h-[80vh] object-cover' />
      </div>
      <Navbar openStripMenu={openStripMenu} setStripeMenu={setStripeMenu}/>
      <Hero setStripeMenu={setStripeMenu}/>
      <StripMenu isOpenStripeMenu={isOpenStripeMenu} location={location} page={page}/>
    </div>
  )
}

export default Main
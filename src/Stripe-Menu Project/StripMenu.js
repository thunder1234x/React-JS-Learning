import React, { useEffect, useRef } from 'react'

const StripMenu = ({isOpenStripeMenu , location , page}) => {
    const container = useRef(null);
    // console.log(page);
    useEffect(()=>{
        const element = container.current;
        if (element) {
            element.style.left = `${location.mid-50}px`;
            element.style.top = `${location.bottom}px`;
            // element.style.width = `${location.width+50}px`;
        }
    
    },[location])
  return (
    <>
    { isOpenStripeMenu && <div ref={container} className=' bg-white w-fit hidden md:block absolute  p-6  rounded-md 
    shadow-md shadow-gray-400  duration-1000 mr-10'>
        <p className='font-bold underline text-green-600 mb-2 capitalize'>{page.page}</p>
        <div className='flex justify-start items-center flex-wrap'>
          {page.links.map(link=>{
            const {label,icon,url} = link;
            return(
              <div className='mr-20 py-2 flex justify-center items-center'>
                <a className='mr-4' href={url} >{icon}</a>
                <p>{label}</p>
              </div>
            )
          })}
        </div>
    </div> 
    }
    </>
  )
}

export default StripMenu
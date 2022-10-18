import React, { useEffect, useState, useRef } from 'react'
import { useGlobalContext } from './AppContext'
import './Main.css'

import { FaTimes } from 'react-icons/fa';
import logo from './pictures/logo.svg';

import { links, social } from './data'

const Sidebar = () => {
  const { setSidebarShow, sidebarShow } = useGlobalContext();
  const slideDiv = useRef(null);

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const updateWindow = () => {
    setWindowSize(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindow);

    return () => {
      window.removeEventListener('resize', updateWindow)
    }
  }, [])

  useEffect(() => {
    if (sidebarShow) {
      if (windowSize > 768 && windowSize <=1200) {
        slideDiv.current.style.width = `${Math.floor(windowSize*40)/100}px`;
      }else if(windowSize > 1200){
        slideDiv.current.style.width = `${Math.floor(windowSize*30)/100}px`;
      }else{
        slideDiv.current.style.width = `${windowSize}px`;
      }
      slideDiv.current.style.height = `${windowHeight}px`;
    } else {
      slideDiv.current.style.width = 0;
      slideDiv.current.style.height = 0;
    }
  }, [sidebarShow, windowSize])

  const closeSidebar = (e) => {
    setSidebarShow(false);
  }

  console.log(windowSize);

  return (
    <div ref={slideDiv} className={`bg-white absolute  top-0 left-0
    ${sidebarShow ? `slider` : 'w-0 overflow-hidden slider'} `}>
      <div className='p-4'>
        <div className='flex justify-between items-center mx-2 flex-wrap'>
          <img src={logo} alt='logo' />
          <FaTimes className='w-8 h-8 text-red-600'
            onClick={(e) => closeSidebar(e)} />
        </div>
        {links.map(link => {
          return (
            <div key={link.id} className='flex justify-start 
            items-center mx-4 my-10'>
              <button className='scale-150 text-gray-500'>
                {link.icon}</button>
              <p className='mx-6 capitalize font-semibold tracking-wide
              text-xl text-gray-600'>
                {link.text}</p>
            </div>
          )
        })}
        <div className='mt-40 flex justify-center'>
          {social.map(item => {
            return (
              <div key={item.id} className='mx-3'>
                <a href={item.url} className=' text-blue-400'>{item.icon}</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
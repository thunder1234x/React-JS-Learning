import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.svg';

import './Main.css';
import Submenu from './Submenu';

const Navbar = ({openStripMenu , setStripeMenu}) => {
    const [showModal, setModal] = useState(false);

    const handleClickNavBar = (e)=>{
        console.log(e.target.classList);
        if (!e.target.classList.contains('link-btn')) {
            setStripeMenu(false);
        }
    }

    return (
        <div className='md:mb-10 ' onMouseOver={(e)=>handleClickNavBar(e)}>
            <div className='flex justify-between md:justify-between items-center '>
                <div>
                    <img src={logo} alt="logo" className='object-cover w-fit' />
                </div>
                <div className='bg-black text-white w-fit p-2 rounded-md md:hidden'>
                    <FaBars onClick={() => setModal(true)} className='w-6 h-6 mx-auto hover:cursor-pointer' />
                </div>
                <div className='hidden md:block w-[90%] link-btn' >
                    <Submenu openStripMenu={openStripMenu}/>
                </div>
                <div className='hidden md:block w-16  py-1 text-center mx-2 bg-black rounded-md'>
                    <button className='text-white text-md ' >Sign In</button>
                </div>
            </div>
            {showModal && <div className='fixed top-0 left-0 w-[100vw] 
            h-[100vh] bg-modal z-10  flex justify-center items-center md:hidden'>
                <div className='bg-white w-[92%] h-[95%]' >
                    <FaTimes className='w-6 h-6 text-red-700 fixed right-4 m-6 hover:cursor-pointer'
                        onClick={() => setModal(false)} />
                    <Submenu />
                </div>
            </div>}

        </div>
    )
}

export default Navbar
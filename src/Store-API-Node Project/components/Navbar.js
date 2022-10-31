import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import logo from '../images/logo.svg'
import { FaBars, FaUserPlus, FaShoppingCart } from 'react-icons/fa'
import Modal from './Modal'

const Navbar = () => {
    const [isOpenModal, setModal] = useState(false);
    return (
        <div className='w-[100%]'>
            {isOpenModal && <Modal setModal={setModal} isOpenModal={isOpenModal} />}
            <div className='lg:flex justify-evenly items-center'>
                {/* <section className='flex flex-col lg:w-[20%] lg:justify-center lg'> */}
                    <div className='flex justify-between items-center p-2 lg:w-[20%]'>
                        <img className='w-[170px] object-cover lg:w-[200px]' src={logo} alt='logo' />
                        <FaBars className='w-8 h-8 text-amber-700 cursor-pointer lg:hidden'
                            onClick={() => setModal(true)} />
                    </div>
                {/* </section> */}
                <div className='hidden lg:flex  lg:w-[50%] justify-center items-center'>
                    <Link className='mx-8 text-lg font-serif tracking-widest text-gray-800 hover:underline underline-offset-[.7rem]
                    decoration-amber-700'  to='/' >Home</Link>
                    <Link className='mx-8 text-lg font-serif tracking-widest text-gray-800 hover:underline underline-offset-[.7rem]
                    decoration-amber-700'  to='/about' >About</Link>
                    <Link className='mx-8 text-lg font-serif tracking-widest text-gray-800 hover:underline underline-offset-[.7rem]
                    decoration-amber-700'  to='/store/products' >Products</Link>
                </div>
                <div className='hidden lg:flex lg:w-[20%] items-center'>
                    <span className='text-2xl font-serif tracking-wider mx-1'>
                    Cart</span>
                    <span className='absolute w-6 h-6 rounded-full text-center 
                    left-[83%] top-[2%] bg-amber-500'>0</span>
                    <FaShoppingCart className='mr-8 w-7 h-7 cursor-pointer' />
                    <span className='text-2xl font-serif tracking-wider mx-1'>Login</span>
                    <FaUserPlus className='mr-8 w-7 h-7 cursor-pointer' />
                </div>
            </div>
            <div> <Outlet /> </div>
        </div>
    )
}

export default Navbar
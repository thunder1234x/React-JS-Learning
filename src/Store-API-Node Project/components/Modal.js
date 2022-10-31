import React from 'react'
import { FaTimes, FaShoppingCart, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import logo from '../images/logo.svg'


const Modal = ({ isOpenModal, setModal }) => {
    return (
        <div className={`fixed top-0 left-0  overflow-hidden bg-white
        w-[100%] h-[100%] lg:hidden transition-all duration-1000`}>

            <div className='flex justify-between items-center py-3 px-6'>
                <img className='w-[170px] object-cover' src={logo} alt='logo' />
                <FaTimes className='w-8 h-8 text-red-500 cursor-pointer'
                    onClick={() => setModal(false)} />
            </div>
            <div className='flex flex-col my-4'>
                <Link className='my-2 px-6 tracking-wider font-serif text-lg 
                text-gray-600 duration-700 hover:translate-x-2 hover:bg-blue-100 p-2' to='/'>Home</Link>
                <Link className='my-2 px-6 tracking-wider font-serif text-lg 
                text-gray-600 duration-700 hover:translate-x-2 hover:bg-blue-100 p-2' to='/about'>About</Link>
                <Link className='my-2 px-6 tracking-wider font-serif text-lg 
                text-gray-600 duration-700 hover:translate-x-2 hover:bg-blue-100 p-2' to='/store/products'>Products</Link>
            </div>

            <div className='flex absolute left-[50%] top-[50%]
            translate-x-[-50%] translate-y-[-50%] justify-center items-center 
            my-10'>
                <div className='flex'>
                    <span className='text-2xl font-serif mx-2'>Cart</span>
                    <span className='fixed w-6 h-6 rounded-full text-center 
                    left-[33%] top-[-33%] bg-amber-500'>0</span>
                    <FaShoppingCart className='w-7 h-7 mr-8 cursor-pointer' />
                </div>
                <div className='flex'>
                    <span className='text-2xl font-serif mx-2'>Login</span>
                    <FaUserPlus className='w-7 h-7 mr-4 cursor-pointer' />
                </div>
            </div>

        </div>
    )
}

export default Modal
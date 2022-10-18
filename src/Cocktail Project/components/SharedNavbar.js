import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import logo from '../images/logo.svg'

const SharedNavbar = () => {
    return (
        <div>
            <div className='p-6 bg-white shadow-lg shadow-gray-800 flex
            justify-between items-center'>
                <Link to='/' className='w-[40%]'><img src={logo} alt='logo' 
                className='ml-[5%] md:ml-[10%] w-[200px]' /> </Link>
                <div className='mx-[10%] text-lg'>
                    <Link className='mx-4 tracking-wider' to='' > Home </Link>
                    <Link className='tracking-wider' to='/about' > About </Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default SharedNavbar
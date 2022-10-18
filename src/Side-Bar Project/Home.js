import React from 'react'
import { useGlobalContext } from './AppContext'


import { FaBars } from 'react-icons/fa'

const Home = () => {
    const {setModalShow , setSidebarShow} = useGlobalContext();
    return (
        <div className='p-1'>
            <FaBars onClick={()=>setSidebarShow(true)} className='w-8 h-8 m-6 text-sky-500 cursor-pointer animate-pulse' />
            <div className='w-[100%] fixed top-[40%] text-center '>
                <button className='bg-black text-white px-2 py-1 rounded-md'
                onClick={()=>setModalShow(true)}>
                    Show Modal</button>
            </div>
        </div>
    )
}

export default Home
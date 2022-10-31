import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const Header = ({ openModal }) => {

    return (
        <div className='flex justify-between items-center mt-6'>
            <h2 className='text-4xl font-bold tracking-wider'>Overreacted</h2>
            <button className='bg-pink-600 px-2 py-1 rounded-md text-white
            font-semibold tracking-wider animate-pulse'
                onClick={() => openModal()}>Toggle</button>
        </div>
    )

}
const Overlay = ({ closeModal }) => {
    return (
        <div className='absolute top-0 left-0 w-[100%] min-h-[100vh] bg-gray-500/75'>

            <div className=' absolute top-[50%] left-[50%] w-[90%] h-[40%] md:w-[50%] md:h-[40%] bg-white
            translate-x-[-50%] translate-y-[-50%]'>
                <section className='flex justify-end m-2'>
                    <FaTimes className='text-red-500 w-7 h-7 
                top-2 cursor-pointer' onClick={() => closeModal()} />
                </section>
                <section className='h-[90%]'>
                    <img className='w-[100%] h-[60%] md:w-[90%] lg:w-[70%] mx-auto
                     object-cover bg-no-repeat'
                    src='https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' />
                </section>
                <div className='absolute w-[100%] h-fit bottom-5 flex justify-center
                items-center'>
                    <button className='text-black bg-white px-4 py-1 mx-2
                    shadow-md shadow-emerald-700 font-bold tracking-wide'>Prev</button>
                    <button className='bg-black text-white px-4 py-1 mx-2
                    tracking-wide font-bold shadow-md shadow-gray-700'>Next</button>
                </div>
            </div>

        </div>
    )
}

const Content = () => {
    return (
        <div className='mt-32 w-[90%]'>
            <section className='my-12'>
                <h2 className='text-[1.7rem] text-pink-600 tracking-widest 
                font-bold'>The WET Codbase</h2>
                <p className='italic tracking-wider my-2'>Sunday 4th, 202011 min read</p>
                <p className='tracking-wide text-sm'>Come waste your time with me</p>
            </section>

            <section className='my-12'>
                <h2 className='text-[1.7rem] text-pink-600 tracking-widest 
                font-bold'>Goodby, Clean Code</h2>
                <p className='italic tracking-wider my-2'>Friday 22nd, 20195 min read</p>
                <p className='tracking-wide text-sm'>
                    Let clean code guide you. Then let it go.</p>
            </section>

            <section className='my-12'>
                <h2 className='text-[1.7rem] text-pink-600 tracking-widest 
                font-bold'>My Decade In Review</h2>
                <p className='italic tracking-wider my-2'>Saturday 11th, 20185 min read</p>
                <p className='tracking-wide text-sm'>A personal reflection.</p>
            </section>

            <section className='my-12'>
                <h2 className='text-[1.7rem] text-pink-600 tracking-widest 
                font-bold'>What Are The React Team Principles</h2>
                <p className='italic tracking-wider my-2'>Thursday 4th, 20155 min read</p>
                <p className='tracking-wide text-sm'>UI Before API.</p>
            </section>

        </div>
    )
}

const Main = () => {
    const [bgColorWhite, setBgColor] = useState(true);
    const [isOpenModal, setModal] = useState(false);

    const openModal = () => {
        setBgColor(!bgColorWhite);
        // setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <div className={`p-6 ${bgColorWhite ? 'bg-white' : 'bg-gray-900 text-white'} duration-700 
        overflow-auto`}>
            <div className='md:w-[70%] lg:w-[50%] mx-auto'>
                <Header openModal={openModal} />
                <Content />
                {isOpenModal && <Overlay closeModal={closeModal} />}
            </div>
        </div>
    )
}

export default Main
import React from 'react'
import { useGlobalContext } from './AppContext'

import { FaTimes } from 'react-icons/fa'

const Modal = () => {
    const { setModalShow, modalShow } = useGlobalContext();
    return (
        <div className={`modal-overlay ${modalShow ? 'show-modal' : ''} `}>
            <div className='relative bg-white max-w-[600px] w-[90%] h-[35%] md:w-[60%] lg:w-[50%] 
             rounded-2xl'>
                <button className='p-2 text-red-500 ml-[90%]'
                    onClick={() => setModalShow(false)}>
                    <FaTimes className='w-6 h-6' />
                </button>
                <div className='absolute right-0 left-0 w-[100%] h-[100%] mx-auto'>
                    <p className='text-center font-semibold tracking-wider'>Modal Content</p>
                </div>
            </div>
            {/* fixed left-0 top-0 w-[100%] h-[100%] bg-gray-800
         opacity-[0.5] transition-all */}
        </div>
    )
}

export default Modal
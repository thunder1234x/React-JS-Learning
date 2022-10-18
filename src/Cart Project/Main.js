import React, { useEffect, useState } from 'react'

import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import useGlobalContextHook, { AppProvider } from './AppProvider'

const Navbar = () => {
    const { itemCount } = useGlobalContextHook();
    return (
        <div className='bg-blue-700 p-6  text-white'>
            <div className='w-[100%] md:w-[80%] lg:w-[70%] mx-auto flex justify-between 
            items-center'>
                <p className='font-bold text-3xl tracking-widest'>UseReducer</p>
                <div className='flex'>

                    <svg className='h-10 w-10 fill-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
                    </svg>

                    <span className='relative right-5 -top-4 bg-sky-300 w-8 h-8 
                rounded-full text-center my-auto'>{itemCount}</span>

                </div>
            </div>
        </div>
    )
}

const SingleProduct = ({ id, title, price, img, amount }) => {
    const { increaseAmount, decreaseAmount, removeSingleProduct } = useGlobalContextHook();
    return (
        <div className='flex justify-between items-center'>
            <div className='flex my-3'>
                <img src={img} alt='phone' className='w-[100px] h-[100px] ' />
                <div className='mx-6'>
                    <h2 className='font-semibold text-md
                    tracking-wider'>{title}</h2>
                    <p className='my-1'>${price}</p>
                    <button className='tracking-widest text-blue-500'
                        onClick={() => removeSingleProduct(id)}>remove</button>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <FaArrowUp className='text-green-700 h-5 w-5 cursor-pointer'
                    onClick={() => increaseAmount(id)} />
                <p className='py-1'>{amount}</p>
                <FaArrowDown className='text-red-700 h-5 w-5 cursor-pointer'
                    onClick={() => decreaseAmount(id)} />
            </div>
        </div>
    )
}

const Products = () => {
    const { products , showItem} = useGlobalContextHook();
    return (
        <>
        <div className='p-6  w-[100%] md:w-[80%] lg:w-[70%] mx-auto'>
            {products.map(item => {
                return <SingleProduct key={item.id} {...item} />
            })}
           
        </div>
        {showItem ? <Footer /> : <div className='text-center
                                 tracking-widest text-gray-500 font-bold 
                                 text-md'>is currently empty</div> }
        </>
    )
}

const Footer = () => {
    const { amount, deleteCart } = useGlobalContextHook();
    return (
        <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto'>
            <hr className='bg-gray-600 h-1 w-[100%]'></hr>
            <div className='flex justify-between items-center mt-3 mb-20'>
                <p className='font-bold text-md tracking-wider'>Total</p>
                <p className='font-bold text-md tracking-wider text-green-600'>
                ${amount}</p>
            </div>
            <div className='w-fit mx-auto mb-20'>
                <button className='bg-white border-2 border-red-500
                py-1 px-16 text-lg font-bold text-red-700
                tracking-widest rounded-md'
                    onClick={() => deleteCart()}>Clear Cart</button>
            </div>
        </div>
    )
}

const Main = () => {
    const [isLoading , setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },2000)
    },[])
    return (
        <AppProvider>
            {isLoading ? <div className='bg-blue-50 min-h-[100vh]
            text-6xl text-center p-10 tracking-wider font-bold'>Loading...</div> :
            <div className='bg-blue-50 min-h-[100vh] overflow-auto'>
                <Navbar />
                <h2 className='text-4xl font-bold uppercase text-center
                mb-10 mt-16 tracking-wider'>Your Bag</h2>
                <Products />
            </div>}
        </AppProvider>
    )
}

export default Main
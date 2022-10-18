import React, {useState } from 'react'

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

import people from './data/people';

const Heading = () => {
    return (
        <div className='my-20 flex justify-center items-center'>
            <div className='bg-red-900 h-1 w-10 -rotate-[70deg] mr-2 p-0'></div>
            <h2 className='text-4xl m-0 p-0 font-semibold tracking-wider'>Reviews</h2>
        </div>
    )
}

const Content = ({ person }) => {

    const { id, image, name, title, quote } = person[0];

    return (
        <div>
            <div key={id} className='w-[90%] lg:w-[70%]  mx-auto flex flex-col justify-center items-center'>
                <div className='w-[150px] h-[150px] rounded-full'>
                    <img className='w-[150px] h-[150px] rounded-full border-4 border-gray-400 shadow-2xl 
                shadow-gray-500 object-cover' src={image} alt='person' />
                </div>
                <h3 className=' mt-6 text-yellow-600 text-lg uppercase font-bold tracking-widest'>{name}</h3>
                <p className='capitalize mb-6'>{title}</p>
                <p className='text-center leading-8 mb-2 text-gray-700 text-md'>{quote}</p>
                <FaQuoteRight className='mt-2 mb-8 h-12 w-12 text-yellow-700' />
            </div>
        </div>

    )
}

const Main = () => {
    const [count, setCount] = useState(0);
    console.log(count);

    // const changeCountValue = () => {
    //     const len = people.length;

    //     if (count < 0) {
    //         const newCount = (count + len) % len;
    //         setCount(newCount);
    //     }else{
    //         const newCount = count % len;
    //         setCount(newCount);
    //     }
    //     setEmployee(people.slice(count,count+1))
    // }

    // useEffect(()=>{
    //     setCount((count)=>{
    //         return (count + 1) % people.length;
    //     })
    // },[count])


    return (
        <div className='bg-gray-200 min-h-screen w-[100%] flex flex-col justify-start items-center'>

            <Heading />
            <div className='flex justify-around items-center'>
                <FiChevronLeft onClick={() => setCount((count + people.length - 1) % people.length)}
                    className='w-9 fixed  h-9 right-[78%] top-[49.5%] bg-gray-700 rounded-lg
                     text-white items-end hover:cursor-pointer active:scale-90' />
                <Content person={people.slice(count, count + 1)} />
                <FiChevronRight onClick={() => setCount((count + 1) % people.length)}
                    className='w-9 fixed  h-9 left-[78%] top-[49.5%] bg-gray-700 rounded-lg text-white 
                    items-start hover:cursor-pointer active:scale-90 ' />
            </div>
        </div>
    )
}

export default Main
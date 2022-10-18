import React from 'react'
import { useFetch } from './useFetch';

import defaultImage from './pictures/default-image.jpeg';

const url = "https://course-api.com/react-prop-types-example";

const SingleProduct = ({ id, name, image, price }) => {
    const url = image && image.url;
    return (
        <div className='w-[80%] max-w-[400px] md:w-[40%] lg:w-[30%] h-[300px] mx-auto my-8 md:m-5 bg-white rounded-md
        shadow-md shadow-gray-400'>
            <img className='w-[100%] max-h-[70%] object-cover' src={url || defaultImage} alt="product" />
            <h2 className='text-center my-2 font-bold uppercase tracking-wider
            text-orange-600'>{name}</h2>
            <p className='text-center text-green-500 font-bold'>{price || 3.99}$</p>
        </div>
    )
}

const CustomHook = () => {
    const { isLoading, data } = useFetch(url);
    // console.log(data);
    return (
        <div className='bg-blue-50 min-h-screen p-2'>
            <div className=''>
                <h1 className='text-center font-bold text-4xl mt-20 mb-8'>
                    {isLoading ? 'Loading...' : 'Shopify Items'}</h1>
                <div className='md:flex justify-evenly items-center flex-wrap'>
                    {data.map(singleData => {
                        return <SingleProduct key={singleData.id} {...singleData} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default CustomHook
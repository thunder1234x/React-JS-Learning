import React, { useState } from 'react'
import {FaFoursquare , FaBars} from 'react-icons/fa'
import { useFetchData } from '../useFetchData'


const Product = ({id , name , price , image})=>{
    return (
        <div className='my-8 md:w-[500px] md:h-[250px] lg:w-[300px] lg:h-[200px]
        overflow-hidden lg:mr-4 '>
            <img src={image} alt='product-img' className='w-[100%] h-[180px]
            object-cover md:h-[80%] rounded-[.2em]' />
            <div className='flex justify-between mt-1'>
                <p className='capitalize tracking-widest font-serif
                text-[1.2rem]'>{name}</p>
                <p className='text-yellow-700 font-serif
                tracking-wide'>${(price/90).toFixed(2)}</p> 
            </div>

        </div>
    )
}

const Products = () => {
    const {products} = useFetchData('http://localhost:5000/api/products');
    const [prevLayout , setLayout] = useState(null);
    const handleLayoutChange = (e)=>{
        if (prevLayout && prevLayout !== e.target) {
            prevLayout.classList.remove('bg-black' , 'text-white');
        }
        e.target.classList.add('bg-black' , 'text-white');
        setLayout(e.target);
    }

  return (
    <div className='my-14 w-[90%] mx-auto '>
         <div className='md:flex items-center'>
            <div className='flex md:w-[20%]'>
                <FaFoursquare className='border border-black w-8 h-8 mr-4 
                p-1 rounded-md cursor-pointer'
                onClick={(e)=>handleLayoutChange(e)} />
                <FaBars className='border border-black w-8 h-8 p-1 mr-4 
                rounded-md cursor-pointer'
                onClick={(e)=>handleLayoutChange(e)}/>
            </div>
            <p className='my-2 md:my-0 tracking-widest font-semibold
            text-sm md:w-[50%] lg:w-[30%]'>{products.length} Products Found</p>
            <hr className='w-[100%] md:w-[50%] lg:w-[70%] mx-auto md:mx-8 border
             border-gray-400/80'></hr>
            <span className='text-lg tracking-wider md:w-[20%]'>Sort By</span>
            <select name='sort' className='my-2 mx-4 p-2 md:my-0 md:p-0'>
                <option>Price (Lowest)</option>
                <option>Price (Highest)</option>
                <option>Name (A - Z)</option>
                <option>Name (Z - A)</option>
            </select>
        </div>
        <div className='md:flex flex-wrap justify-evenly items-center'>
        {products.map(item=>{
            return <Product key={item.id} {...item} />
        })}
    </div>
    </div>
    
  )
}

export default Products
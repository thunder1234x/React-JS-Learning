import React, { useEffect, useRef, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import Products from '../components/Products';

const FilterArea = () => {

  const defaultBtn = useRef(null);
  const [prevBtn, setBtn] = useState(null);
  const [price, setPrice] = useState(30);
  const [color, setColor] = useState({
    e1: false, e2: false, e3: false,
    e4: false, e5: false, ed: true
  });

  const handleFilterByCategory = (e) => {
    if (prevBtn != null) {
      prevBtn.classList.remove('underline', 'underline-offset-4');
    }
    e.target.classList.add('underline', 'underline-offset-4');
    setBtn(e.target);
  }

  const handleColorChange = (e) => {
    const colorID = e.target.id;
    setColor({
      e1: false, e2: false, e3: false,
      e4: false, e5: false, ed: false, [colorID]: true
    })
  }

  const handlePriceChange = (e) => {
    if (e.target.innerText === 'All') {
      e.target.classList.add('underline', 'underline-offset-4');
    } else {

    }
    setPrice(e.target.value);
  }

  useEffect(() => {
    defaultBtn.current.classList.add('underline', 'underline-offset-4');
    setBtn(defaultBtn.current);
  }, [defaultBtn])


  return (
    <div className='my-8 mx-6'>
      <div className='py-6'>
        <input type='text' placeholder='Search' className='bg-blue-50 h-10
        rounded-md p-2 tracking-widest' />
      </div>
      <div className='flex flex-col my-1 items-start'>
        <p className='font-bold tracking-wider mb-2'>Category</p>
        <button className='text-gray-500 tracking-widest my-1 text-sm'
          onClick={(e) => handleFilterByCategory(e)} ref={defaultBtn}>All</button>
        <button className='text-gray-500 tracking-widest my-1 text-sm'
          onClick={(e) => handleFilterByCategory(e)}>Office</button>
        <button className='text-gray-500 tracking-widest my-1 text-sm'
          onClick={(e) => handleFilterByCategory(e)}>Living Room</button>
        <button className='text-gray-500 tracking-widest my-1 text-sm'
          onClick={(e) => handleFilterByCategory(e)}>Kitchen</button>
        <button className='text-gray-500 tracking-widest my-1 text-sm'
          onClick={(e) => handleFilterByCategory(e)}>Bedroom</button>
        <button className='text-gray-500 tracking-widest my-1 text-sm'
          onClick={(e) => handleFilterByCategory(e)}>Dining</button>
        <button className='text-gray-500 tracking-widest my-1 text-sm'
          onClick={(e) => handleFilterByCategory(e)}>Kids</button>
      </div>

      <div className='my-4'>
        <p className='font-bold tracking-wider mb-2'>Company</p>
        <select name="company" className='bg-blue-50 p-1 rounded-sm'>
          <option>All</option>
          <option>Marcos</option>
          <option>Liddy</option>
          <option>Ikea</option>
          <option>Caressa</option>
        </select>
      </div>

      <div className='my-4'>
        <p className='font-bold tracking-wider mb-2'>Colors</p>
        <div className='flex items-center'>
          <button className={`text-gray-600/80 underline-offset-4
          ${color.ed ? 'underline' : ''}`} id='ed'
            onClick={(e) => handleColorChange(e)}>All</button>
          <button className='bg-red-600/80 w-4 h-4 mx-2 rounded-full' id='e1'
            onClick={(e) => handleColorChange(e)}>
            {color.e1 && <FaCheck className='text-white w-3 h-3 mx-auto' />}
          </button>
          <button className='bg-green-600/80 w-4 h-4 mx-2 rounded-full' id='e2'
            onClick={(e) => handleColorChange(e)}>
            {color.e2 && <FaCheck className='text-white w-3 h-3 mx-auto' />}
          </button>
          <button className='bg-blue-600/80 w-4 h-4 mx-2 rounded-full' id='e3'
            onClick={(e) => handleColorChange(e)}>
            {color.e3 && <FaCheck className='text-white w-3 h-3 mx-auto' />}
          </button>
          <button className='bg-gray-600/80 w-4 h-4 mx-2 rounded-full' id='e4'
            onClick={(e) => handleColorChange(e)}>
            {color.e4 && <FaCheck className='text-white w-3 h-3 mx-auto' />}
          </button>
          <button className='bg-yellow-600/80 w-4 h-4 mx-2 rounded-full' id='e5'
            onClick={(e) => handleColorChange(e)}>
            {color.e5 && <FaCheck className='text-white w-3 h-3 mx-auto' />}
          </button>
        </div>
      </div>

      <div className='my-4'>
        <p className='font-bold tracking-wider mb-2'>Price</p>
        <p>$3,099.99</p>
        <input type="range" min="1" max="100" value={price}
          onChange={(e) => handlePriceChange(e)} />
      </div>


      <div className='flex w-[40%] justify-between items-center'>
        <p className='tracking-wider font-serif'>Free Shipping</p>
        <input type='checkbox' />
      </div>

      <div className='mt-6 mb-12'>
        <button className='px-4 py-1 bg-red-700 rounded-md
        text-white tracking-widest font-bold'>Clear Filters</button>
      </div>

    </div>
  )
}

const ProductsPage = () => {
  return (
    <div className='my-6'>
      <div className='px-10 py-12 bg-green-300 text-white font-bold tracking-[.3rem]
      text-2xl'>
        <span className='mr-3'>Home</span>
        <span className='text-blue-800 mr-1'>/</span>
        <span className='text-black'>Products</span>
      </div>
      <div className='md:flex justify-evenly lg:w-[90%] mx-auto'>
        <FilterArea />
        <Products />
      </div>
    </div>
  )
}

export default ProductsPage
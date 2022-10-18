import React, { useEffect, useRef } from 'react'
import { useGlobalContextHook } from '../context'

const CocktailSearch = () => {
  const searchDiv = useRef(null);
  const {setSearchText} = useGlobalContextHook();

  const handleInputData = (e) => {
    const text = searchDiv.current.value;
    setSearchText(text);
    // console.log(searchText);
}

  useEffect(()=>{
    searchDiv.current.focus();
  },[])
  return (
    <div className='w-[90%] md:w-[60%] lg:w-[50%] mx-auto bg-white p-4 
    rounded-md shadow-md shadow-gray-700 flex flex-col my-28'>
        <p className='tracking-[.2rem] md:w-[80%] mx-auto font-bold text-green-700 my-5
        text-lg capitalize'>Search your favourite cocktail</p>
        <input ref={searchDiv} className='bg-blue-50 w-[90%] md:w-[80%] mx-auto h-10 rounded-md
        p-2 mb-5' type='text'  onChange={()=>handleInputData()} />
    </div>
  )
}

export default CocktailSearch
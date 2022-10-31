import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

const FilterArea = ({setUrl}) => {

    return (
        <div className='m-6'>
            <div>
                Filter Area
                <Link to='/store/products' className='m-2 px-2 py-1 bg-purple-700
                 text-white rounded-md font-semibold tracking-wider' 
                 onClick={()=>setUrl('http://localhost:5000/api/products?limit=30')} >Show All Data</Link>
                <button className='m-2 px-2 py-1 bg-purple-700
                 text-white rounded-md font-semibold tracking-wider'
                 onClick={()=>setUrl('http://localhost:5000/api/products?numericFilters=price%3E90')}>Price GT 90</button>
            </div>
            <Outlet />
        </div>
    )
}

const ShowData = ({ handleClickBody , divRef , url }) => {
    const [products, setProduct] = useState([]);

    const fetchData = async (url) => {
        const response = await fetch(url);
        const jsonData = await response.json()
        setTimeout(() => { setProduct(jsonData.products) }, 2000)
    }
    useEffect(() => {
        console.log('Data fetching use effect');
        setProduct([]);
        fetchData(url)
    }, [url])

    if (products.length === 0) {
        return <div className=''>Loading.....</div>
    }

    return (
        <div ref={divRef} className='absolute lg:flex justify-evenly flex-wrap 
        w-[90%]  left-[5%] my-8'>
            {products.map((item, index) => {
                return (
                    <div key={item._id} className='relative w-[100%] lg:w-[350px] h-[300px] 
                    my-6 mx-4' onMouseOver={(e)=>handleClickBody(e,index)}>
                        <div className='img-link absolute bg-gray-900/60 top-0  w-[100%] 
                         overflow-hidden duration-700' id={item._id}>
                            <Link to='/store/product/singleOne'>
                                <FaSearch className='img-link absolute left-[50%] 
                                top-[50%] translate-x-[-50%] translate-y-[-50%]
                                w-12 h-12 p-3 duration-500 hover:scale-110 bg-yellow-700 rounded-full
                                text-white'/>
                            </Link>
                        </div>
                        <img src='https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f' alt='product'
                            className='img-link h-[200px] w-[100%] object-cover '
                        />
                        <div className='flex justify-between items-center mt-2'>
                        <p className='font-serif tracking-wider
                        text-lg'>{item.name}</p>
                        <p className='text-green-600 font-bold tracking-wider
                        text-lg' >${item.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const Main = () => {
    const [prevIndex , setIndex] = useState(new Set([]));
    const [url , setUrl] = useState('http://localhost:5000/api/products?limit=30');
    const divRef = useRef(null);

    const handleClickBody = (e, index) => {
        if (!e.target.classList.contains('img-link')) {
            prevIndex.forEach(item=>{

                divRef.current.children[item].firstChild.style.height =`${0}px`
            })
        }else{
            if (divRef.current.children[index]) {
                prevIndex.add(index);
                divRef.current.children[index].firstChild.style.height = `${200}px`
            }
        }
    }

    return (
        <BrowserRouter>
            <div className='absolute w-[100%]' onMouseOver={(e) => handleClickBody(e)}>
                <Routes>
                    <Route path='/' element={<FilterArea setUrl={setUrl} />}>
                        <Route path='/store/products' element={<ShowData
                            handleClickBody={handleClickBody} divRef={divRef} url={url} />} />
                    </Route>
                    <Route path='*' element={<div>No Route Matched</div>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Main
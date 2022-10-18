import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Link, useParams, Outlet, NavLink } from 'react-router-dom';

import products from './data/routerData'

const Home = () => {
    return (
        <div className='font-bold text-4xl'>Home Page</div>
    )
}

const About = () => {
    return (
        <div className='font-bold text-4xl'>About Page</div>
    )
}

const Products = () => {
    return (
        <div>
            <div className='font-bold text-4xl'>Products Page</div>
            {products.map(product=>{
                return(
                    <div key={product.id} className='my-6'>
                        <p className='font-bold text-lg tracking-widest'>{product.name}</p>
                        <Link to={`/products/${product.id}`} className='text-md text-blue-600 '>More info</Link>
                    </div>
                )
            })}
        </div>
    )
}

const SingleProduct = () => {
    const { id } = useParams();
    const [product , setProduct] = useState({});
    useEffect(()=>{
        const singleItem = products.find(item=>item.id === id);
        setProduct(singleItem);
    },[id])
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={product.image} alt='product' className='w-[350px] h-[200px] object-cover'/>
            <p className='my-6 font-bold tracking-widest text-3xl text-gray-600'>{product.name}</p>
            <Link to='/products' className='bg-blue-400 px-5 py-1 font-bold tracking-wider rounded-md'>
                Back to products</Link>
        </div>
    )
}

const ErrorPage = () => {
    return (
        <div>
            <p className='font-bold text-4xl mb-8'>404 Not Found !!</p>
            <Link to='/' className='bg-blue-400 px-5 py-1 font-bold tracking-wider rounded-md'>
                Back to home</Link>
        </div>
    )
}

const Navbar = () => {
    return (
        <>
            <div className='flex justify-evenly items-center w-[50%] mx-auto'>
                <NavLink to='/' style={({isActive})=>{
                    return {color:isActive ? 'green' : 'black'}
                }} className='font-bold tracking-wider text-lg underline underline-offset-4
            cursor-pointer my-10'>Home</NavLink>
                <NavLink style={({isActive})=>{
                    return {color:isActive ? 'green' : 'black'}
                }} to='about' className='font-bold tracking-wider text-lg underline underline-offset-4
            cursor-pointer my-10'>About</NavLink>
                <NavLink style={({isActive})=>{
                    return {color:isActive ? 'green' : 'black'}
                }} to='products' className='font-bold tracking-wider text-lg underline underline-offset-4
            cursor-pointer my-10'>Products</NavLink>
            </div>
            <Outlet />
        </>
    )
}

const ReactRouter = () => {
    return (
        <div className='bg-blue-100 min-h-[100vh] overflow-auto text-center p-10'>
            <BrowserRouter>
                {/* <Navbar /> */}
                <Routes>
                    <Route path='/' element={<Navbar />}>
                        <Route index element={<Home />}></Route>
                        <Route path='about' element={<About />}></Route>
                        <Route path='products' element={<Products />}>
                            {/* <Route path=':id' element={<SingleProduct />}></Route> */}
                        </Route>
                        <Route path='products/:id' element={<SingleProduct />}></Route>
                        <Route path='*' element={<ErrorPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter
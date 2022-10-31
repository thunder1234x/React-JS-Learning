import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import './Css/index.css'

// pages
import Navbar from './components/Navbar'
import ABoutPage from './view/ABoutPage'
import ErrorPage from './view/ErrorPage'
import HomePage from './view/HomePage'
import ProductsPage from './view/ProductsPage'

const Main = () => {
  return (
    <div className='min-h-screen overflow-auto'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar />}> 
                    <Route index element={<HomePage />} />
                    <Route path='/about' element={<ABoutPage />} />
                    <Route path='/store/products' element={<ProductsPage />} />
                </Route>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Main
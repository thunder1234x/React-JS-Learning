import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AppProvider } from './context'

import SharedNavbar from './components/SharedNavbar'
import About from './pages/About'
import Home from './pages/Home'
import SingleCocktailInfo from './pages/SingleCocktailInfo'

const Main = () => {
    return (
        <AppProvider>
            <div className='bg-blue-50 min-h-[100vh] overflow-auto'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<SharedNavbar />} >
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/cocktails/:id' element={<SingleCocktailInfo />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </AppProvider>
    )
}

export default Main
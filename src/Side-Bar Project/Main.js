import React from 'react'
import './Main.css'

import {AppContextProvider} from './AppContext'

import Home from './Home';
import Modal from './Modal';
import Sidebar from './Sidebar';


const Main = () => {
  return (
    <AppContextProvider>
    <div className='bg-blue-50 min-h-screen'>
       {/* <Home setModalShow={setModalShow} setSidebarShow={setSidebarShow}/>
       {modalShow && <Modal setModalShow={setModalShow} modalShow={modalShow} />}
       {sidebarShow &&<Sidebar setSidebarShow={setSidebarShow} 
       sidebarShow={sidebarShow}/> } */}
       <Home />
       <Modal />
       <Sidebar />
    </div>
    </AppContextProvider>
  )
}

export default Main
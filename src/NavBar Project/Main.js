import React, { useEffect, useRef, useState } from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

import './main.css';
import localLogo from './logo.svg';

const LogoHamburger = ({handleHamburger}) => {
    
    return (
        <div className='w-[90%] py-3 md:py-0 md:max-w-[20vw] lg:max-w-[20vw] flex justify-between items-center'>

            <img className='w-1/2 md:w-fit lg:w-4/5 px-3 md:px-0 ' src={localLogo} alt="logo" />

            <div className='md:hidden  hover:rotate-90' onClick={() => handleHamburger()}>
                <div className='w-6 bg-black h-1 my-1'></div>
                <div className='w-6 bg-black h-1 my-1'></div>
                <div className='w-6 bg-black h-1 my-1'></div>
            </div>
        </div>
    )
}

const NavMenuItems = ({showList})=>{

    const linkCss = "my-2 px-3 md:px-0 md:py-0 md:my-0 md:mx-3  tracking-wider text-lg text-gray-700 font-semibold hover:bg-sky-100 md:hover:text-sky-400  md:hover:underline md:rounded-none md:hover:bg-white"
    
    const listContainer = useRef(null);
    const listMenu = useRef(null);

    useEffect(()=>{
        const linkHeight = listMenu.current.getBoundingClientRect().height;
        if (showList) {
            // console.log(listContainer.current.classList);
            listContainer.current.style.height = `${linkHeight+20}px`;
            // listContainer.current.classList.add(`sm:h-[${linkHeight+20}px]`);
        }else{
            // console.log(listContainer.current.classList);
            listContainer.current.style.height = '0px';
            // listContainer.current.classList.add('h-0');
        }
    },[showList])
    
    return(
        <div ref={listContainer} className={`w-[100%] overflow-hidden list-cont  md:flex 
        items-center md:h-fit md:w-fit md:overflow-visible `}>
                    <ul ref={listMenu} className='md:flex flex-col md:flex-row md:h-fit'>
                        <li className={linkCss}>Home</li>
                        <li className={linkCss}>About</li>
                        <li className={linkCss}>Projects</li>
                        <li className={linkCss}>Contact</li>
                        <li className={linkCss}>Profile</li>
                    </ul>
                </div>
    )
}

const FaIconBox = () => {
    return (
        <div className='hidden md:flex'>
            <FaFacebook className='mx-3 text-sky-600 w-5 h-5 hover:cursor-pointer hover:scale-110' />
            <FaTwitter className='mx-3 text-sky-600 w-5 h-5 hover:cursor-pointer hover:scale-110' />
            <FaLinkedin className='mx-3 text-sky-600 w-5 h-5 hover:cursor-pointer hover:scale-110' />
            <FaGithub className='mx-3 text-sky-600 w-5 h-5 hover:cursor-pointer hover:scale-110' />
        </div>
    )
}


const Main = () => {
    // const logo = "https://raw.githubusercontent.com/john-smilga/react-projects/master/11-navbar/setup/src/logo.svg";
    
    const [showList, setList] = useState(false);
    const handleHamburger = () => {
        // const classArray = Object.values(listMenu.current.classList);
        // console.log(listMenu.current.classList);
        setList(!showList);
    }

    return (
        <div className='bg-blue-50 min-h-screen'>

            {/* Normal Navbar starting  */}
            
            <div className='bg-white flex flex-col md:flex-row justify-start
            items-start md:justify-evenly md:items-center md:p-4 shadow-md shadow-gray-300'>

                <LogoHamburger  handleHamburger={handleHamburger} />
                
                <NavMenuItems showList={showList} />
                
                <FaIconBox />
            </div>
        </div>
    )
}

export default Main
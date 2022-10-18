import React from 'react'
import sublinks from './data'

const Submenu = ({openStripMenu}) => {
    return (
        <div className='w-[100%] h-[100%] p-8 md:p-0 md:flex justify-center items-center link-btn'>
            {sublinks.map((item) => {
                return (
                    <div key={item.page} className='my-8 md:my-0 md:mx-10 '>
                        <p className='font-semibold text-lg capitalize
                        underline md:no-underline md:text-white underline-offset-4 link-btn'
                        onMouseOver={(e)=>openStripMenu(e)}>{item.page}</p>
                        <div className='flex w-[80%] my-2 justify-between 
                        items-center flex-wrap md:hidden'>
                            {item.links.map((link,index) => {
                                return (
                                    <div key={index} className='flex basis-1/3  ml-1 
                                    items-center my-1 cursor-pointer'>
                                        <a href={link.url} className='text-gray-500'>{link.icon}</a>
                                        <p className='mx-3 capitalize text-sm'>{link.label}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Submenu
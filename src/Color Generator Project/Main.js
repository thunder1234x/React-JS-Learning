import React, { useState } from 'react'

import Values from 'values.js';
import rgbToHex from './Util';

const SingleColor = ({ rgb, weight, index }) => {
    const [alert, setAlert] = useState(false);
    const bgr = rgb.join(',');
    const colorCode = rgbToHex(...rgb);

    React.useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAlert(false);
        },2000)

        return ()=> clearTimeout(timeout);
    },[alert])

    return (
        <div style={{ backgroundColor: `rgb(${bgr})` }} className='font-bold text-md w-[150px] h-[150px] 
        text-center' onClick={()=>{
            setAlert(true);
            navigator.clipboard.writeText(colorCode);
        }}>
            <p className={`ml-1 mt-3 ${index > 10 ? 'text-white' : 'text-black'}`}>{weight}%</p>
            <p className={`${index > 10 ? 'text-white' : 'text-black'}`}>{colorCode}</p>
            {alert && <p className={`text-sm font-normal ${index > 10 ? 'text-white' : 'text-black'}`}>
                Copied to clipboard</p>}
        </div>
    )
}

const Main = () => {
    const [color, setColor] = useState('#f15025');
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const colors = new Values(color).all(10);
            setError(false);
            setList(colors);
            console.log(colors);
        } catch (error) {
            setError(true);
            console.log(error);
        }

    }

    return (
        <div className='bg-blue-100 p-10 min-h-screen  flex flex-col justify-start
         items-center md:flex-row w-screen md:items-start'>
            <h1 className='font-bold text-3xl'>Color Generator</h1>
            <form onSubmit={(e) => handleSubmit(e)} className='flex-col my-5 md:flex-row md:my-0'>
                <input type='text'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className={`md:ml-10 px-3 py-3 rounded-md mr-5 border-2 outline-2 ${error ?
                        'border-red-600 outline-red-600' : 'border-green-500 outline-green-500'}`}
                    placeholder='Type color code' />
                <button className='bg-black text-white px-5 py-2 rounded-lg my-5 
                md:my-0 md:mx-5'>Generate Color</button>
                <div className='w-[100%] my-20 flex flex-wrap'>
                    {list.map((item, index) => {
                        return (
                            <SingleColor key={index} {...item} index={index} />
                        )
                    })}
                </div>
            </form>
        </div>
    )
}

export default Main
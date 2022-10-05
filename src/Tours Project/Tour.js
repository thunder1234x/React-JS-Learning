import React from 'react'

const Tour = ({id, name, info, image, price , deleteTour , selectTour }) => {

    const [text , setText] = React.useState(info.slice(0, 170)+'...');
    const [toggleButton ,setButton] = React.useState('Show More');


    const toggleText = ()=>{
        if (text.length === info.length) {
            setText(info.slice(0,170)+'...');
            setButton("Show More");
        }else{

            setText(info);
            setButton("Show Less");
        }
    }

    return (
        <div className='w-[90%] md:max-w-[640px] mx-auto my-10 rounded-md bg-white border border-gray-400'>
            <div className='max-h-[284px] md:max-h[320px] overflow-hidden'>
                <img className='' src={image} alt='tours' />
            </div>
            <div className='flex justify-between items-center px-9 my-8'>
                <h3 className='font-bold text-md tracking-wide'>{name}</h3>
                <p className='bg-blue-100 text-blue-800 p-2 rounded-md text-md font-bold'>${price}</p>
            </div>
            <p id="info" className='px-9 mb-8'>{text} <button onClick={()=>toggleText()} className='text-blue-700 text-lg'>{toggleButton}</button></p>
            <div className='flex flex-col justify-center items-center'>
                <button onClick={()=>selectTour(id)} className=' w-1/2 p-3 h-12 mx-10 mb-8 font-bold text-md tracking-wider  border border-green-500
                 text-green-500 rounded-md'>Interested</button>
                <button onClick={()=>deleteTour(id)} className='w-1/2 h-12 p-3 mx-10 mb-8 font-bold text-md
                 tracking-wider border border-red-500 text-red-500 rounded-md'>Not Interested</button>
            </div>
        </div>
    )
}

export default Tour
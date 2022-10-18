import React, { useRef } from 'react'

import text from './data/data';

const FormData = () => {

    
    const [formData, setFormData] = React.useState({
        name: '',
        date: new Date().getDate().toLocaleString(),
        paragraph: 1
    })
    
    const [para , setPara] = React.useState([]);
    
    const nameInp  = useRef(null);
    const dateInp  = useRef(null);

    const handleFormInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const newData = { ...formData, [name]: value };
        setFormData(newData);
    }

    const submitFormData = (e) => {
        e.preventDefault();
        nameInp.current.classList.add('hidden');
        dateInp.current.classList.add('hidden');
        setPara(text.slice(0,formData.paragraph > 0 ? formData.paragraph : 1))
        
    }

    return (
        <div>

            <form onSubmit={(e) => submitFormData(e)} className='flex flex-col w-1/3 mx-auto'>
                <div ref={nameInp} className='flex my-4 justify-start items-start '>
                    <label  className='w-1/4 mr-4' htmlFor='name' >Name : </label>
                    <input  className='h-10 px-1 rounded-md bg-white border border-black' type='text' name='name' value={formData.name} onChange={(e) => handleFormInput(e)} />
                </div>

                <div ref={dateInp} className='flex my-4 justify-start items-start'>
                    <label  className='w-1/4 mr-4' htmlFor='date' >Date : </label>
                    <input  className='h-10 px-1 rounded-md border border-black ' type='text' name='date' value={formData.date} onChange={(e) => handleFormInput(e)} />
                </div>

                <div className='flex my-4 justify-start items-start'>
                    <label className='w-1/4 mr-4' htmlFor='paragraph' >Paragraphs : </label>
                    <input className='h-10 px-1 rounded-md border border-black ' type='number' name='paragraph' value={formData.paragraph} onChange={(e) => handleFormInput(e)} />
                </div>

                <button className='w-1/2  bg-black text-white px-2 py-1 m-3 rounded-md'>Generate</button>
            </form>
            <div className='w-1/2 mx-auto'>
                <h3 className='text-black text-md tracking-wider font-bold'>Hi {formData.name}!</h3>
                <span className='text-green-500 text-sm tracking-wider font-bold'>Requested on {formData.date}/{new Date().getMonth()}/{new Date().getFullYear()}</span>
                {para.map((line , index)=>{
                    return (
                        <p key={index} className='my-6 p-2 tracking-wider font-semibold'>
                            {line}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

const Main = () => {
    return (
        <div className='bg-sky-100 min-h-screen w-[100%] overflow-y-scroll'>
            <h1 className='inline-block w-[100%] font-bold text-3xl my-10 text-center uppercase'>
                Tierd of boaring lorem ipsum ?</h1>
            <div>
                <FormData />
            </div>
        </div>
    )
}

export default Main
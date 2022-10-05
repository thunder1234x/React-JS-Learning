import React, { useState } from 'react'

import Tours from './Tours';


const url = "https://course-api.com/react-tours-project";

const Main = () => {
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    return (
        <div className='bg-blue-100 flex flex-col justify-center items-center min-h-screen'>
            <h2 className='mt-14 mb-3 tracking-widest text-3xl font-bold'>{isError ? 'Data Not Found' :
                isLoading ? 'Loading...' : 'Our Tours'}</h2>
            <div className='w-24 h-1 mb-16 bg-blue-500'></div>
            <Tours url={url} setLoading={setLoading} setError = {setError} />
        </div>
    )
}

export default Main
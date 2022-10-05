import React from 'react'
import { useState, useEffect } from 'react'

import Tour from './Tour';

const Tours = ({ url, setLoading, setError }) => {
    const [data, setData] = useState([]);

    const deleteTour = (id) => {
        const newData = data.filter(tour => tour.id !== id);
        setData(newData);
    }

    const selectTour = (id)=>{
        alert("Tour added with ID " + id);
    }

    const fetchData = () => {
        setLoading(true);
        fetch(url)
            .then((res) => {
                if (res.status >= 200 && res.status <= 299) {
                    return res.json();
                } else {
                    setLoading(false);
                    setError(true);
                    throw new Error('Data Fetching Error');
                }
            })
            .then((locations) => {
                setLoading(false); 
                setData(locations)
            });
    }

    useEffect(() => {
        fetchData();
        return ()=>{
            setData([]);
        }
    }, [url])
    return (
        <div>
            {data && data.map(location => {
                return <Tour key={location.id} {...location} deleteTour={deleteTour} selectTour={selectTour} />
            })}

            {data.length === 0 && <div> <button onClick={() => fetchData()} className='bg-sky-400 px-6 py-2 text-2xl font-bold
            rounded-md hover:scale-110 tracking-widest'>Refresh</button> </div>}
        </div>
    )
}

export default Tours;
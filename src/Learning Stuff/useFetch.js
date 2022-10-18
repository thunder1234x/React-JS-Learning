import  { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        setLoading(true);
        const res = await fetch(url);
        const products = await res.json();
        setData(products);
        setLoading(false);
        
    }

    useEffect(()=>{
        fetchData();
    },[url])

    return {isLoading , data};
}

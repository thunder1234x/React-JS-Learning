import { useEffect, useState } from "react";

const useFetchData = (url)=>{
    const [products , setProducts] = useState([]);
    const fetchData = async () =>{
        try {
            const response = await fetch(url)
            const jsonData = await response.json()
            setProducts(jsonData); 
        } catch (error) {
            console.log(error);
            return;
        }
    
    }

    useEffect(()=>{
        fetchData();
    },[url])
    
    return {products};
}
export {useFetchData};
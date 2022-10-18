import React, { useCallback, useContext, useEffect, useState } from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [cocktails, setCocktail] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [singleCocktail, setSingleCocktail] = useState({});
    const [searchText, setSearchText] = useState('');

    const fetchData = useCallback( async (url) => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchText}`);
            const respJson = await response.json();
            setCocktail(respJson.drinks);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    },[searchText])


    useEffect(() => {
        fetchData(url);
    }, [searchText,fetchData])

    return (
        <AppContext.Provider value={
            {
                isLoading,
                cocktails,
                singleCocktail,
                setSingleCocktail,
                setSearchText,
                setLoading
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContextHook = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useGlobalContextHook }
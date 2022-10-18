import React, { useContext , useState } from "react";

const AppContext = React.createContext();

const AppContextProvider = ({children})=>{
    const [modalShow , setModalShow] = useState(false);
    const [sidebarShow , setSidebarShow] = useState(false);

    return <AppContext.Provider value={
        {
            modalShow,
            sidebarShow,
            setModalShow,
            setSidebarShow
        }
    }> {children} </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext , AppContextProvider}


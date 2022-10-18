import React, { useContext, useEffect, useReducer, useState } from 'react'

import reducer from './ReducerFn';

const contextProvider = React.createContext();

const Modal = () => {
    const { modalContent, status, closeModal } = useContext(contextProvider);
    useEffect(() => {
        setTimeout(() => {
            closeModal();
        }, 2000)
    })
    return (
        <div className={`w-[30%] md:w-[20%] lg:w-[10%] left-[35%] 
        md:left-[40%] lg:left[45%] text-center absolute mt-20 py-1
         bg-white rounded-md border
         ${status === 'S' ? 'border-green-500' : 'border-red-600'}`}>
            <p className={`font-bold tracking-wide
             ${status === 'S' ? 'text-green-500' : 'text-red-600'}`}>
                {modalContent}</p>
        </div>
    )
}

const ListItem = ({id, name}) => {
    const {removeItem } = useContext(contextProvider);
    return (
        <div className='w-[90%] md:w-[60%] lg:w-[40%] bg-white flex justify-between items-center p-2
        rounded-md shadow-md shadow-gray-300 my-2'>
            <p>{name}</p>
            <button className='text-blue-400 hover:scale-110 font-bold
            tracking-wider p-1 rounded-md'
                onClick={() => removeItem(id)}>remove</button>
        </div>
    )
}



const defaultState = {
    isModalOpen: false,
    modalContent: '',
    people: [],
    status: ''
}

const Reducer = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newPerson = { id: new Date().getTime().toString(), name };
            dispatch({ type: 'SUCCESS', payload: newPerson })
        } else {
            dispatch({ type: "FAILED" })
        }
        setName('');
    }

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    }

    const removeItem = (id) => {
        dispatch({ type: 'DELETE_ITEM', id: id })
    }

    return (
        <contextProvider.Provider value={{...state , closeModal , removeItem }}>
            <div className='bg-blue-50 min-h-screen p-4'>
                {state.isModalOpen && <Modal />}
                <div className='w-[90%] md:w-[60%] lg:w-[40%] bg-white min-h-[200px] mx-auto flex 
            justify-center items-center mt-32 flex-col'>
                    <input className='w-[50%] border  bg-blue-50 h-10 rounded-md 
                p-2 hover:border-green-500' type='text' placeholder='Type here'
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                    <button type='submit' className='mt-3 bg-purple-500 px-4 py-1 text-white font-bold
                 rounded-md ' onClick={(e) => handleSubmit(e)}>Add</button>
                </div>
                <div className='flex flex-col justify-center items-center mt-10'>
                    {state.people.map(person => {
                        return <ListItem key={person.id} {...person}/>
                    })}
                </div>
            </div>
        </contextProvider.Provider>
    )
}

export default Reducer
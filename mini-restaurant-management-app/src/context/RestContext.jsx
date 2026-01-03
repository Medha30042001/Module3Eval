import React, { createContext, useEffect, useState } from 'react'

export const RestContext = createContext();

export const RestProvider = ({children}) => {

    const [rests, setRests] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('evalData')) || [];
        setRests(data);
    }, [])

    const save = (data) => {
        localStorage.setItem('evalData', JSON.stringify(data));
        setRests(data);
    }

    const addRest = (rest) => {
        save(prev => [{...rest, id:Date.now()}, ...prev]);
    }

    const updateRest = (updated) => {
        save(
            rests.map(r =>  r.id === updated.id ? updated : r)
        );
    }

    const deleteRest = (id) => {
        save(rests.filter(r => r.id !== id));
    }
    return(
        <RestContext.Provider value={{
            rests, addRest, updateRest, deleteRest
        }}>
            {children}
        </RestContext.Provider>
    )
    
}

export default RestProvider;
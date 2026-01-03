import React, { createContext, useEffect, useState } from 'react'

export const RestContext = createContext();

export const RestProvider = ({children}) => {

    const [rests, setRests] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('evalData')) || [];
        setRests(data);
    }, [])

    const saveRest = (data) => {
        localStorage.setItem('evalData', JSON.stringify(data));
        setRests(data);
    }

    const addRest = (rest) => {
        saveRest(prev => [{...rest, id:Date.now()}, ...prev]);
    }

    const updateRest = (updated) => {
        const updatedList = rests.map(r => 
            r.id === updated.id ? updated : r
        );
        saveRest(updatedList);
    }

    const deleteRest = (id) => {
        const filteredRests = rests.filter(r => r.id !== id);
        saveRest(filteredRests);
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
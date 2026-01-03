import React, { createContext, useEffect, useState } from 'react'

export const RestContext = createContext();

const RestProvider = ({children}) => {

    const [rests, setRests] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('evalData');
        const data = stored ? JSON.parse(stored) : [];
        setRests(data);
    }, [])

    const save = (data) => {
        setRests(
            prev => {
                const data = typeof dataOrFn === 'function' ? dataorFn(prev) : dataOrFn;
                localStorage.setItem('evalData', JSON.stringify(data));
        return data;
            }
        )        
    }

    const addRest = (rest) => {
        save([{...rest, id:Date.now()}, ...rests]);
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
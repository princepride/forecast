import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    
    return (
        <StateContext.Provider value = {{
            loading, setLoading
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
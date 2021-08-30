import React, { createContext, useReducer } from 'react';


export const memoriesContext = createContext();

export default function Context({ children }) {

    return (
        <memoriesContext.Provider>
            {children}
        </memoriesContext.Provider>
    )
}
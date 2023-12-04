'use client';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function Providers({ children }) {
    const [appState, setAppState] = useState({
        output: {},
    });

    return (
        <AppContext.Provider value={{ appState, setAppState }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
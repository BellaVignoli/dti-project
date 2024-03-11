"use client"

import { createContext, useState, ReactNode } from 'react';

export const filterContext = createContext({
    search: '',	
    page: 0,
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
})

interface ProviderProps{
    children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps){
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);

    return(
        <filterContext.Provider value={{search, page, setSearch, setPage}}>
            {children}
        </filterContext.Provider>
    )
}
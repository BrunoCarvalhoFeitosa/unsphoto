"use client"

import type { UnsphotoApiCompleteType } from "@/@types/typings"
import React, {
    createContext,
    useState,
    useContext,
    ReactNode
} from "react"

type SearchDataType = {
    searchTerm: string;
    isSearched: boolean;
    searchedResults: UnsphotoApiCompleteType;
    setSearchTerm: (term: string) => void
    setIsSearched: (search: boolean) => void
    setSearchedResults: (result: UnsphotoApiCompleteType) => void
}

const SearchContext = createContext<SearchDataType | undefined>(undefined)

type SearchContextProviderProps = {
    children: ReactNode;
}

export const SearchProvider: React.FC<SearchContextProviderProps> = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [isSearched, setIsSearched] = useState<boolean>(false)
    const [searchedResults, setSearchedResults] = useState({})

    return (
        <SearchContext.Provider
            value={{
                searchTerm,
                isSearched,
                searchedResults,
                setSearchTerm,
                setIsSearched,
                setSearchedResults
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = (): SearchDataType => {
    const context = useContext(SearchContext)
  
    if (!context) {
      throw new Error('useSearch must be used within a SearchProvider')
    }
  
    return context
  }
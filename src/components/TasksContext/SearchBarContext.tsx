import { FC, PropsWithChildren, createContext, useState } from 'react'

export interface Filter {
  searchTerm: string
  onlyCompleted: boolean
}

export interface SearchBarContextType {
  filter: Filter
  setFilter: (value: Filter) => void
}

export const SearchBarContext = createContext<SearchBarContextType>({
  filter: {
    searchTerm: '',
    onlyCompleted: false,
  },
  setFilter: () => {},
})

export const SearchBarContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filter, setFilter] = useState<Filter>({ searchTerm: '', onlyCompleted: false })

  return <SearchBarContext.Provider value={{ filter, setFilter }}>{children}</SearchBarContext.Provider>
}

import { FC, useCallback, useEffect, useRef } from 'react'

interface SearchBarProps {
  onSearch: (searchText: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value), [onSearch])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Buscar tareas..." onChange={handleSearch} />
    </div>
  )
}

export default SearchBar

import { FC } from 'react'

const SearchBar: FC<{ searchText: string; setSearchText: (text: string) => void }> = ({
  searchText,
  setSearchText,
}) => {
  return (
    <input
      type="text"
      placeholder="Buscar tareas..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  )
}

export default SearchBar

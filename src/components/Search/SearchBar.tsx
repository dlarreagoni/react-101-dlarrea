import { FC, useContext, useEffect, useRef } from 'react'
import { SearchBarContext } from '../TasksContext/SearchBarContext'
import css from './SearchBar.module.css'

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { filter, setFilter } = useContext(SearchBarContext)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className={css.searchBar}>
      <input
        ref={inputRef}
        type="text"
        placeholder="buscar"
        onChange={(e) => setFilter({ ...filter, searchTerm: e.target.value })}
      />
      <div>
        <input type="checkbox" onChange={() => setFilter({ ...filter, onlyCompleted: !filter.onlyCompleted })} /> sólo
        tareas sin completar
      </div>
    </div>
  )
}

export default SearchBar

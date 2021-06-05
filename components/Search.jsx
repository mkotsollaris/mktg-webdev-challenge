import { useContext } from 'react'
import AppContext from '../context/AppContext'
import style from './style.module.css'

const Search = () => {
  const { onSearchChange } = useContext(AppContext)

  return (
    <>
      <input
        onChange={(e) => onSearchChange(e.target.value.toLowerCase())}
        type="text"
        className={style.search}
        placeholder="Search people by name"
      />
    </>
  )
}

export default Search

import { useContext } from 'react'
import style from './style.module.css'
import searchIconSrc from '../../../public/img/search.svg'
import AppContext from '../../../context/AppContext'

const Search = () => {
  const { setSearchValue } = useContext(AppContext)

  return (
    <>
      <div className={style['search-grid']}>
        <div className={style['search-icon']}>
          <img src={searchIconSrc} alt="search" />
        </div>
        <div>
          <input
            onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
            type="text"
            placeholder="Search people by name"
          />
        </div>
      </div>
    </>
  )
}

export default Search

import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import style from '../style.module.css'
import componentsStyle from '../style.module.css'

const ClearFilter = () => {
  const { setFilteredDepartments } = useContext(AppContext)
  return (
    <button
      className={`${style['secondary-label']} ${style.clickable} ${componentsStyle['default-button']}`}
      onClick={() => setFilteredDepartments([])}
    >
      clear filters
    </button>
  )
}

export default ClearFilter

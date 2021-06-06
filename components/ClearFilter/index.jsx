import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import style from '../style.module.css'

const ClearFilter = () => {
  const { setFilteredDepartments } = useContext(AppContext)

  return (
    <span
      role="button"
      className={`${style['secondary-label']} ${style.clickable} ${style['margin-left-sm']}`}
      onClick={() => setFilteredDepartments([])}
    >
      clear filters
    </span>
  )
}

export default ClearFilter

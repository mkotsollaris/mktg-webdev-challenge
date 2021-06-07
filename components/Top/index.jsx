import Search from './Search'
import style from './style.module.css'
import componentStyle from '../style.module.css'
import AppContext from '../../context/AppContext'
import { useContext } from 'react'
import ClearFilter from '../ClearFilter'
import { useMediaQuery } from '@material-ui/core'
import Checkbox from './Checkbox'

const Top = () => {
  let isPageSmall = useMediaQuery('(max-width: 960px)')

  const {
    hideWithMissingProfileImg,
    setHideWithMissingProfileImg,
    filteredDepartments,
  } = useContext(AppContext)

  const checkBoxLabel = (
    <label>
      <Checkbox
        checked={hideWithMissingProfileImg}
        onChange={() => {
          setHideWithMissingProfileImg(!hideWithMissingProfileImg)
        }}
      />
    </label>
  )

  const content =
    isPageSmall && filteredDepartments.length > 0 ? (
      <>
        <div
          className={`${style['bottom-grid']} ${style['three-column-grid']}`}
        >
          <div className={`${componentStyle['non-selectable']}`}>
            {checkBoxLabel}
          </div>
        </div>
        <div>
          <ClearFilter />
        </div>
      </>
    ) : (
      <div
        className={`${style['bottom-grid']} ${componentStyle['non-selectable']}`}
      >
        {checkBoxLabel}
      </div>
    )

  return (
    <div className={style.top}>
      <h1 className={style['large-span']}>Hashicorp Humans</h1>
      <span className={`${style['medium-span']} ${style['margin-bottom-sm']}`}>
        Find a HashiCorp human
      </span>
      <Search />
      {content}
    </div>
  )
}

export default Top

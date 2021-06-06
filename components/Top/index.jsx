import Search from './Search'
import Checkbox from './Checkbox'
import style from './style.module.css'
import AppContext from '../../context/AppContext'
import { useContext } from 'react'
import isSmallScreen from '../../utils/hooks/isSmallScreen'
import ClearFilter from '../ClearFilter'

const Top = () => {
  const smallScreen = isSmallScreen()

  const {
    hideWithMissingProfileImg,
    setHideWithMissingProfileImg,
    filteredDepartments,
  } = useContext(AppContext)

  const content =
    smallScreen && filteredDepartments.length > 0 ? (
      <div className={`${style['bottom-grid']} ${style['three-column-grid']} `}>
        <div>
          <Checkbox
            checked={hideWithMissingProfileImg}
            onChange={() =>
              setHideWithMissingProfileImg(!hideWithMissingProfileImg)
            }
          />
        </div>
        <div>
          <span className={style['small-span']}>
            Hide people missing a profile image
          </span>
        </div>
        <div>
          <ClearFilter />
        </div>
      </div>
    ) : (
      <div className={style['bottom-grid']}>
        <Checkbox
          checked={hideWithMissingProfileImg}
          onChange={() =>
            setHideWithMissingProfileImg(!hideWithMissingProfileImg)
          }
        />
        <span className={style['small-span']}>
          Hide people missing a profile image
        </span>
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

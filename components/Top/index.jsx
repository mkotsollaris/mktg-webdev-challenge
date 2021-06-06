import Search from './Search'
import Checkbox from './Checkbox'
import style from './style.module.css'
import AppContext from '../../context/AppContext'
import { useContext } from 'react'

const Top = () => {
  const {
    hideWithMissingProfileImg,
    setHideWithMissingProfileImg,
  } = useContext(AppContext)
  return (
    <div className={style.top}>
      <h1 className={style['large-span']}>Hashicorp Humans</h1>
      <span className={`${style['medium-span']} ${style['margin-bottom-sm']}`}>
        Find a HashiCorp human
      </span>
      <Search />
      <div className={style['checkbox-grid']}>
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
    </div>
  )
}

export default Top

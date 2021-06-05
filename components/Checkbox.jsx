import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import style from './style.module.css'

const Checkbox = (props) => {
  const {
    hideWithMissingProfileImg,
    setHideWithMissingProfileImg,
  } = useContext(AppContext)
  return (
    <div className={style['checkbox-main-grid']}>
      <input
        className={style['checkbox']}
        checked={hideWithMissingProfileImg}
        onChange={() =>
          setHideWithMissingProfileImg(!hideWithMissingProfileImg)
        }
        type="checkbox"
        {...props}
      />
    </div>
  )
}

export default Checkbox

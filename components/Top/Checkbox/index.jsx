import React from 'react'
import style from './style.module.css'

const Checkbox = (props) => {
  return (
    <div className={style['checkbox-main-grid']}>
      <input
        role="checkbox"
        className={style['checkbox']}
        type="checkbox"
        {...props}
      />
    </div>
  )
}

export default Checkbox

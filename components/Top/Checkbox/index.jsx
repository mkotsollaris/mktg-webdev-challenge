import { useState } from 'react'
import style from './style.module.css'

const Checkbox3 = ({
  checked,
  spanText = 'Hide people missing a profile image',
  ...props
}) => {
  // const [isChecked, setIsChecked] = useState();
  const [isFocused, setIsFocused] = useState(false)

  const classNames = isFocused ? ` ${style['on-focus']}` : null

  return (
    <div className={`${style.container}`}>
      <div>
        <div className={style.grid}>
          <input
            className={style.input}
            onFocus={() => {
              setIsFocused(true)
            }}
            onBlur={() => {
              setIsFocused(false)
            }}
            type="checkbox"
            checked={checked}
            {...props}
          />
          <span className={`${style.checkmark} ${classNames}`}></span>
          <span className={style['small-span']}>{spanText}</span>
        </div>
      </div>
    </div>
  )
}

export default Checkbox3

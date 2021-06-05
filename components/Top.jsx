import Search from './Search'
import Checkbox from './Checkbox'
import style from './style.module.css'

const Top = () => {
  return (
    <div className={style.top}>
      <h1 className={style['large-span']}>Hashicorp Humans</h1>
      <span className={style['medium-span']}>Find a HashiCorp human</span>
      <Search />
      <div className={style['checkbox-grid']}>
        <Checkbox />
        <span>Hide people missing a profile image</span>
      </div>
    </div>
  )
}

export default Top

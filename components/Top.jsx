import Search from './Search'
import SubTitle from './SubTitle'
import Title from './Title'
import Checkbox from './CheckBox'
import style from './style.module.css'

const Top = () => {
  return (
    <div className={style.top}>
      <Title />
      <Search />
      <SubTitle />
      <div className={style['checkbox-grid']}>
        <Checkbox />
        <span>Hide people missing a profile image</span>
      </div>
    </div>
  )
}

export default Top

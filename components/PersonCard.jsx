import style from './style.module.css'
import logo from '../public/img/avatar.svg'

const PersonCard = ({ url, name, title, department }) => {
  return (
    <div className={style.person}>
      <div className={style.centered}>
        {url ? (
          <img alt="avatar" className={style.avatar} src={url} />
        ) : (
          <img src={logo} className={style.avatar} alt="avatar" />
        )}
      </div>
      <div className={style.name}>{name}</div>
      <div className={style.light}>{title}</div>
      <div className={style.light}>{department}</div>
    </div>
  )
}

export default PersonCard

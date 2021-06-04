import style from './style.module.css'
import logo from '../public/img/avatar.svg';

const PersonCard = ({ url, name, title, department }) => {
    return <div className={style.person}>
        <div className={style.centered}>
            {url ? <img className={style.avatar} src={url} /> : <img src={logo} className={style.avatar} alt="logo" />}
        </div>
        <div className={style.name}>
            {name}
        </div>
        <div>
            {title}
        </div>
        <div>
            {department}
        </div>
    </div>
}

export default PersonCard
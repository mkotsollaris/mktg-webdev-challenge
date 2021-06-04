import Search from './Search';
import SubTitle from './SubTitle';
import Title from './Title';
import Checkbox from './CheckBox';
import style from './style.module.css'

const Top = () => {
    return <div className={style.top}>
        <Title />
        <Search />
        <SubTitle />
        <Checkbox text='Hide people missing a profile image' />
    </div>
}

export default Top;
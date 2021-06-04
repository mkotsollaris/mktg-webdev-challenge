import { useContext } from "react"
import AppContext from "../context/AppContext"
import PersonCard from "./PersonCard";
import style from './style.module.css'

const PeopleGrid = () => {
    const { people } = useContext(AppContext);
    const element = people?.map(person => <PersonCard url={person?.avatar?.url} name={person.name} title={person.title} department={person.department.name} />)
    return <div className={style.people}>
        {element}
    </div>
}

export default PeopleGrid;
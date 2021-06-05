import { useContext } from 'react'
import AppContext from '../context/AppContext'
import PersonCard from './PersonCard'
import style from './style.module.css'

const PeopleGrid = () => {
  const { people } = useContext(AppContext)

  const People = (
    <div className={style.people}>
      {people?.map((person) => (
        <PersonCard
          key={person.id}
          url={person?.avatar?.url}
          name={person?.name}
          title={person?.title}
          department={person?.department?.name}
        />
      ))}
    </div>
  )

  const NoResultsFound = (
    <div className={style['no-results-found']}>No results found.</div>
  )

  return people ? People : NoResultsFound
}

export default PeopleGrid
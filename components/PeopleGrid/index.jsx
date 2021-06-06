import { useContext } from 'react'
import PersonCard from './PersonCard'
import style from './style.module.css'
import AppContext from '../../context/AppContext'

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
  return people?.length > 0 ? People : NoResultsFound
}

export default PeopleGrid

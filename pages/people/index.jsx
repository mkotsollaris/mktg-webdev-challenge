import AppProvider from '../../context/AppProvider'
import rivetQuery from '@hashicorp/nextjs-scripts/dato/client'
import query from './query.graphql'
import Top from '../../components/Top'
import TreeView from '../../components/TreeView'
import PeopleGrid from '../../components/PeopleGrid'
import style from './style.module.css'
import NoSsr from '@material-ui/core/NoSsr'
import { useMediaQuery } from '@material-ui/core'

const People = ({ allPeople, allDepartments }) => {
  let isSmallScreen = useMediaQuery('(max-width: 1000px)')

  const content = isSmallScreen ? (
    <div>
      <PeopleGrid />
    </div>
  ) : (
    <div className={style['people-grid']}>
      <div>
        <TreeView />
      </div>
      <div>
        <PeopleGrid />
      </div>
    </div>
  )

  return (
    <div className="g-container">
      <AppProvider allPeople={allPeople} departments={allDepartments}>
        <NoSsr>
          <Top />
          {content}
        </NoSsr>
      </AppProvider>
    </div>
  )
}

export async function getStaticProps() {
  const data = await rivetQuery({ query })
  return { props: data }
}

People.layout = true
export default People

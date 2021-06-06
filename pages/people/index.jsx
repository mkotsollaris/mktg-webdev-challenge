import AppProvider from '../../context/AppProvider'
import rivetQuery from '@hashicorp/nextjs-scripts/dato/client'
import query from './query.graphql'
import Top from '../../components/Top'
import TreeView from '../../components/TreeView'
import PeopleGrid from '../../components/PeopleGrid'
import style from './style.module.css'
import Hidden from '@material-ui/core/Hidden'

const People = ({ allPeople, allDepartments }) => {
  return (
    <div className="g-container">
      <AppProvider allPeople={allPeople} departments={allDepartments}>
        <Top />

        <div className={style['people-grid']}>
          <Hidden smDown>
            <div>
              <TreeView />
            </div>
          </Hidden>
          <div>
            <PeopleGrid />
          </div>
        </div>
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

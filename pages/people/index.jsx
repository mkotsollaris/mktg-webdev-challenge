import FilterTree from '../../components/TreeView'
import AppProvider from '../../context/AppProvider'
import rivetQuery from '@hashicorp/nextjs-scripts/dato/client'
import query from './query.graphql'
import PeopleGrid from '../../components/PeopleGrid'
import style from '../../components/style.module.css'
import Top from '../../components/Top'

const Directory = ({ allPeople, allDepartments }) => {
  return (
    <div className="g-container">
      <AppProvider allPeople={allPeople} departments={allDepartments}>
        <Top />
        <div className={style['two-column-grid']}>
          <div>
            <FilterTree />
          </div>
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

Directory.layout = true
export default Directory

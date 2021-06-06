import AppProvider from '../../context/AppProvider'
import rivetQuery from '@hashicorp/nextjs-scripts/dato/client'
import query from './query.graphql'
import Top from '../../components/Top'
import TreeView from '../../components/TreeView'
import PeopleGrid from '../../components/PeopleGrid'
import style from './style.module.css'
import isSmallScreen from '../../utils/hooks/isSmallScreen'

const Directory = ({ allPeople, allDepartments }) => {
  const smallScreen = isSmallScreen()
  const content = smallScreen ? (
    <div>
      <PeopleGrid />
    </div>
  ) : (
    <div className={style['two-column-grid']}>
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
        <Top />
        {content}
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

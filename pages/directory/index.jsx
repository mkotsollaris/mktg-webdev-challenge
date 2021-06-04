import FilterTree from '../../components/Sidebar';
import Search from '../../components/Search';
import SubTitle from '../../components/SubTitle';
import Title from '../../components/Title';
import AppProvider from '../../context/AppProvider';
import rivetQuery from '@hashicorp/nextjs-scripts/dato/client'
import query from './query.graphql'

const Directory = ({ allPeople, allDepartments }) => {
    return (
        <>
            <AppProvider people={allPeople} departments={allDepartments}>
                <div>
                    <FilterTree />
                </div>
                <div>
                    <Title />
                    <Search />
                    <SubTitle />
                </div>
            </AppProvider>
        </>
    )
}

export async function getStaticProps() {
    const data = await rivetQuery({ query })
    return { props: data }
}

Directory.layout = true
export default Directory;

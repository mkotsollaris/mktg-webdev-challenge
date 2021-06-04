import FilterTree from '../../components/TreeView';
import Search from '../../components/Search';
import SubTitle from '../../components/SubTitle';
import Title from '../../components/Title';
import AppProvider from '../../context/AppProvider';
import rivetQuery from '@hashicorp/nextjs-scripts/dato/client'
import query from './query.graphql'
import Checkbox from '../../components/CheckBox';

const Directory = ({ allPeople, allDepartments }) => {
    return (
        <>
            <AppProvider people={allPeople} departments={allDepartments}>
                <div>
                    <Title />
                    <Search />
                    <SubTitle />
                    <Checkbox text='Hide people missing a profile image' />
                </div>
                <FilterTree />
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

import React from 'react';
import convertDepartmentsToTreeNode from '../utils/convertDepartmentsToTreeNodesArray';
import AppContext from './AppContext';

const AppProvider = ({ children, people, departments }) => {

    const treeNodes = convertDepartmentsToTreeNode(departments)

    return <AppContext.Provider value={{
        treeNodes
    }} >
        {children}
    </AppContext.Provider>
}

export default AppProvider;
import React, { useState } from 'react';
import { convertInputToTreeNodesArray } from '../utils/TreeNode';
import AppContext from './AppContext';

const AppProvider = ({ children, allPeople, departments }) => {

    const treeNodes = convertInputToTreeNodesArray(departments)
    console.log(allPeople)
    const [people, setPeople] = useState(allPeople)

    return <AppContext.Provider value={{
        people,
        treeNodes
    }} >
        {children}
    </AppContext.Provider>
}

export default AppProvider;
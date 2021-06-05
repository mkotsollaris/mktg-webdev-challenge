import React, { useEffect, useState } from 'react'
import { convertInputToTreeNodesArray } from '../utils/TreeNode'
import AppContext from './AppContext'

const AppProvider = ({ children, allPeople, departments }) => {
  const [filteredDepartments, setFilteredDepartments] = useState([])
  const treeNodes = convertInputToTreeNodesArray(departments)
  const [people, setPeople] = useState(allPeople)
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    const newPeople = updatePeopleByDepartmentFilter()
    const peopleFilteredBySearchValue = updatePeopleBySearchValue(newPeople)
    setPeople(peopleFilteredBySearchValue)
  }, [filteredDepartments, searchValue])

  const updatePeopleByDepartmentFilter = () => {
    if (filteredDepartments.length !== 0) {
      const newPeople = allPeople.filter((person) =>
        filteredDepartments.includes(person.department.name)
      );
      return newPeople
    } else {
      return allPeople
    }
  }
  const updatePeopleBySearchValue = (peopleInput) => {
    if (!searchValue) {
      return peopleInput
    }
    return peopleInput.filter((person) => person.name.toLowerCase().startsWith(searchValue));
  }

  // DFS to compute the nodes that should be highlighted
  let dfs = (searchLabel, node, currPath = []) => {
    if (node.value === searchLabel) {
      return [...currPath, searchLabel]
    }
    for (let child of node.children) {
      let newCurrPathArr = dfs(searchLabel, child, [...currPath, node.value])
      if (newCurrPathArr?.includes(searchLabel)) {
        return newCurrPathArr
      }
    }
  }

  let computeFilteredDepartments = (label) => {
    let treeItems = []
    for (let node of treeNodes) {
      treeItems = dfs(label, node, [])
      if (treeItems) {
        break
      }
    }
    setFilteredDepartments(treeItems)
    return treeItems
  }

  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
        people,
        treeNodes,
        filteredDepartments,
        setFilteredDepartments,
        computeFilteredDepartments,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

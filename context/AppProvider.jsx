import React, { useState } from 'react'
import { convertInputToTreeNodesArray } from '../utils/TreeNode'
import AppContext from './AppContext'

const AppProvider = ({ children, allPeople, departments }) => {
  const [filteredDepartments, setFilteredDepartments] = useState([])
  const treeNodes = convertInputToTreeNodesArray(departments)
  const [people, setPeople] = useState(allPeople)

  const getPeopleFilteredByDepartment = () => {
    if (filteredDepartments.length === 0) {
      return allPeople
    }
    return allPeople.filter((person) =>
      filteredDepartments.includes(person.department.name)
    )
  }

  const onSearchChange = (value) => {
    const newPeople = getPeopleFilteredByDepartment().filter((person) =>
      person.name.toLowerCase().startsWith(value)
    )
    setPeople(newPeople)
  }

  // DFS to compute highlighted nodes
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
        people,
        treeNodes,
        filteredDepartments,
        setFilteredDepartments,
        computeFilteredDepartments,
        onSearchChange,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

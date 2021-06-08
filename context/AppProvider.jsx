import React, { useEffect, useState } from 'react'
import { convertInputToTreeNode } from '../utils/TreeNode'
import AppContext from './AppContext'
import KMPSearch from '../utils/knuthMorrisPratt'

const AppProvider = ({ children, allPeople, departments }) => {
  const [expanded, setExpanded] = useState([])
  const [filteredDepartments, setFilteredDepartments] = useState([])
  const treeNode = convertInputToTreeNode(departments)
  const [people, setPeople] = useState(allPeople)
  const [searchValue, setSearchValue] = useState()
  const [hideWithMissingProfileImg, setHideWithMissingProfileImg] = useState(
    false
  )

  useEffect(() => {
    const newPeople = updatePeopleByDepartmentFilter()
    const peopleFilteredBySearchValue = updatePeopleBySearchValue(newPeople)
    const peopleFilteredByMissingProfile = updatePeopleByMissingProfileImg(
      peopleFilteredBySearchValue
    )
    setPeople(peopleFilteredByMissingProfile)
  }, [filteredDepartments, searchValue, hideWithMissingProfileImg])

  const updatePeopleByDepartmentFilter = () => {
    if (filteredDepartments.length !== 0) {
      const newPeople = allPeople.filter((person) =>
        filteredDepartments.includes(person.department.name)
      )
      return newPeople
    } else {
      return allPeople
    }
  }
  const updatePeopleBySearchValue = (peopleInput) => {
    if (!searchValue) {
      return peopleInput
    }
    return peopleInput.filter(
      (person) =>
        KMPSearch(person.name.toLowerCase(), searchValue.toLowerCase()) !== -1
    )
  }

  const updatePeopleByMissingProfileImg = (peopleInput) => {
    if (!hideWithMissingProfileImg) {
      return peopleInput
    }
    return peopleInput.filter((person) => person?.avatar?.url)
  }

  // DFS to compute the nodes that should be highlighted
  const dfs = (searchLabel, node) => {
    if (node.value === searchLabel) {
      return [searchLabel]
    }
    for (let child of node.children) {
      let newCurrPathArr = dfs(searchLabel, child)
      if (newCurrPathArr?.includes(searchLabel)) {
        return newCurrPathArr
      }
    }
  }

  const computeFilteredDepartments = (label) => {
    const treeItems = dfs(label, treeNode, [])

    setFilteredDepartments(treeItems)
    return treeItems
  }

  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
        people,
        treeNode,
        filteredDepartments,
        setFilteredDepartments,
        computeFilteredDepartments,
        hideWithMissingProfileImg,
        setHideWithMissingProfileImg,
        expanded,
        setExpanded,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

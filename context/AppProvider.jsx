import React, { useEffect, useState } from 'react'
import { convertInputToArray } from '../utils/TreeNode'
import AppContext from './AppContext'
import KMPSearch from '../utils/knuthMorrisPratt'

const AppProvider = ({ children, allPeople, departments }) => {
  const [filteredDepartments, setFilteredDepartments] = useState([])
  const treeNodes = convertInputToArray(departments)
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
  const dfs = (searchLabel, node, currPath = []) => {
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

  const computeFilteredDepartments = (label) => {
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
        hideWithMissingProfileImg,
        setHideWithMissingProfileImg,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider

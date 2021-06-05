import { useContext } from 'react'
import AppContext from '../context/AppContext'
import TreeItem from './TreeItem'
import style from './style.module.css'

const TreeView = () => {
  const { treeNodes, filteredDepartments, setFilteredDepartments } = useContext(
    AppContext
  )

  const renderTreeNode = (node) => {
    const hasChildren = node && node.children && node.children.length > 0

    if (hasChildren) {
      const innerEl = node.children.map((child) => renderTreeNode(child))
      return (
        <TreeItem key={node.attributes.id} label={node.value} node={node}>
          {innerEl}
        </TreeItem>
      )
    }
    return <TreeItem key={node.attributes.id} label={node.value} />
  }

  const content = treeNodes?.map((node) => renderTreeNode(node))

  return (
    <div className={style.treeView}>
      <span className={style.name}>Filter by department</span>
      {filteredDepartments.length === 0 ? null : (
        <span
          className={`${style['secondary-label']} ${style.clickable}`}
          onClick={() => setFilteredDepartments([])}
        >
          clear filters
        </span>
      )}
      {content}
    </div>
  )
}

export default TreeView

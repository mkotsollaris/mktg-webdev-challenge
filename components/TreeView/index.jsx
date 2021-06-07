import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import TreeItem from './TreeItem'
import componentStyle from '../style.module.css'

import style from './style.module.css'
import ClearFilter from '../ClearFilter'

const TreeView = () => {
  const { treeNodes, filteredDepartments } = useContext(AppContext)

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
      <span className={`${componentStyle.name}`}>Filter by department</span>
      {filteredDepartments.length === 0 ? null : <ClearFilter />}
      {content}
    </div>
  )
}

export default TreeView

import { useContext, useState } from 'react'
import ExpandIcon from '@material-ui/icons/ChevronRight'
import CollapseIcon from '@material-ui/icons/ExpandMore'
import style from './style.module.css'
import AppContext from '../context/AppContext'

const TreeItem = ({ label, intend, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { filteredDepartments, computeFilteredDepartments } = useContext(
    AppContext
  )

  const onClick = () => {
    if (!children) {
      computeFilteredDepartments(label)
    }
    setIsExpanded(!isExpanded)
  }

  let cssIntend = intend * 30
  const Icon = !children ? (
    <div />
  ) : isExpanded ? (
    <CollapseIcon style={{ color: 'gray', fontSize: 20 }} />
  ) : (
    <ExpandIcon style={{ color: 'gray', fontSize: 20 }} />
  )
  const classNames = filteredDepartments.includes(label)
    ? `${style.treeItem} ${style.selected}`
    : style.treeItem

  const element = (
    <div className={style.treeItem} style={{ textIndent: `${cssIntend}px` }}>
      <div
        onClick={onClick}
        className={`${style.expandableTreeItem} ${classNames}`}
      >
        {Icon}
        {label}
      </div>
      {isExpanded ? children : null}
    </div>
  )

  return element
}

export default TreeItem

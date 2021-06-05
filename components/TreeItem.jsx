import { useContext, useState } from 'react'
import ExpandIcon from '@material-ui/icons/ChevronRight'
import CollapseIcon from '@material-ui/icons/ExpandMore'
import style from './style.module.css'
import AppContext from '../context/AppContext'

const ExpandIconElement = <ExpandIcon style={{ color: 'gray', fontSize: 20 }} />
const CollapseIconElement = (
  <CollapseIcon style={{ color: 'gray', fontSize: 20 }} />
)

const TreeItem = ({ label, children }) => {
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

  const Icon = !children ? (
    <div />
  ) : isExpanded ? (
    CollapseIconElement
  ) : (
    ExpandIconElement
  )
  const classNames = filteredDepartments.includes(label)
    ? `${style.treeItem} ${style.selected}`
    : style.treeItem

  const element = (
    <div className={`${style.treeItem} ${style['non-selectable']}`}>
      <div
        onClick={onClick}
        className={`${style.expandableTreeItem} ${classNames}`}
      >
        {Icon}
        {label}
      </div>
      {isExpanded ? <ul className={style.ul}>{children}</ul> : null}
    </div>
  )

  return element
}

export default TreeItem

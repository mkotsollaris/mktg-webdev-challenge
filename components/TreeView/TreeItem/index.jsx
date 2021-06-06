import { useContext, useState } from 'react'
import ArrowIcon from '../../../public/img/arrow.svg'
import style from './style.module.css'
import componentsStyle from '../../style.module.css'
import AppContext from '../../../context/AppContext'

const ExpandIconElement = (
  <img alt="expand" className={style.arrow} src={ArrowIcon} />
)
const CollapseIconElement = (
  <img
    alt="collapse"
    className={`${style['rotate-90']} ${style.arrow}`}
    src={ArrowIcon}
  />
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
    <div>{CollapseIconElement}</div>
  ) : (
    <div>{ExpandIconElement}</div>
  )

  const classNames = filteredDepartments.includes(label)
    ? `${style.treeItem} ${style.selected}`
    : style.treeItem

  const element = (
    <div className={`${style.treeItem} ${componentsStyle['non-selectable']}`}>
      <div
        onClick={onClick}
        className={`${style.expandableTreeItem} ${classNames} `}
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
import { useContext } from 'react'
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

const TreeItem = ({ label, children, level }) => {
  const {
    filteredDepartments,
    computeFilteredDepartments,
    expanded,
    setExpanded,
  } = useContext(AppContext)

  const isExpanded = () => {
    return expanded?.includes(label)
  }

  const onClick = () => {
    computeFilteredDepartments(label)

    if (isExpanded()) {
      setExpanded(expanded?.filter((e) => e !== label))
    } else {
      setExpanded([...expanded, label])
    }
  }

  const Icon =
    !children && level === 1 ? (
      <div />
    ) : !children && level > 1 ? null : isExpanded() ? (
      <div>{CollapseIconElement}</div>
    ) : (
      <div>{ExpandIconElement}</div>
    )

  const classNames = filteredDepartments?.includes(label)
    ? `${style.treeItem} ${style.selected}`
    : style.treeItem

  const element = (
    <div className={`${style.treeItem} ${componentsStyle['non-selectable']}`}>
      <button
        tabIndex={0}
        onClick={onClick}
        className={`${style.expandableTreeItem} ${classNames} `}
      >
        {Icon}
        {label}
      </button>
      {isExpanded() ? (
        <ul className={style.ul}>
          <div className={style.children}>{children}</div>
        </ul>
      ) : null}
    </div>
  )
  return element
}

export default TreeItem

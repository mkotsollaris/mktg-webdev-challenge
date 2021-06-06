class TreeNode {
  constructor(value, children = [], attributes) {
    this.value = value
    this.children = children
    this.attributes = attributes
  }
}

const sortNodeChildren = (node) => {
  node.children.sort((a, b) => {
    a.children.forEach((childNode) => {
      sortNodeChildren(childNode)
    })
    if (b.value < a.value) {
      return 1
    }
    return -1
  })
}

const convertInputToArray = (departments) => {
  const map = new Map()
  const root = []

  departments.forEach((element) => {
    let node = new TreeNode(element.name, [], { id: element.id })
    if (element.parent) {
      let parentNode = map.get(element.parent.name)
      if (parentNode) {
        parentNode.children.push(node)
      } else {
        map.set(element.parent.name, [
          new TreeNode(element.parent.name, [node], { id: element.parent.id }),
        ])
        map.set(element.name, node)
      }
    } else {
      map.set(element.name, node)
      root.push(node)
    }
  })

  // sort by name
  root.sort((a, b) => {
    if (b.value < a.value) {
      return 1
    }
    return -1
  })
  root.forEach((node) => sortNodeChildren(node))

  return root
}

export { convertInputToArray, TreeNode }

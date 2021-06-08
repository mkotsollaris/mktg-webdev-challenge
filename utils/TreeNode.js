class TreeNode {
  constructor(value, children = [], attributes) {
    this.value = value
    this.children = children
    this.attributes = attributes
  }

  getNodeByValue = (value) => {
    if (this.value === value) {
      return this
    }
    for (let child of this.children) {
      let foundNode = child.getNodeByValue(value)
      if (foundNode) {
        return foundNode
      }
    }
    return undefined
  }

  // todo put that inside the class
  // sortNodeChildren() {
  //   this.children.sort((a, b) => {
  //     a.children.forEach((childNode) => {
  //       sortNodeChildren(childNode)
  //     })
  //     if (b.value < a.value) {
  //       return 1
  //     }
  //     return -1
  //   })
  // }
}

// TODO break to small chunks
const convertInputToArray = (departments) => {
  const root = new TreeNode()
  const remaining = []

  departments.forEach((element) => {
    let node = new TreeNode(element.name, [], { id: element.id })
    if (!element.parent) {
      root.children.push(node)
      return
    }

    // find parent in the tree
    let parentNode = root.getNodeByValue(element.parent.name)
    if (parentNode) {
      parentNode.children.push(node)
      return
    }

    // search in remaining
    const parentNodeIndex = remaining.findIndex((rNode) =>
      rNode.getNodeByValue(element.parent.name)
    )
    if (parentNodeIndex !== -1) {
      parentNode = remaining[parentNodeIndex]
      parentNode.children.push(node)
      remaining.splice(parentNodeIndex, 1)
      return
    }

    parentNode = new TreeNode(element.parent.name, [node], { id: element.id })
    remaining.push(parentNode)
  })

  for (let remNode of remaining) {
    let wantedNode = root.getNodeByValue(remNode.value)
    wantedNode.children.push(...remNode.children)
  }
  return root
}

export { convertInputToArray, TreeNode }

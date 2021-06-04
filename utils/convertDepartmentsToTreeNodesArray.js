import TreeNode from "./TreeNode"

const convertDepartmentsToTreeNodesArray = (departments) => {
    const map = new Map();

    departments.forEach(element => {
        let node = new TreeNode(element.name);
        if (element.parent) {

            let parentNode = map.get(element.parent.name);
            if (parentNode) {
                parentNode.children.push(node)
            } else {
                map.set(element.parent.name, [new TreeNode(element.parent.name)])
            }
        } else {
            map.set(element.name, node)
        }
    });

    let newMap = new Map([...map].sort((a, b) => {
        if (b[0] < a[0]) {
            return 1
        }
        return -1
    }));

    return [...newMap];
}

export default convertDepartmentsToTreeNodesArray;
import { useContext } from "react";
import AppContext from "../context/AppContext";
import TreeItem from "./TreeItem";

const Sidebar = () => {

    const { treeNodes } = useContext(AppContext);

    // TODO https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

    // getting a TreeNode
    const renderTreeNode = (node, intend = 0) => {

        const hasChildren = node && node.children && node.children.length > 0;

        if (hasChildren) {
            console.log('WOOT', node.children)
            const innerEl = node.children.map(child => renderTreeNode(child, intend + 1))
            return <TreeItem intend={intend} label={node.value}>
                {innerEl}
            </TreeItem>
        } else {
            return <TreeItem intend={intend} label={node.value} />
        }
    }

    const el = treeNodes?.map(node => renderTreeNode(node))

    console.log('EL!', el)
    return <>
        {el}
    </>
}

export default Sidebar;
import { useContext } from "react";
import AppContext from "../context/AppContext";
import TreeItem from "./TreeItem";

const TreeView = () => {

    const { treeNodes } = useContext(AppContext);

    const renderTreeNode = (node, intend = 0) => {

        const hasChildren = node && node.children && node.children.length > 0;

        if (hasChildren) {
            const innerEl = node.children.map(child => renderTreeNode(child, intend + 1))
            return <TreeItem key={node.attributes.id} intend={intend} label={node.value}>
                {innerEl}
            </TreeItem>
        } else {
            return <TreeItem key={node.attributes.id} intend={intend} label={node.value} />
        }
    }

    const content = treeNodes?.map(node => renderTreeNode(node))

    return <>
        {content}
    </>
}

export default TreeView;
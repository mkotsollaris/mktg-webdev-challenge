import { useContext } from "react";
import AppContext from "../context/AppContext";
import TreeItem from "./TreeItem";
import style from './style.module.css'

const TreeView = () => {

    const { treeNodes } = useContext(AppContext);

    const renderTreeNode = (node, intend = 0) => {

        const hasChildren = node && node.children && node.children.length > 0;

        if (hasChildren) {
            const innerEl = node.children.map(child => renderTreeNode(child, intend + 1))
            return <TreeItem key={node.attributes.id} intend={intend} label={node.value}>
                {innerEl}
            </TreeItem>
        }
        return <TreeItem key={node.attributes.id} intend={intend} label={node.value} />
    }

    const content = treeNodes?.map(node => renderTreeNode(node))

    return <div className={style.treeview}>
        {content}
    </div>
}

export default TreeView;
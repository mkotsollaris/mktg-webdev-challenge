import { useContext } from "react";
import AppContext from "../context/AppContext";
import TreeItem from "./TreeItem";

const Sidebar = () => {

    const { treeNodes } = useContext(AppContext);

    // TODO https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

    // getting a TreeNode
    const renderTreeNodes = (nodes, intend = 0) => {

        let content = nodes?.map(e => {
            const hasChildren = e[1] && e[1].children;

            if (hasChildren) {
                return <TreeItem intend={intend + 1} label={e[0]}>
                    {renderTreeNodes(e[1].children, intend + 1)}
                </TreeItem>
            } else {
                return <TreeItem intend={intend} label={e[0]} />
            }
        })
        return content;
    }

    const el = renderTreeNodes(treeNodes);

    return <>

        {el}
    </>
}

export default Sidebar;
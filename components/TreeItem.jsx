import { useState } from "react";
import ExpandIcon from '@material-ui/icons/ChevronRight';
import CollapseIcon from '@material-ui/icons/ExpandMore';

const TreeItem = ({ label, intend, children }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const onClick = () => {

        if (!children) {
            //TODO need to bubble event to parent
        }
        setIsExpanded(!isExpanded);
    }

    let cssIntend = intend * 30;
    const Icon = !children ? null : isExpanded ? <CollapseIcon /> : <ExpandIcon />

    const element = <div onClick={onClick} style={{ textIndent: `${cssIntend}px` }}>
        {Icon}
        {label}
        {isExpanded ? children : null}
    </div>
    return element
}

export default TreeItem;
import { useState } from "react"

// maybe not needed
const TreeItem = ({ label, intend }) => {
    let cssIntend = intend * 30;
    return <div style={{ textIndent: `${cssIntend}px` }}>
        {label}
    </div>
}

export default TreeItem;
import { useState } from "react"

// maybe not needed
const TreeItem = ({ label, intend, children }) => {
    let cssIntend = intend * 30;
    return <div style={{ textIndent: `${cssIntend}px` }}>
        {label}
        {children}
    </div>
}

export default TreeItem;
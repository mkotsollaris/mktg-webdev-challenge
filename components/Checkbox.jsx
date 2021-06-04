import React from 'react';

const Checkbox = ({ text, checked }) => {
    return <div>
        {checked ? <div>✔️</div> : null}
        {!text ? null : <div>
            {text}
        </div>}
    </div>
}

export default Checkbox;
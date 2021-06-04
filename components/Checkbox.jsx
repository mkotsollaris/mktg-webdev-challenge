import React from 'react';

const Checkbox = ({ text, checked }) => {
    return <div>
        <div>
            {text}
        </div>
        {checked ? <div>✔️</div> : null}
    </div>
}

export default Checkbox;
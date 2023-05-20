import React from 'react'

function C2({ handleAdd }) {
    return (
        <div>
            C2<button onClick={() => handleAdd()}>add</button>
        </div>
    )
}

export default C2
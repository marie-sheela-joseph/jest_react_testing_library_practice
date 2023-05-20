import React from 'react'
import C2 from './C2'

function C1() {
    const addFn = () => {
        console.log('add fn called')
    }
    return (
        <C2 handleAdd={addFn}></C2>
    )
}

export default C1
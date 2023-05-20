import React, { useState, useEffect } from 'react'

function FirstRender() {
    const [a, setA] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setA(false)
        }, 1000)
    }, [])

    return (
        <div>C1
            <div>
                {a && <h1>start</h1>}
                {!a && <h1>end</h1>}
            </div>
        </div>
    )
}

export default FirstRender
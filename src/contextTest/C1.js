import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import C2 from './C2'
export const userContext = createContext()

function C1() {
    const [user, setUser] = useState(null)
    return (
        <userContext.Provider value={user}>
            <p>C1</p>
            <button onClick={() => setUser({ firstName: 'Marie Sheela' })}>create user</button>
            <C2>
            </C2>
        </userContext.Provider>
    )
}

export default C1
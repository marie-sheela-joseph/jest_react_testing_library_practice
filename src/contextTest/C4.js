import React from 'react'
import { useContext } from 'react'
import { userContext } from './C1'

function C4() {
    const user = useContext(userContext)
    return (
        <div>C4
            <p>{user?.firstName || 'no user'}</p>
        </div>
    )
}

export default C4
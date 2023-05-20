import C4 from "./C4"
import { userContext } from "./C1"
import { render, screen } from '@testing-library/react'

describe('C4', () => {
    test('user context with null', () => {
        render(<userContext.Provider value={null}>
            <C4></C4>
        </userContext.Provider>)
        const firstName = screen.getByText('no user')
        expect(firstName).toBeInTheDocument()
    })
    test('user context with name', () => {
        render(<userContext.Provider value={{ firstName: 'Marie Sheela' }}>
            <C4></C4>
        </userContext.Provider>)
        const firstName = screen.getByText('Marie Sheela')
        expect(firstName).toBeInTheDocument()
    })
})
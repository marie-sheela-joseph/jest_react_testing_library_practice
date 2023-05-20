import { screen, render } from '@testing-library/react'
import Counter from './Counter'
import user from '@testing-library/user-event'

describe('Counter', () => {
    test('renders button', () => {
        render(<Counter />)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
    })
    //increase state on button click
    test('mouse click on button +', async () => {
        user.setup()
        render(<Counter />)
        const buttonElement = screen.getByRole('button')
        await user.click(buttonElement)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('1')
    })
    test('mouse click twice renders 2', async () => {
        user.setup()
        render(<Counter />)
        const buttonElement = screen.getByRole('button')
        await user.click(buttonElement)
        await user.click(buttonElement)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('2')
    })
})

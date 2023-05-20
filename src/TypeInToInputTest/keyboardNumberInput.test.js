import { render, screen } from '@testing-library/react'
import KeyboardNumberInput from "./KeyboardNumberInput"
import user from '@testing-library/user-event'

describe('KeyboardNumberInput', () => {
    test('type number in input', () => {
        user.setup()
        render(<KeyboardNumberInput />)
        const inputElement = screen.getByRole('spinbutton')
        user.type(inputElement, '5')
        expect(inputElement).toHaveValue(5)
    }
    )
})
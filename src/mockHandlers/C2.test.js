import { render, screen } from '@testing-library/react'
import C2 from './C2'
import user from '@testing-library/user-event'
describe("C2", () => {
    test("calls handlers", async () => {
        user.setup()
        const addFn = jest.fn()
        render(<C2 handleAdd={addFn}></C2>)
        const buttonAdd = screen.getByRole('button', {
            name: 'add'
        })
        await user.click(buttonAdd)
        expect(addFn).toBeCalledTimes(1)
    })
})
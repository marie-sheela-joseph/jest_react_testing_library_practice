import App from "../App"
import { screen, render } from '@testing-library/react'

describe('App', () => {
  // on first render check if start is present 
  test('start', () => {
    render(<App />)
    const start = screen.getByRole('heading', { name: /start/i })
    expect(start).toBeInTheDocument()
  })
  // on first render check if end is NOT present
  test('end not rendered', () => {
    render(<App />)
    const end = screen.queryByRole('heading', { name: /end/i })
    expect(end).not.toBeInTheDocument()
  })
  //check if end is present within 2 seconds of first render
  test('end appears', async () => {
    render(<App />)
    const end = await screen.findByRole('heading', { name: /end/i }, { timeout: 2000 })
    expect(end).toBeInTheDocument()
  })
})
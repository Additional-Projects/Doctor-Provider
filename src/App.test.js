import { SearchField } from './components/SearchField'
import { render, screen } from '@testing-library/react'
import App from './App'

test('Renders Doctor Provider App', () => {
  render(<App />)
  const linkElement = screen.getByText(/Doctor Provider/i)
  expect(linkElement).toBeInTheDocument()
})

describe('Renders proper Search Form', () => {
  it('Renders First Name', () => {
    const { getByPlaceholderText } = render(<SearchField />)
    const firstName = getByPlaceholderText('Enter First Name')
    expect(firstName).toBeTruthy()
  })

  it('Renders Last Name', () => {
    const { getByPlaceholderText } = render(<SearchField />)
    const lastName = getByPlaceholderText('Enter Last Name')
    expect(lastName).toBeTruthy()
  })

  it('Renders Specialty', () => {
    const { getByPlaceholderText } = render(<SearchField />)
    const specialty = getByPlaceholderText('Enter Specialty')
    expect(specialty).toBeTruthy()
  })

  it('Renders State', () => {
    const { queryByTitle } = render(<SearchField />)
    const states = queryByTitle('state-list')
    expect(states).toHaveTextContent('Enter State Here')
  })

  it('Testing Button Render', () => {
    const { queryByTitle } = render(<SearchField />)
    const btn = queryByTitle('button')

    expect(btn).toBeTruthy()
  })
})

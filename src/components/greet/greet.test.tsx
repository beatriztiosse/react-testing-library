/**
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />)
    const textElement = screen.getByText(/Hello Guest/)
    expect(textElement).toBeInTheDocument()
  })

  test("renders correctly with name prop", () => {
    render(<Greet name="test" />)
    const textElement = screen.getByText(/Hello test/)
    expect(textElement).toBeInTheDocument()
  })
})

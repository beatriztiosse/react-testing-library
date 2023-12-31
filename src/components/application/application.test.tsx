import { render, screen } from "@testing-library/react"
import { Application } from "./application"

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />)

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    const paragraphElement = screen.getByText("All fields are mandatory")
    expect(paragraphElement).toBeInTheDocument()

    const paragraphSubstringsElement = screen.getByText(/All fields/)
    expect(paragraphSubstringsElement).toBeInTheDocument()

    const paragraphCaseInsensitiveElement = screen.getByText(/all fields/i)
    expect(paragraphCaseInsensitiveElement).toBeInTheDocument()

    const paragraphRegexElement = screen.getByText(/All fields are mandatory/)
    expect(paragraphRegexElement).toBeInTheDocument()

    const paragraphCustomElement = screen.getByText((content) => {
      return content.startsWith("All fields")
    })
    expect(paragraphCustomElement).toBeInTheDocument()

    const closeElement = screen.getByTitle("close")
    expect(closeElement).toBeInTheDocument()

    const imageElement = screen.getByAltText("a person with a laptop")
    expect(imageElement).toBeInTheDocument()

    const customElement = screen.getByTestId("custom-element")
    expect(customElement).toBeInTheDocument()

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    })
    expect(nameElement).toBeInTheDocument()

    const nameLabelElement = screen.getByLabelText("Name", {
      selector: "input",
    })
    expect(nameLabelElement).toBeInTheDocument()

    const namePlaceholderElement = screen.getByPlaceholderText("Fullname")
    expect(namePlaceholderElement).toBeInTheDocument()

    const nameValueElement = screen.getByDisplayValue("Beatriz")
    expect(nameValueElement).toBeInTheDocument()

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole("combobox")
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole("checkbox")
    expect(termsElement).toBeInTheDocument()

    const termsLabelElement = screen.getByLabelText(
      "I agree to the terms and conditions",
    )
    expect(termsLabelElement).toBeInTheDocument()

    const submitElement = screen.getByRole("button")
    expect(submitElement).toBeInTheDocument()
    expect(submitElement).toBeDisabled()
  })
})

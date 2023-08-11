import { render, screen, logRoles } from "@testing-library/react"
import { Skills } from "./skills"

describe("Skills", () => {
  const skills = ["React", "TypeScript", "Jest", "React Testing Library"]

  test("renders correctly", () => {
    render(<Skills skills={skills} />)

    const listElement = screen.getByRole("list")
    expect(listElement).toBeInTheDocument()
  })

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />)

    const listItems = screen.getAllByRole("listitem")
    expect(listItems).toHaveLength(skills.length)
  })

  test("renders login button", () => {
    render(<Skills skills={skills} />)

    const loginButton = screen.getByRole("button", {
      name: "Login",
    })
    expect(loginButton).toBeInTheDocument()
  })

  test("Start Learning button is not rendered", () => {
    render(<Skills skills={skills} />)

    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test("Start Learning button is eventualy displayed", async () => {
    const view = render(<Skills skills={skills} />)
    logRoles(view.container)

    // screen.debug()
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      },
    )
    // screen.debug()
    expect(startLearningButton).toBeInTheDocument()
  })
})

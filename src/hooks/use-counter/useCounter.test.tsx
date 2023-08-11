import { act, renderHook } from "@testing-library/react"
import { useCounter } from "./useCounter"

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })

  test("should accept and render the same initial count", () => {
    const initialCount = 10
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount },
    })
    expect(result.current.count).toBe(initialCount)
  })

  test("should increment the count", () => {
    const { result } = renderHook(useCounter)

    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })

  test("should decrement the count", () => {
    const initialCount = 10
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount },
    })

    act(() => result.current.decrement())
    expect(result.current.count).toBe(initialCount - 1)
  })
})

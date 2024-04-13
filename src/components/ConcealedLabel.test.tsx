import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import ConcealedLabel from "./ConcealedLabel"

describe("<ConcealedLabel />", () => {
  test("should hide value on load", () => {
    render(<ConcealedLabel label="Account" value="1234567890" />)
    expect(screen.getByText("Account")).to.exist
    expect(screen.getByText("*7890")).to.exist
  })

  test("should reavel/conseal value on button toggle", async () => {
    render(<ConcealedLabel label="Account" value="1234567890" />)
    expect(screen.getByText("Account")).to.exist
    expect(screen.getByText("*7890")).to.exist

    await userEvent.click(screen.getByText("Show"))

    expect(screen.getByText("1234567890")).to.exist

    await userEvent.click(screen.getByText("Hide"))

    expect(screen.getByText("*7890")).to.exist
  })
})

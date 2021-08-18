import { render, screen } from "@testing-library/react";
import ErrorMessage from ".";

describe("EmptyPrompt component", () => {
  it("should render message: No results found", () => {
    render(<ErrorMessage />);

    expect(
      screen.getByText("Ooops, something went wrong :( Please try again later")
    ).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import EmptyPrompt from ".";

jest.mock("../../contexts/FilmsContext");

describe("EmptyPrompt component", () => {
  it("should render message: No results found", () => {
    render(<EmptyPrompt />);

    expect(screen.getByText("No results found")).toBeInTheDocument();
  });
});

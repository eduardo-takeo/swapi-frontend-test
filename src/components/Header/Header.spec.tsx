import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header component", () => {
  it("should render logo", () => {
    render(<Header />);

    expect(screen.getByRole("img", { name: "Logo" })).toBeInTheDocument();
  });
});

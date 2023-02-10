import { render, fireEvent } from "@testing-library/react";
import { Button } from "../";

describe("Button component", () => {
  test("renders with the correct title", () => {
    const title = "Submit";
    const { getByText } = render(<Button title={title} />);
    const button = getByText(title);

    expect(button).toBeInTheDocument();
  });

  test("calls the onClick prop when clicked", () => {
    const title = "Submit";
    const onClick = jest.fn();
    const { getByText } = render(<Button title={title} onClick={onClick} />);
    const button = getByText(title);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});

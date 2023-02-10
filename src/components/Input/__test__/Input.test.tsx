import { render, fireEvent } from "@testing-library/react";
import { Input } from "../";

describe("Input component", () => {
  it("should render input with given placeholder and name", () => {
    const placeholder = "Enter your name";
    const name = "name";

    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} name={name} />
    );

    const input = getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
    expect("name").toBe(name);
  });

  it("should update value when input is changed", () => {
    const placeholder = "Enter your name";
    const name = "name";
    const value = "John Doe";

    const onChange = jest.fn();

    const { getByPlaceholderText } = render(
      <Input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    );

    const input = getByPlaceholderText(placeholder);
    fireEvent.change(input, { target: { value: "Jane Doe" } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});

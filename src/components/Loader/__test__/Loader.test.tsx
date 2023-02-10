import { render } from "@testing-library/react";
import { Loader } from "../";

describe("Loader component", () => {
  it("renders the loader component correctly", () => {
    const { getByTestId } = render(<Loader />);
    const loaderContainer = getByTestId("loader-container");
    const svgLoader = getByTestId("svg-loader");

    expect(loaderContainer).toBeInTheDocument();
    expect(svgLoader).toBeInTheDocument();
  });
});

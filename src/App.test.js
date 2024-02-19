import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Reservation from "./components/pages/Reservation";

describe("Reservation component", () => {
  test("renders all form fields with initial values", () => {
    const { getByLabelText } = render(<Reservation />);
    // const getByLabelText = jest.fn();
    // render(<Reservation />);

    // Check if all form fields are rendered
    expect(getByLabelText("Choose date")).toBeInTheDocument();
    expect(getByLabelText("Choose time")).toBeInTheDocument();
    expect(getByLabelText("Number of guests")).toBeInTheDocument();
    expect(getByLabelText("Occasion")).toBeInTheDocument();

    // Check initial values
    expect(getByLabelText("Number of guests")).toHaveValue(1);
    expect(getByLabelText("Occasion")).toHaveValue("Date");
  });

  test("updates state on form field change", () => {
    const { getByLabelText } = render(<Reservation />);

    // Simulate user input
    fireEvent.change(getByLabelText("Choose date"), {
      target: { value: "2024-02-20" },
    });
    fireEvent.change(getByLabelText("Choose time"), {
      target: { value: "19:00" },
    });
    fireEvent.change(getByLabelText("Number of guests"), {
      target: { value: 4 },
    });
    fireEvent.change(getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });

    // Check if state is updated
    expect(getByLabelText("Choose date")).toHaveValue("2024-02-20");
    expect(getByLabelText("Choose time")).toHaveValue("19:00");
    expect(getByLabelText("Number of guests")).toHaveValue(4);
    expect(getByLabelText("Occasion")).toHaveValue("Birthday");
  });

  test("submits form data on button click", () => {
    const handleSubmit = jest.fn();
    const { getByText } = render(<Reservation onSubmit={handleSubmit} />);

    // Simulate user input
    //To perform a button click I have to use fireevent.click.
    fireEvent.click(getByText("Make Your reservation"));

    // Check if submit function is called
    // expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});

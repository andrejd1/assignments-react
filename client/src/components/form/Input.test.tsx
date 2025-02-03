import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Input } from "./Input";

describe("Input Component", () => {
    test("renders input with initial value", () => {
        render(<Input value="test" onValueChange={() => {}} />);
        const inputElement = screen.getByDisplayValue("test");
        expect(inputElement).toBeDefined();
    });

    test("calls onValueChange when input value changes", () => {
        const handleValueChange = jest.fn();
        render(<Input value="" onValueChange={handleValueChange} />);
        const inputElement = screen.getByRole("textbox");
        fireEvent.change(inputElement, { target: { value: "new value" } });
        expect(handleValueChange).toHaveBeenCalledWith("new value");
    });
});

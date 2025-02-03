import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Form } from "./Form";

describe("Form Component", () => {
    test("renders form with initial value", () => {
        render(<Form initialValue="test" onSubmit={() => {}} onCancel={() => {}} />);
        const inputElement = screen.getByDisplayValue("test");
        expect(inputElement).toBeDefined();
    });

    test("calls onSubmit with input value when form is submitted", () => {
        const handleSubmit = jest.fn();
        render(<Form initialValue="test" onSubmit={handleSubmit} onCancel={() => {}} />);
        const inputElement = screen.getByDisplayValue("test");
        fireEvent.change(inputElement, { target: { value: "new value" } });
        fireEvent.submit(screen.getByRole("form"));
        expect(handleSubmit).toHaveBeenCalledWith("new value");
    });

    test("calls onCancel when form is reset", () => {
        const handleCancel = jest.fn();
        render(<Form initialValue="test" onSubmit={() => {}} onCancel={handleCancel} />);
        fireEvent.reset(screen.getByRole("form"));
        expect(handleCancel).toHaveBeenCalled();
    });
});

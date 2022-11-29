import {cleanup, render, screen} from '@testing-library/react'
import { Input } from "@components";

afterEach(() => {
    cleanup();
});

describe("Input Component", () => {
    test("should render LinkButton component with placeholder", () => {
        const mockHandleInputChange = jest.fn();
        render(
            <Input
                type="text"
                name="firstname"
                placeholder="Your firstname"
                onChange={mockHandleInputChange}
            />
        );

        const inputElement = screen.getByTestId("input-field");
        expect(inputElement).toBeInTheDocument();

        const placeholderElement = screen.queryByPlaceholderText("Your firstname");
        expect(placeholderElement).toBeInTheDocument();
    });

    test("should render Input component disabled", () => {
        const mockHandleInputChange = jest.fn();
        render(
            <Input
                type="text"
                name="firstname"
                onChange={mockHandleInputChange}
                disabled
            />
        );

        const inputElement = screen.getByTestId("input-field");
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toBeDisabled();
    });
})

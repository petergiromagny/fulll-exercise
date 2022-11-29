import {cleanup, fireEvent, render, screen} from '@testing-library/react'
import { Checkbox } from "@components";

afterEach(() => {
    cleanup();
});

describe("Checkbox Component", () => {
    test("should render Checkbox component", () => {
        const mockHandleCheckbox = jest.fn();
        render(
            <Checkbox
                name="user"
                onChange={mockHandleCheckbox}
            />
        );

        const checkboxElement = screen.getByTestId("checkbox-field");
        expect(checkboxElement).toBeInTheDocument();
        expect(checkboxElement).not.toBeChecked();

        fireEvent.click(checkboxElement);

        expect(checkboxElement).toBeChecked();
    });

})

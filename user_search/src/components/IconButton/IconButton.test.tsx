import {cleanup, fireEvent, render, screen} from '@testing-library/react'
import {Checkbox, IconButton} from "@components";

afterEach(() => {
    cleanup();
});

describe("Checkbox Component", () => {
    test("should render Checkbox component", () => {
        const mockOnClickButton = jest.fn();
        render(
            <IconButton
                srcIcon="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                altIcon="add user"
                onClick={mockOnClickButton}
            />
        );

        const iconButtonElement = screen.getByTestId("icon-button-container");
        expect(iconButtonElement).toBeInTheDocument();

        const iconButtonImgElement = screen.getByTestId("icon-button-img");
        expect(iconButtonElement).toContainElement(iconButtonImgElement);
        expect(iconButtonImgElement).toHaveAttribute("alt", "add user");
    });

})

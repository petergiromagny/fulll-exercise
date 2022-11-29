import {cleanup, render, screen} from '@testing-library/react'
import {Desktop} from "@layouts";

afterEach(() => {
    cleanup();
});

describe("Desktop Layout", () => {
    test("should render Desktop layout", () => {
        render(
            <Desktop title="Header title">
                <p data-testid="body-content">Body content</p>
            </Desktop>
        );

        const desktopHeaderElement = screen.getByTestId("desktop-header");
        expect(desktopHeaderElement).toBeInTheDocument();

        const desktopHeaderContentElement = screen.getByTestId("desktop-header-content");
        expect(desktopHeaderElement).toContainElement(desktopHeaderContentElement);

        const desktopBodyElement = screen.getByTestId("desktop-body");
        expect(desktopBodyElement).toBeInTheDocument();
        expect(desktopBodyElement).toHaveTextContent("Body content")
    });
});

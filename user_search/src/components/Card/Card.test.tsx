import {cleanup, render, screen} from '@testing-library/react'
import { Card } from "@components";

afterEach(() => {
    cleanup();
});

describe("Card Component", () => {
    test("should render Card component", () => {
        render(
            <Card>
                <p>Card body</p>
            </Card>
        );

        const cardElement = screen.getByTestId("card-container");
        expect(cardElement).toBeInTheDocument();
        expect(cardElement).toHaveTextContent("Card body")
    });
});

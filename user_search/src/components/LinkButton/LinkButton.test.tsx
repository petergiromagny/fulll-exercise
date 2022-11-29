import {cleanup, render, screen} from '@testing-library/react'
import { LinkButton } from "@components";

afterEach(() => {
   cleanup();
});

describe("LinkButton Component", () => {
   test("should render LinkButton component", () => {
      render(<LinkButton label="View profile" />);

      const linkButtonElement = screen.getByTestId("link-button");
      expect(linkButtonElement).toBeInTheDocument();
      expect(linkButtonElement).toHaveTextContent("View profile");
   });
});

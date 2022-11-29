import {cleanup, render, screen} from "@testing-library/react";
import { Avatar } from "@components";

afterEach(() => {
    cleanup();
});

describe("Avatar Component", () => {
    test("should display default image on Avatar", () => {
        render(<Avatar />)
        const avatarElement = screen.getByTestId("avatar-img");
        expect(avatarElement).toHaveAttribute("src", "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png");
    });

    test("should display Avatar with src attributes", () => {
        const srcAvatar = "https://avatars.githubusercontent.com/u/23255920?v=4";
        render(<Avatar src={srcAvatar} />)
        const avatarElement = screen.getByRole("img");
        expect(avatarElement).toHaveAttribute("src", srcAvatar);
    });

    test("should display Avatar with alt attributes", () => {
        const srcAvatar = "https://avatars.githubusercontent.com/u/23255920?v=4";
        render(<Avatar src={srcAvatar} />)
        const avatarElement = screen.getByRole("img");
        expect(avatarElement).toHaveAttribute("alt", "user's avatar");
    });
});

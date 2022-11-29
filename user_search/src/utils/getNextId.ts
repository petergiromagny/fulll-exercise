import type { User } from "@types";

// Get next id from current users list
export const getNextId = (users: User[]) => {
    const usersId: number[] = [];

    for (const user of users) {
        if (user) {
            usersId.push(user.id);
        }
    }

    return Math.max(...usersId) + 1;
}
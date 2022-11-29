import { getNextId } from "@utils";
import users from "@mocks/users.json";

test("should return next id from ids array", () => {
    const nextId = getNextId(users);
    expect(nextId).toBe(47);
})
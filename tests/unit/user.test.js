const { addUser, getUserById } = require("../../src/user");

test("Adds a new user to the users array", () => {
    const newUser = { id: 1, name: "Pedro Victor" };

    addUser(newUser);

    expect(getUserById(1)).toEqual(expect.objectContaining({ ...newUser }));
});

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Registration from "../Pages/Components/SignUp";
import { createUser } from "../../database/repository";
import ProfileInfo from "../Pages/Components/ProfileInfo";
import LogIn from "../Pages/Components/LogIn";

// Test for logging in with a non-existent account
let user;

const mockUserData = [
    {
        email: "bobby1@gmail.com",
        username: "bobby1",
        password: "Bobby1Password!",
    }
];

// beforeAll(() => {
//     user = createUser(mockUserData.email, mockUserData.username, mockUserData.password);
// });

test("Should not be able to log in with non-existing account", async () => {
    render(<LogIn email={mockEntry.email} password={mockEntry.password}/>);
    global.alert = jest.fn();
    expect(global.alert).toHaveBeenCalled();
});
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Registration from "../Pages/Components/SignUp";
import { createUser } from "../../database/repository";
import ProfileInfo from "../Pages/Components/ProfileInfo";

// Test for creating an account with an already used username
let user;

const mockUserData = [
    {
        email: "bobby1@gmail.com",
        username: "bobby1",
        password: "Bobby1Password!",
    }
];

const mockEntry = [
    {
        email: "bobby2@gmail.com",
        username: "bobby1",
        password: "Bobby2Password!",
    }
];

beforeAll(() => {
    user = createUser(mockUserData.email, mockUserData.username, mockUserData.password);
});

test("Should not be able to log in with an already used username", async () => {
    render(<Registration email={mockEntry.email} username={mockEntry.username} password={mockEntry.password}/>);
    global.alert = jest.fn();
    expect(global.alert).toHaveBeenCalledTimes(1);
});
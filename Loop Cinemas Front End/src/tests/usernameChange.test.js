import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Registration from "../Pages/Components/SignUp";
import { createUser } from "../../database/repository";
import ProfileInfo from "../Pages/Components/ProfileInfo";

// Test for changing your username to one thats already in use
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
        email: "bobby1@gmail.com",
        username: "bobbyNumberOne",
        password: "Bobby1Password!",
    }
];

beforeAll(() => {
    user = createUser(mockUserData.email, mockUserData.username, mockUserData.password);
});

test("Should not be able to change username to one in use", async () => {
    render(<Registration email={mockEntry.email} username={mockEntry.username} password={mockEntry.password}/>);
    global.alert = jest.fn();
    expect(global.alert).toHaveBeenCalledTimes(1);
});

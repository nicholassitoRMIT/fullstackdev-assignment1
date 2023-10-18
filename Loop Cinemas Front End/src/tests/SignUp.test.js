import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Registration from "../Pages/Components/SignUp";
import { createUser } from "../../database/repository";
import ProfileInfo from "../Pages/Components/ProfileInfo";

// Test for creating an account with an already used e-mail
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
        username: "bobby1",
        password: "Bobby1Password!",
    }
];

beforeAll(() => {
    user = createUser(mockUserData.email, mockUserData.username, mockUserData.password);
});

test("Account should not be created when identical email is inserted", async () => {
    render(<Registration email={mockEntry.email} username={mockEntry.username} password={mockEntry.password}/>);
    global.alert = jest.fn();
    expect(global.alert).toHaveBeenCalledTimes(1);
});

// Test for creating an account with an already used username
test("Account should not be created when identical username is inserted", async () => {
    render(<Registration email={mockEntry.email} username={mockEntry.username} password={mockEntry.password}/>);
    global.alert = jest.fn();
    expect(global.alert).toHaveBeenCalledTimes(1);
});
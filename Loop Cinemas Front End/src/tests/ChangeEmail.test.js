import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Registration from "../Pages/Components/SignUp";
import { createUser } from "../../database/repository";
import handleChangeEmail from "../Pages/Components/ChangeEmail"; "../Pages/Components/ChangeEmail";

// Test for changing your email to one thats already in use
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

test("Should not be able to change email to one in use", async () => {
    render(<handleChangeEmail email={mockEntry.email}/>);
    global.alert = jest.fn();
    expect(global.alert).toHaveBeenCalledTimes(1);
});
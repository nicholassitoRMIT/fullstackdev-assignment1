import { render, screen, fireEvent } from "@testing-library/react";
import Registration from "../Pages/Components/SignUp";
import axios from 'axios';

// Test for creating an account with an already used e-mail
jest.mock('axios');

const mockUser = [
    {
        email: "bobby1@gmail.com",
        username: "bobby1",
        password: "Bobby1Password!",
    }
];

test("email test", async () => {
    axios.get.mockResolvedValue({ data: mockUser});
    render(<Registration />);

    const mockUserList = await waitFor(() => screen.findAllByTestId("email"))
    expect(mockUserList).toHaveLength(1);
});

// Test for creating an account with an already used username
// Test for logging in with a non-existent account
// Test for changing your email to one thats already in use
// Test for changing your username to one thats already in use
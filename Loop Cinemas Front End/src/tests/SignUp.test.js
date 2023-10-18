import { render, screen, fireEvent } from "@testing-library/react";
import Registration from "../Pages/Components/SignUp";
import { createUser, loginUser } from "../database/repository";
import ProfileInfo from "../Pages/Components/ProfileInfo";

// Test for creating an account with an already used e-mail
const mockUserData = [
    {
        email: "bobby1@gmail.com",
        username: "bobby1",
        password: "Bobby1Password!",
    }
    // },{
    //     email: "bobby1@gmail.com",
    //     username: "bobby1",
    //     password: "Bobby1Password!",
    // }
];

test("Account is not created when identical email is inserted", async () => {
    render(<ProfileInfo email={email} username={username}/>);
    const errorMessage = screen.getByText(/Invalid Account/i);
    expect(errorMessage).toBeInTheDocument();
});

// Test for creating an account with an already used username
// Test for logging in with a non-existent account
// Test for changing your email to one thats already in use
// Test for changing your username to one thats already in use
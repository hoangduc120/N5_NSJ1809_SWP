
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "../login/LoginForm";

describe("LoginForm", () => {
  test("renders the login form", () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  
    const usernameInput = getByLabelText("Tên đăng nhập");
    const passwordInput = getByLabelText("Mật khẩu");
    const submitButton = getByText("Đăng nhập");
    const signupButton = getByText("Đăng ký");
  
    expect(usernameInput.value).toBe("");
    expect(passwordInput.value).toBe("");
    expect(getByText("Login")).toBeInTheDocument();
    expect(getByText("Quên mật khẩu?")).toBeInTheDocument();
    expect(getByText("Đăng nhập")).toBeInTheDocument();
    expect(getByText("Đăng ký")).toBeInTheDocument();
    expect(getByText("Đăng nhập bằng Google")).toBeInTheDocument();
    expect(getByText("Đăng nhập bằng Facebook")).toBeInTheDocument();
  });
  
  test("updates input values on change", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  
    const usernameInput = getByLabelText("Tên đăng nhập");
    const passwordInput = getByLabelText("Mật khẩu");
  
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
  
    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("testpassword");
  });
  
  test("submits the form when the submit button is clicked", () => {
    let submitted = false;
    const handleSubmit = () => {
      submitted = true;
    };
  
    const { getByText } = render(
      <BrowserRouter>
        <LoginForm onSubmit={handleSubmit} />
      </BrowserRouter>
    );
  
    const submitButton = getByText("Đăng nhập");
  
    expect(submitted).toBe(false);
  
    fireEvent.click(submitButton);
  
    expect(submitted).toBe(true);
  });
  
  test("navigates to the registration page when the signup button is clicked", () => {
    let navigatedTo = "";
    const handleNavigation = (path) => {
      navigatedTo = path;
    };
  
    const { getByText } = render(
      <BrowserRouter>
        <LoginForm onNavigate={handleNavigation} />
      </BrowserRouter>
    );
  
    const signupButton = getByText("Đăng ký");
  
    expect(navigatedTo).toBe("");
  
    fireEvent.click(signupButton);
  
    expect(navigatedTo).toBe("/register");
  });
  
  test("displays an error message when the form is submitted without entering a username", () => {
    const { getByText } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  
    const submitButton = getByText("Đăng nhập");
  
    fireEvent.click(submitButton);
  
    expect(getByText("Please enter a username")).toBeInTheDocument();
  });
  
  test("displays an error message when the form is submitted without entering a password", () => {
    const { getByText } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  
    const submitButton = getByText("Đăng nhập");
  
    fireEvent.click(submitButton);
  
    expect(getByText("Please enter a password")).toBeInTheDocument();
  });
  
  test("displays an error message when the form is submitted with an invalid username", () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  
    const usernameInput = getByLabelText("Tên đăng nhập");
    const submitButton = getByText("Đăng nhập");
  
    fireEvent.change(usernameInput, { target: { value: "user!" } });
    fireEvent.click(submitButton);
  
    expect(getByText("Invalid username")).toBeInTheDocument();
  });
  
  test("displays an error message when the form is submitted with an invalid password", () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  
    const passwordInput = getByLabelText("Mật khẩu");
    const submitButton = getByText("Đăng nhập");
  
    fireEvent.change(passwordInput, { target: { value: "pass" } });
    fireEvent.click(submitButton);
  
    expect(getByText("Invalid password")).toBeInTheDocument();
  });
  
  test("displays a success message when the form is submitted with valid credentials", () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  
    const usernameInput = getByLabelText("Tên đăng nhập");
    const passwordInput = getByLabelText("Mật khẩu");
    const submitButton = getByText("Đăng nhập");
  
    fireEvent.change(usernameInput, { target: { value: "validuser" } });
    fireEvent.change(passwordInput, { target: { value: "validpassword" } });
    fireEvent.click(submitButton);
  
    expect(getByText("Login successful")).toBeInTheDocument();
  });
  
  test("navigates to the forgot password page when the 'Quên mật khẩu?' link is clicked", () => {
    let navigatedTo = "";
    const handleNavigation = (path) => {
      navigatedTo = path;
    };
  
    const { getByText } = render(
      <BrowserRouter>
        <LoginForm onNavigate={handleNavigation} />
      </BrowserRouter>
    );
  
    fireEvent.click(getByText("Quên mật khẩu?"));
  
    expect(navigatedTo).toBe("/forgot-password");
  });
});

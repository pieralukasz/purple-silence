import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import { Auth, Analytics } from "aws-amplify";
import { MemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import defaultTheme from "@themes/defaultTheme";

import Paths from "@routing/paths";

import SignUp from "./SignUp";

const setup = (history?: MemoryHistory): void => {
  const innerContent = <SignUp />;

  render(
    <ThemeProvider theme={defaultTheme()}>
      {history ? (
        <Router history={history}>{innerContent}</Router>
      ) : (
        <MemoryRouter>{innerContent}</MemoryRouter>
      )}
    </ThemeProvider>
  );
};

describe("<SignUp />", () => {
  beforeAll(() => {
    Analytics.record = jest.fn();
  });
  it("should call Auth.signUp() function on form submit", async () => {
    Auth.signUp = jest.fn();

    setup();

    const emailInput = await screen.findByPlaceholderText(/Email/i);
    expect(emailInput).toBeInTheDocument();

    const phoneInput = await screen.findByPlaceholderText(/Mobile phone/i);
    expect(phoneInput).toBeInTheDocument();

    const passwordInput = await screen.findByPlaceholderText(/^Password/i);
    expect(passwordInput).toBeInTheDocument();

    const confirmPasswordInput = await screen.findByPlaceholderText(
      /Confirm password/i
    );
    expect(confirmPasswordInput).toBeInTheDocument();

    const signUpButton = await screen.findByText(/Sign Up/i);
    expect(signUpButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@test.com" } });
      fireEvent.change(phoneInput, { target: { value: "+48512051857" } });
      fireEvent.change(passwordInput, { target: { value: "Test123456" } });
      fireEvent.change(confirmPasswordInput, {
        target: { value: "Test123456" },
      });

      fireEvent.click(signUpButton);
    });

    expect(Auth.signUp).toBeCalled();
  });

  it("should handle error form Auth.signUp() UsernameExistsException", async () => {
    Auth.signUp = jest.fn().mockImplementation(() => {
      // eslint-disable-next-line
      throw { code: "UsernameExistsException" };
    });

    const push = jest.fn();

    setup({
      push,
      createHref: jest.fn(),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {},
      listen: jest.fn(),
    });

    const emailInput = await screen.findByPlaceholderText(/Email/i);
    expect(emailInput).toBeInTheDocument();

    const phoneInput = await screen.findByPlaceholderText(/Mobile phone/i);
    expect(phoneInput).toBeInTheDocument();

    const passwordInput = await screen.findByPlaceholderText(/^Password/i);
    expect(passwordInput).toBeInTheDocument();

    const confirmPasswordInput = await screen.findByPlaceholderText(
      /Confirm password/i
    );
    expect(confirmPasswordInput).toBeInTheDocument();

    const signUpButton = await screen.findByText(/Sign Up/i);
    expect(signUpButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@test.com" } });
      fireEvent.change(phoneInput, { target: { value: "+48512051857" } });
      fireEvent.change(passwordInput, { target: { value: "Test123456" } });
      fireEvent.change(confirmPasswordInput, {
        target: { value: "Test123456" },
      });
      fireEvent.click(signUpButton);
    });

    expect(push).toBeCalledWith(Paths.VERIFY_EMAIL_PATH, {
      email: "test@test.com",
    });
  });

  it("should handle different error form Auth.signUp()", async () => {
    Auth.signUp = jest.fn().mockImplementation(() => {
      // eslint-disable-next-line
      throw new Error("OtherCode");
    });

    const push = jest.fn();

    setup({
      push,
      createHref: jest.fn(),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {},
      listen: jest.fn(),
    });

    const emailInput = await screen.findByPlaceholderText(/Email/i);
    expect(emailInput).toBeInTheDocument();

    const phoneInput = await screen.findByPlaceholderText(/Mobile phone/i);
    expect(phoneInput).toBeInTheDocument();

    const passwordInput = await screen.findByPlaceholderText(/^Password/i);
    expect(passwordInput).toBeInTheDocument();

    const confirmPasswordInput = await screen.findByPlaceholderText(
      /Confirm password/i
    );
    expect(confirmPasswordInput).toBeInTheDocument();

    const signUpButton = await screen.findByText(/Sign Up/i);
    expect(signUpButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@test.com" } });
      fireEvent.change(phoneInput, { target: { value: "+48512051857" } });
      fireEvent.change(passwordInput, { target: { value: "Test123456" } });
      fireEvent.change(confirmPasswordInput, {
        target: { value: "Test123456" },
      });

      fireEvent.click(signUpButton);
    });

    expect(Auth.signUp).toHaveBeenCalled();
    expect(Auth.signUp).toThrow("OtherCode");
  });

  it("should not call signup 2nd time while loading", async () => {
    Auth.signUp = jest
      .fn()
      .mockImplementation(
        () => new Promise<void>((res) => setTimeout(() => res(), 5000))
      );

    setup({
      push: jest.fn(),
      createHref: jest.fn(),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {},
      listen: jest.fn(),
    });

    const emailInput = await screen.findByPlaceholderText(/Email/i);
    expect(emailInput).toBeInTheDocument();

    const phoneInput = await screen.findByPlaceholderText(/Mobile phone/i);
    expect(phoneInput).toBeInTheDocument();

    const passwordInput = await screen.findByPlaceholderText(/^Password/i);
    expect(passwordInput).toBeInTheDocument();

    const confirmPasswordInput = await screen.findByPlaceholderText(
      /Confirm password/i
    );
    expect(confirmPasswordInput).toBeInTheDocument();

    const signUpButton = await screen.findByText(/Sign Up/i);
    expect(signUpButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@test.com" } });
      fireEvent.change(phoneInput, { target: { value: "+48512051857" } });
      fireEvent.change(passwordInput, { target: { value: "Test123456" } });
      fireEvent.change(confirmPasswordInput, {
        target: { value: "Test123456" },
      });

      fireEvent.click(signUpButton);
      await new Promise<void>((res) => setTimeout(() => res(), 500));
      fireEvent.click(signUpButton);
    });

    expect(Auth.signUp).toBeCalledTimes(1);
  });
});

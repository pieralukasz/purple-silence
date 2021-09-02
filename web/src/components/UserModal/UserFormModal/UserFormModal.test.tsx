import React from "react";
import UserFormModal from "@components/UserModal";
import { act, render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/styles";
import defaultTheme from "@themes/defaultTheme";

const createUserSpy = jest.fn();
const closeModalSpy = jest.fn();

const successValues = ["test@gmail.com", "+48124466780"];
const failureValues = ["test", "+48124466780"];

const setup = () =>
  render(
    <ThemeProvider theme={defaultTheme()}>
      <UserFormModal open onClose={closeModalSpy} onSubmit={createUserSpy} />
    </ThemeProvider>
  );

const performCheck = async (values: string[]) => {
  setup();

  const email = await screen.findByPlaceholderText(/email/i);
  const phone = await screen.findByPlaceholderText(/Mobile phone placeholder/i);

  const fields = [email, phone];

  const verify = await screen.findByLabelText(/Mark email as verified/i);

  const submit = await screen.findByTestId("create-user-button");

  [...fields, verify, submit].forEach((el) => expect(el).toBeInTheDocument());

  await act(async () => {
    fields.forEach((field, index) =>
      fireEvent.change(field, { target: { value: values[index] } })
    );
    fireEvent.click(verify);

    fireEvent.click(submit);
  });
};

describe("<UserFormModal />", () => {
  afterEach(() => {
    closeModalSpy.mockReset();
    createUserSpy.mockReset();
  });

  it("should be able to close modal", async () => {
    setup();

    const close = await screen.findByTestId("close-modal-button");

    expect(close).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(close);
    });

    expect(closeModalSpy).toHaveBeenCalled();
  });

  it("should be able to submit form", async () => {
    await performCheck(successValues);

    expect(createUserSpy).toHaveBeenCalledWith(
      {
        email: "test@gmail.com",
        phoneNumber: "+48124466780",
        verified: true,
      },
      expect.anything()
    );
  });

  it("should not be able to submit form", async () => {
    await performCheck(failureValues);

    expect(createUserSpy).toHaveBeenCalledTimes(0);
  });
});

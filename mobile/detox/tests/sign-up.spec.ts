import { by, device, expect, element } from "detox";
import { createRandomUser } from "..//page-objects/generate-data";
import { signUpSelectors } from "../page-objects/selectors/sign-up-page";
import { signInSelectors } from "../page-objects/selectors/sign-in-page";
import { verifyEmailSelectors } from "../page-objects/selectors/verify-email-page";

const newUser = createRandomUser();

describe("Sign up page test suite", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("User is able to fill the sign up form", async () => {
    await element(by.id(signInSelectors.goToSignUpPageButton)).tap();
    await element(by.id(signUpSelectors.emailInput)).tap();
    await element(by.id(signUpSelectors.emailInput)).typeText(
      newUser.correctEmail
    );
    await element(by.id(signUpSelectors.phoneInput)).tap();
    await element(by.id(signUpSelectors.phoneInput)).typeText(
      newUser.correctPhone
    );
    await element(by.id(signUpSelectors.passwordInput)).tap();
    await element(by.id(signUpSelectors.passwordInput)).typeText(
      newUser.correctPassword
    );
    await element(by.id(signUpSelectors.confirmPasswordInput)).tap();
    await element(by.id(signUpSelectors.confirmPasswordInput)).typeText(
      newUser.correctPassword
    );
    await element(by.id(signUpSelectors.signUpButton)).tap();
    await expect(
      element(by.id(verifyEmailSelectors.resendEmailButton))
    ).toBeVisible();
  });
});

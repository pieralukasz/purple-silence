import { by, device, expect, element } from "detox";
import { createRandomUser } from "..//page-objects/generate-data";
import { signInSelectors } from "../page-objects/selectors/sign-in-page";

const newUser = createRandomUser();

describe("Sign in page test suite", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("User is able to fill the sign in form", async () => {
    await element(by.id(signInSelectors.emailInput)).tap();
    await element(by.id(signInSelectors.emailInput)).typeText(
      newUser.correctEmail
    );
    await element(by.id(signInSelectors.passwordInput)).tap();
    await element(by.id(signInSelectors.passwordInput)).typeText(
      newUser.correctPassword
    );
    await element(by.id(signInSelectors.signInButton)).tap();
    await expect(element(by.id(signInSelectors.signInButton))).toBeVisible();
  });
});

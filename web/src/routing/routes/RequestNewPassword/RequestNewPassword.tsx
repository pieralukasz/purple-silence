import React, { useCallback } from "react";
import CreateNewPasswordView from "@routing/routes/CreateNewPassword/CreateNewPasswordView";
import CreateNewPasswordState from "@routing/routes/CreateNewPassword/CreateNewPasswordView/CreateaNewPasswordForm/CreateNewPasswordState";
import { Auth } from "aws-amplify";
import { Redirect, useHistory } from "react-router-dom";
import { SignInFormState } from "@routing/routes/SignIn/SignInView/SignInForm";
import removeAllWhitespaces from "@utils/removeAllWhitespaces";
import SignInResult from "@interfaces/SignInResult";
import { useTranslation } from "react-i18next";
import { recordEvent } from "@utils/analytics";
import AnalyticsEventName from "@enums/AnalyticsEventName";
import AnalyticsEventResult from "@enums/AnalyticsEventResult";

const RequestNewPassword: React.FC = () => {
  const {
    location: { state },
  } = useHistory<SignInFormState>();
  const { i18n } = useTranslation();

  const handleSavePassword = useCallback(
    async (form: CreateNewPasswordState) => {
      const { email, password } = state;
      try {
        const user: SignInResult = await Auth.signIn({
          password: password.trim(),
          username: removeAllWhitespaces(email).toLowerCase(),
        });

        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          await Auth.completeNewPassword(user, form.password.trim(), {
            locale: i18n.language,
          });

          recordEvent({
            name: AnalyticsEventName.SignIn,
            result: AnalyticsEventResult.Success,
          });
        }
      } catch (e) {
        recordEvent({
          name: AnalyticsEventName.SignIn,
          result: AnalyticsEventResult.Failure,
        });
      }
    },
    [i18n.language, state]
  );

  if (!state) return <Redirect to="/" />;

  return (
    <CreateNewPasswordView
      onSavePassword={handleSavePassword}
      requestNewPassword
    />
  );
};

export default RequestNewPassword;

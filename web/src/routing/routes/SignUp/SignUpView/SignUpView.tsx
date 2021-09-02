import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import Paths from "@routing/paths";

import AuthLayout from "@layouts/AuthLayout";

import AuthBottomBar from "@components/AuthBottomBar";

import SignUpForm, { SignUpFormState } from "./SignUpForm";

interface Props {
  loading: boolean;
  onSignUp(formData: SignUpFormState): void;
}

const SignUpView: React.FC<Props> = ({ loading, onSignUp }) => {
  const { t } = useTranslation("auth");

  return (
    <AuthLayout>
      <Helmet>
        <title>{t("Create your account")}</title>
      </Helmet>
      <Container maxWidth="xs">
        <Box px={2} boxSizing="border-box">
          <Typography color="textPrimary" gutterBottom variant="h4">
            {t("Create your account")}
          </Typography>
        </Box>
        <SignUpForm loading={loading} onSubmit={onSignUp} />
      </Container>
      <AuthBottomBar
        text="Already have an account?"
        buttonLinkPath={Paths.SIGN_IN_PATH}
        buttonText={t("Sign in")}
        dataTestId="go-to-sign-in-page-button"
      />
    </AuthLayout>
  );
};

export default SignUpView;

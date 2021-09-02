import React from "react";

import { Box, Container, Typography } from "@material-ui/core";

import { Helmet } from "react-helmet";

import { useTranslation } from "react-i18next";

import AuthLayout from "@layouts/AuthLayout";

import CreateNewPasswordForm from "./CreateaNewPasswordForm";
import CreateNewPasswordState from "./CreateaNewPasswordForm/CreateNewPasswordState";

interface Props {
  requestNewPassword?: boolean;
  onSavePassword(formData: CreateNewPasswordState): void;
}

const CreateNewPasswordView: React.FC<Props> = ({
  requestNewPassword,
  onSavePassword,
}) => {
  const { t } = useTranslation("auth");

  return (
    <AuthLayout>
      <Helmet>
        <title>{t("Create new password")}</title>
      </Helmet>
      <Container maxWidth="xs">
        <Box display="flex" flexDirection="column">
          <Box px={2}>
            <Typography variant="h4" gutterBottom paragraph>
              {t("Create new password")}
            </Typography>

            {requestNewPassword && (
              <Typography variant="body1" gutterBottom paragraph>
                {t("After Your first login")}
              </Typography>
            )}

            <Typography variant="body1" gutterBottom paragraph>
              {t("Your password must be")}
            </Typography>
          </Box>
          <CreateNewPasswordForm onSavePassword={onSavePassword} />
        </Box>
      </Container>
    </AuthLayout>
  );
};

export default CreateNewPasswordView;

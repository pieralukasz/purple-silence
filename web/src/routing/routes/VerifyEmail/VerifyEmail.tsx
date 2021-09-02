import React, { useState } from "react";

import { Redirect, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useTranslation } from "react-i18next";

import { Auth } from "aws-amplify";

import { Box, Button, Container, Grid, Typography } from "@material-ui/core";

import AnalyticsEventName from "@enums/AnalyticsEventName";
import AnalyticsEventResult from "@enums/AnalyticsEventResult";

import { recordEvent } from "@utils/analytics";

import Paths from "@routing/paths";

import Link from "@components/Link";
import AuthLayout from "@layouts/AuthLayout";

import useStyle from "./styles";

interface LocationState {
  email?: string;
}

const VerifyEmail: React.FC = () => {
  const { t } = useTranslation("auth");

  const classes = useStyle();
  const { state } = useLocation<LocationState>();

  const [disabled, setDisabled] = useState<boolean>(false);

  async function handleResendEmail() {
    try {
      setDisabled(true);

      await Auth.resendSignUp(state.email!);

      recordEvent({
        name: AnalyticsEventName.ResendSignUp,
        result: AnalyticsEventResult.Success,
      });
    } catch (err) {
      setDisabled(false);

      recordEvent({
        name: AnalyticsEventName.ResendSignUp,
        result: AnalyticsEventResult.Failure,
      });
    }
  }

  if (!state?.email) return <Redirect to="/" />;

  return (
    <AuthLayout>
      <Container maxWidth="xs">
        <Helmet>
          <title>{t("Verify email")}</title>
        </Helmet>
        <Box display="flex" flexDirection="column">
          <Typography variant="h4" gutterBottom>
            {t("Verify your email")}
          </Typography>
          <Typography variant="body1">
            {t(
              "If you have not registered before, we will send you a verification email to the address below."
            )}
          </Typography>

          <Box pt={1.1} pb={1.3} my={1.5}>
            <Typography
              variant="body1"
              color="secondary"
              className={classes.email}>
              {state?.email}
            </Typography>
          </Box>

          <Box pb={1.3}>
            <Typography variant="body1">
              {t("Use sent link to confirm your registration.")}
            </Typography>
          </Box>

          <Box pb={3}>
            <Typography variant="body1">
              {t(
                "If you do not see an email from us, please check your email address and SPAM folder."
              )}
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Button
                data-testid="resend-email-button"
                onClick={handleResendEmail}
                disabled={disabled}
                variant="contained"
                color="primary"
                fullWidth>
                {t("Resend email")}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Link to={Paths.SIGN_IN_PATH}>
                <Button
                  color="secondary"
                  variant="text"
                  data-testid="back-to-sign-in-button"
                  fullWidth>
                  {t("Back to sign in page")}
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </AuthLayout>
  );
};

export default VerifyEmail;

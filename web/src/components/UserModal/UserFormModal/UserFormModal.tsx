import React from "react";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";

import { useTranslation } from "react-i18next";

import CloseIcon from "@material-ui/icons/Close";

import Form from "@components/Form";
import EmailInputField from "@components/EmailInputField";
import PhoneNumberField from "@components/PhoneNumberField";
import { Theme } from "@material-ui/core/styles";

import { yupResolver } from "@hookform/resolvers/yup";
import userFormValidationSchema from "@components/UserModal/UserFormModal/userFormValidationSchema";
import FormCheckbox from "@components/FormCheckbox";
import useStyles from "./styles";

export interface UserFormState {
  email: string;
  phoneNumber: string;
  verified: boolean;
}

const defaultValues: UserFormState = {
  email: "",
  phoneNumber: "",
  verified: false,
};

interface Props {
  open: boolean;
  onClose(): void;
  onSubmit(form: UserFormState): void;
}

const UserFormModal: React.FC<Props> = ({ open, onClose, onSubmit }) => {
  const { t } = useTranslation(["common", "field"]);

  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  const styles = useStyles();

  const methods = useForm<UserFormState>({
    defaultValues,
    resolver: yupResolver(userFormValidationSchema()),
  });

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit: submit,
    setValue,
    getValues,
  } = methods;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={isMobile}
      maxWidth="xs"
      fullWidth>
      <Form onSubmit={submit(onSubmit)}>
        <DialogTitle>
          Create user
          <IconButton
            data-testid="close-modal-button"
            className={styles.close}
            onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <EmailInputField name="email" control={control} />
          <PhoneNumberField
            name="phoneNumber"
            control={control}
            setValue={setValue}
            getValues={getValues}
            error={errors.phoneNumber?.message}
            required
          />
          <FormCheckbox
            name="verified"
            control={control}
            label={t("Mark email as verified")}
            dataTestId="mark-as-verified-checkbox"
          />
        </DialogContent>
        <DialogActions disableSpacing={false}>
          <Box px={2} width="100%" pb={6}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              data-testid="create-user-button"
              disabled={isSubmitting}
              fullWidth>
              {t("Create user")}
            </Button>
          </Box>
        </DialogActions>
      </Form>
    </Dialog>
  );
};

export default UserFormModal;

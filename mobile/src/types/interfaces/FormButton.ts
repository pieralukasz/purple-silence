interface FormButton {
  disabled?: boolean;
  onSubmit: () => void;
  text?: string;
  dataTestId: string;
}

export default FormButton;

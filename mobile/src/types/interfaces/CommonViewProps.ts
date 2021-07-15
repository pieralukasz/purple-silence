interface CommonViewProps<Values> {
  onSubmit: (defaultValues: Values) => void;
  loading: boolean;
}

export default CommonViewProps;

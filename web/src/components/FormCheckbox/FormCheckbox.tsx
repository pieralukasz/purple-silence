import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  dataTestId: string;
}

const FormCheckbox = <T extends FieldValues>({
  name,
  control,
  label,
  dataTestId,
}: Props<T>): JSX.Element => (
  <FormControlLabel
    label={label}
    color="secondary"
    control={
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Checkbox
            {...field}
            checked={field.value}
            data-testid={dataTestId}
            onChange={(e) => field.onChange(e.target.checked)}
          />
        )}
      />
    }
  />
);

export default FormCheckbox;

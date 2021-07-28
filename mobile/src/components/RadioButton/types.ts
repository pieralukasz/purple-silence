import { TextStyle, ViewStyle } from "react-native";

export type RadioButtonProps = {
  borderColor?: string;
  color?: string;
  containerStyle?: ViewStyle;
  dataTestId: string;
  disabled?: boolean;
  id: string;
  label?: string;
  labelStyle?: ViewStyle | TextStyle;
  layout?: "row" | "column";
  onPress?: (id: string) => void;
  selected?: boolean;
  size?: number;
  value: string;
};

export type RadioGroupProps = {
  containerStyle?: ViewStyle;
  layout?: "row" | "column";
  onPress?: (radioButtons: RadioButtonProps[]) => void;
  radioButtons: RadioButtonProps[];
};

export enum RadioButtonOpacity {
  ACTIVE = 1,
  DISABLED = 0.2,
}

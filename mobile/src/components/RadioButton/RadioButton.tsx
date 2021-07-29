import React from "react";
import { PixelRatio, Pressable, View, ViewStyle } from "react-native";
import { Text } from "react-native-paper";
import theme from "@themes/defaultTheme";

import attachAccessibilityID from "@utils/attachAccessibilityID";

import { RadioButtonOpacity, RadioButtonProps } from "./types";
import styles from "./styles";

const RadioButton: React.FC<RadioButtonProps> = ({
  borderColor,
  color = theme.colors.primary,
  containerStyle,
  dataTestId,
  disabled = false,
  id,
  label,
  labelStyle,
  layout = "row",
  onPress,
  selected = false,
  size = 24,
}) => {
  const borderWidth = PixelRatio.roundToNearestPixel(size * 0.1);
  const sizeHalf = PixelRatio.roundToNearestPixel(size * 0.5);
  const sizeFull = PixelRatio.roundToNearestPixel(size);

  let orientation: ViewStyle = { flexDirection: "row" };
  let margin: ViewStyle = { marginLeft: 10 };

  if (layout === "column") {
    orientation = { alignItems: "center" };
    margin = { marginTop: 10 };
  }

  // eslint-disable-next-line consistent-return
  const handlePress = (): null | undefined => {
    if (onPress) {
      onPress(id);
    }
    if (disabled) {
      return null;
    }
  };

  return (
    <Pressable
      {...attachAccessibilityID(dataTestId)}
      onPress={handlePress}
      style={[
        styles.container,
        orientation,
        {
          opacity: disabled
            ? RadioButtonOpacity.DISABLED
            : RadioButtonOpacity.ACTIVE,
        },
        containerStyle,
      ]}>
      <View
        style={[
          styles.border,
          {
            borderColor: borderColor || color,
            borderWidth,
            width: sizeFull,
            height: sizeFull,
            borderRadius: sizeHalf,
          },
        ]}>
        {selected && (
          <View
            style={{
              backgroundColor: color,
              width: sizeHalf,
              height: sizeHalf,
              borderRadius: sizeHalf,
            }}
          />
        )}
      </View>
      {Boolean(label) && <Text style={[margin, labelStyle]}>{label}</Text>}
    </Pressable>
  );
};

export default RadioButton;

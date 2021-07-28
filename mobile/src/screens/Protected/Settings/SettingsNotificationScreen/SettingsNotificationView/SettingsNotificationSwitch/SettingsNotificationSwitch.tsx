import React from "react";
import { Switch, Text } from "react-native-paper";
import { View } from "react-native";
import theme from "@themes/defaultTheme";

import attachAccessibilityID from "@utils/attachAccessibilityID";

import styles from "./styles";

interface Props {
  label: string;
  dataTestId: string;
}

const SettingsNotificationSwitch: React.FC<Props> = ({ label, dataTestId }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        {...attachAccessibilityID(dataTestId)}
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        color={theme.colors.primary}
      />
    </View>
  );
};

export default SettingsNotificationSwitch;

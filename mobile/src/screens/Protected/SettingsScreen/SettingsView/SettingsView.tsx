import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import ScreenLayout from "@layouts/ScreenLayout";

import attachAccessibilityID from "@utils/attachAccessibilityID";

interface SettingsViewProps {
  onSignOut: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ onSignOut }) => {
  return (
    <ScreenLayout title="Settings">
      <View>
        <Button
          {...attachAccessibilityID("sign-out-button")}
          mode="outlined"
          onPress={onSignOut}>
          Sign Out
        </Button>
      </View>
    </ScreenLayout>
  );
};

export default SettingsView;

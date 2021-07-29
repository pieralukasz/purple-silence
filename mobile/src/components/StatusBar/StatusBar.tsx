import React from "react";
import { Platform, StatusBar as NativeStatusBar } from "react-native";
import { useTheme } from "react-native-paper";

const StatusBar: React.FC = () => {
  const theme = useTheme();

  return (
    <NativeStatusBar
      barStyle={Platform.select({
        android: "dark-content",
        ios: theme.dark ? "light-content" : "dark-content",
      })}
    />
  );
};

export default StatusBar;

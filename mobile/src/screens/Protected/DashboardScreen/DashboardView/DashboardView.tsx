import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import defaultTheme from "@themes/defaultTheme";

import ScreenLayout from "@layouts/ScreenLayout";

const DashboardView: React.FC = () => {
  const { top } = useSafeAreaInsets();

  return (
    <ScreenLayout
      viewStyles={{ paddingTop: top + defaultTheme.spacing.emptyHeader }}
      title="Index Page">
      <View />
    </ScreenLayout>
  );
};

export default DashboardView;

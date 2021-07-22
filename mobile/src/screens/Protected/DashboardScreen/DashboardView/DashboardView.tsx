import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import { Auth } from "aws-amplify";

import ScreenLayout from "@layouts/ScreenLayout";

import attachAccessibilityID from "@utils/attachAccessibilityID";

import styles from "./styles";

const DashboardView: React.FC = () => {
  return (
    <ScreenLayout title="Index Page">
      <View />
    </ScreenLayout>
  );
};

export default DashboardView;

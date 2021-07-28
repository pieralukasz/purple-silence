import React from "react";
import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";
import { useTranslation } from "react-i18next";

import { NAMESPACE_SETTINGS } from "@consts/namespaces";

import SettingsNotificationSwitch from "./SettingsNotificationSwitch";

import styles from "./styles";

const SettingsNotificationView: React.FC = () => {
  const { t } = useTranslation(NAMESPACE_SETTINGS);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{t("Enable / disable notifications")}</Text>
      <View style={styles.switches}>
        <SettingsNotificationSwitch
          dataTestId="settings-switch-push-notifications"
          label={t("Push notifications")}
        />
        <SettingsNotificationSwitch
          dataTestId="settings-switch-in-app-notifications"
          label={t("In App notifications")}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsNotificationView;

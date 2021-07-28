import React, { useCallback, useContext } from "react";
import { I18nManager } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import RNRestart from "react-native-restart";

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Auth } from "aws-amplify";

import { PreferencesContext } from "@features/Preferences/PreferencesContext";

import { SettingsRoute } from "@screens/Protected/routes";

import { LANGUAGE, THEME } from "@consts/storage";

import { SettingsNotificationRoute } from "@screens/Protected/Settings/routes";
import { SettingsNavigatorParams } from "@screens/Protected/Settings/SettingsNavigatorParams";

import SettingsMainView from "./SettingsMainView";

type SettingsNavigationProp = StackNavigationProp<
  SettingsNavigatorParams,
  typeof SettingsRoute
>;

type SettingsRouteProp = RouteProp<
  SettingsNavigatorParams,
  typeof SettingsRoute
>;

interface SettingsProps {
  navigation: SettingsNavigationProp;
  route: SettingsRouteProp;
}

const SettingsMainScreen: React.FC<SettingsProps> = ({ navigation }) => {
  const { toggleTheme, isThemeDark } = useContext(PreferencesContext);

  const signOut = useCallback(async () => {
    await Auth.signOut();
  }, []);

  const changeLanguage = useCallback(async (language: string) => {
    await AsyncStorage.setItem(LANGUAGE, language);
    I18nManager.forceRTL(language === "ar");
    RNRestart.Restart();
  }, []);

  const changeTheme = useCallback(
    async (theme: string) => {
      toggleTheme();
      await AsyncStorage.setItem(THEME, theme);
    },
    [toggleTheme]
  );

  const changeNotification = useCallback(() => {
    navigation.navigate(SettingsNotificationRoute);
  }, [navigation]);

  return (
    <SettingsMainView
      onSignOut={signOut}
      onChangeLanguage={changeLanguage}
      onChangeTheme={changeTheme}
      onChangeNotification={changeNotification}
      isThemeDark={isThemeDark}
    />
  );
};

export default SettingsMainScreen;

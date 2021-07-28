import React, { useEffect } from "react";
import { Platform, StatusBar } from "react-native";

import i18n from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";

import Providers from "@features/Providers";
import MainNavigator from "@screens/MainNavigator";
import theme from "@themes/defaultTheme";

import { LANGUAGE } from "@consts/storage";

import { rootNavigationRef } from "./RootNavigation";

const App: React.FC = () => {
  useEffect(() => {
    (async () => {
      const language = await AsyncStorage.getItem(LANGUAGE);
      if (language) {
        i18n.changeLanguage(language);
      } else {
        i18n.changeLanguage("en");
      }
    })();
  }, []);

  return (
    <>
      <StatusBar
        barStyle={Platform.select({
          android: "light-content",
          ios: "dark-content",
        })}
        backgroundColor={theme.colors.primary}
      />
      <Providers>
        <NavigationContainer ref={rootNavigationRef}>
          <MainNavigator />
        </NavigationContainer>
      </Providers>
    </>
  );
};

export default App;

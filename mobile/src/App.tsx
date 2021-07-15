import React from "react";

import { Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Providers from "@features/Providers";
import MainNavigator from "@screens/MainNavigator";
import theme from "@themes/defaultTheme";

import { rootNavigationRef } from "./RootNavigation";

const App: React.FC = () => {
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

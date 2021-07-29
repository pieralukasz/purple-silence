import React, { useEffect, useState, useCallback, useMemo } from "react";

import { Provider as PaperProvider } from "react-native-paper";
import { ApolloProvider } from "@apollo/client";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";

import defaultTheme from "@themes/defaultTheme";
import darkTheme from "@themes/darkTheme";
import { Theme } from "@enums/Theme";

import { THEME } from "@consts/storage";

import UserProvider from "@features/User/UserProvider";
import useApolloClient from "../../apollo/useApolloClient";
import { PreferencesContext } from "../Preferences/PreferencesContext";

import { rootNavigationRef } from "../../RootNavigation";

const Providers: React.FC = ({ children }) => {
  const client = useApolloClient();

  const [isThemeDark, setIsThemeDark] = useState(false);

  const theme = isThemeDark ? darkTheme : defaultTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  useEffect(() => {
    (async () => {
      const activeTheme = await AsyncStorage.getItem(THEME);
      setIsThemeDark(activeTheme === Theme.DARK);
    })();
  }, []);

  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <PreferencesContext.Provider value={preferences}>
          <PaperProvider theme={theme}>
            <SafeAreaProvider>
              <NavigationContainer ref={rootNavigationRef} theme={theme}>
                {children}
              </NavigationContainer>
            </SafeAreaProvider>
          </PaperProvider>
        </PreferencesContext.Provider>
      </UserProvider>
    </ApolloProvider>
  );
};

export default Providers;

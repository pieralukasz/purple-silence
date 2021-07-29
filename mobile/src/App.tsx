import React, { useEffect } from "react";

import i18n from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import StatusBar from "@components/StatusBar";

import Providers from "@features/Providers";
import MainNavigator from "@screens/MainNavigator";

import { LANGUAGE } from "@consts/storage";
import { Language } from "@enums/Language";

const App: React.FC = () => {
  useEffect(() => {
    (async () => {
      const language = await AsyncStorage.getItem(LANGUAGE);
      if (language) {
        await i18n.changeLanguage(language);
      } else {
        await i18n.changeLanguage(Language.ENGLISH);
      }
    })();
  }, []);

  return (
    <Providers>
      <StatusBar />
      <MainNavigator />
    </Providers>
  );
};

export default App;

import i18n from "i18next";
import Locize from "i18next-locize-backend";
import { initReactI18next } from "react-i18next";

import namespaces, { NAMESPACE_COMMON } from "@consts/namespaces";

import {
  REACT_APP_PURPLE_SILENCE_LOCIZE_API_KEY,
  REACT_APP_PURPLE_SILENCE_LOCIZE_PROJECT_ID,
} from "@env";

const backendOptions = {
  apiKey: REACT_APP_PURPLE_SILENCE_LOCIZE_API_KEY,
  projectId: REACT_APP_PURPLE_SILENCE_LOCIZE_PROJECT_ID,
  referenceLng: "en",
  private: false,
  allowedAddOrUpdateHosts: ["localhost"],
};

console.log(backendOptions);

i18n
  .use(Locize)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    backend: backendOptions,
    ns: namespaces,
    defaultNS: NAMESPACE_COMMON,
    keySeparator: false, // we do not use keys in form messages.welcome
    debug: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    saveMissing: true,
    react: {
      useSuspense: false,
    },
  });

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import namespaces, { NAMESPACE_COMMON } from "@consts/namespaces";
import resources from "@i18n/resources";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources,
  ns: namespaces,
  defaultNS: NAMESPACE_COMMON,
  keySeparator: false, // we do not use keys in form messages.welcome
  debug: false,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;

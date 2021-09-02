import React, { useMemo } from "react";
import { View } from "react-native";

import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import themes from "@consts/themes";
import languages from "@consts/languages";
import { NAMESPACE_SETTINGS } from "@consts/namespaces";

import Selector from "@components/Selector";
import DialogSelector from "@components/Selector/DialogSelector";

import ScreenLayout from "@layouts/ScreenLayout";

import defaultTheme from "@themes/defaultTheme";

import kebabcase from "@utils/kebabcase";
import { Theme } from "@enums/Theme";

interface SettingsViewProps {
  onChangeLanguage: (language: string) => void;
  onChangeNotification: () => void;
  onChangeTheme: (theme: string) => void;
  onSignOut: () => void;
  isThemeDark: boolean;
}

const SettingsMainView: React.FC<SettingsViewProps> = ({
  onChangeLanguage,
  onChangeNotification,
  onChangeTheme,
  onSignOut,
  isThemeDark,
}) => {
  const { top } = useSafeAreaInsets();
  const { t } = useTranslation(NAMESPACE_SETTINGS);

  const languageRadioButtons = useMemo(() => {
    return languages.map(({ key, label }) => {
      return {
        id: `radio-button-${kebabcase(label)}`,
        label,
        selected: key === i18n.language,
        value: key,
        dataTestId: `radio-button-${kebabcase(label)}`,
      };
    });
  }, []);

  const themeRadioButtons = useMemo(() => {
    return themes.map(({ key, label }) => {
      return {
        id: `radio-button-${kebabcase(label)}`,
        label,
        selected: key === (isThemeDark ? Theme.DARK : Theme.LIGHT),
        value: key,
        dataTestId: `radio-button-${kebabcase(label)}`,
      };
    });
  }, [isThemeDark]);

  const activeLanguageLabel = useMemo(() => {
    return languages.find((language) => language.key === i18n.language)?.label;
  }, []);

  const activeThemeLabel = useMemo(() => {
    return themes.find(
      (theme) => theme.key === (isThemeDark ? Theme.DARK : Theme.LIGHT)
    )?.label;
  }, [isThemeDark]);

  return (
    <ScreenLayout
      viewStyles={{ paddingTop: top + defaultTheme.spacing.emptyHeader }}
      title={t("Settings")}
      scrollEnabled>
      <View>
        <DialogSelector
          dataTestId="settings-selector-choose-language"
          dialogTitle={t("Choose language")}
          reference={t("Choose language")}
          title={t("Language")}
          value={activeLanguageLabel}
          radioButtons={languageRadioButtons}
          onChange={onChangeLanguage}
        />
        <Selector
          dataTestId="settings-selector-notifications"
          onPress={onChangeNotification}
          reference={t("Notifications")}
          title={t("Notifications settings")}
        />
        <DialogSelector
          dataTestId="settings-selector-choose-theming"
          dialogTitle={t("Choose theming")}
          reference={t("Choose theming")}
          title={t("Theming")}
          value={activeThemeLabel}
          radioButtons={themeRadioButtons}
          onChange={(pickedTheme) => onChangeTheme(pickedTheme)}
        />
        <Selector
          dataTestId="settings-selector-sign-out"
          onPress={onSignOut}
          reference={t("Login/Logout")}
          title={t("Logout")}
        />
      </View>
    </ScreenLayout>
  );
};

export default SettingsMainView;

import { DarkTheme as PaperDarkTheme } from "react-native-paper";
import { DarkTheme as NavigationDarkTheme } from "@react-navigation/native";
import merge from "deepmerge";

const theme = {
  ...PaperDarkTheme,
  dark: true,
  colors: {
    ...PaperDarkTheme.colors,
    error: "#d90027",
    primary: "#3F51B5",
  },
  customColors: {
    black: "rgba(0,0,0,0.91)",
    gray: "#272727",
    lightGray: "#636363",
    white: "#ffffff",
  },
  spacing: {
    default: 16,
    emptyHeader: 48,
  },
  typography: {
    fontSize: 16,
  },
};

export default merge(NavigationDarkTheme, theme);

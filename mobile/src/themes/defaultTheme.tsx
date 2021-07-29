import { DefaultTheme as PaperDefaultTheme } from "react-native-paper";
import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import merge from "deepmerge";

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      error: string;
      primary: string;
    }
    interface ThemeSpacing {
      spacing: {
        default: number;
        emptyHeader: number;
      };
    }
    interface ThemeTypography {
      fontSize: number;
    }
    interface Theme {
      customColors: {
        black: string;
        gray: string;
        lightGray: string;
        white: string;
      };
      colors: ThemeColors;
      typography: ThemeTypography;
    }
  }
}

const theme = {
  ...PaperDefaultTheme,
  dark: false,
  colors: {
    ...PaperDefaultTheme.colors,
    error: "#d90027",
    primary: "#3F51B5",
  },
  customColors: {
    black: "#19000e",
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

export default merge(NavigationDefaultTheme, theme);

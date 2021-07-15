import { DefaultTheme } from "react-native-paper";

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      error: string;
      primary: string;
    }
    interface ThemeSpacing {
      spacing: {
        default: number;
      };
    }
    interface Theme {
      customColors: {
        black: string;
        white: string;
      };
      colors: ThemeColors;
    }
  }
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    error: "#d90027",
    primary: "#3F51B5",
  },
  customColors: {
    black: "#19000e",
    white: "#ffffff",
  },
  spacing: {
    default: 16,
  },
};

export default theme;

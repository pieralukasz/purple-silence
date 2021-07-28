import { StyleSheet } from "react-native";
import theme from "@themes/defaultTheme";

const styles = StyleSheet.create({
  languageText: {
    fontSize: 16,
    marginTop: theme.spacing.default,
  },
  signOutText: {
    fontSize: 16,
    marginTop: theme.spacing.default * 2,
  },
  button: {
    marginTop: 20,
  },
});

export default styles;

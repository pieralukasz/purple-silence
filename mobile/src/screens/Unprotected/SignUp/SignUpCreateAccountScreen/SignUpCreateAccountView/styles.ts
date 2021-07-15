import { StyleSheet } from "react-native";
import theme from "@themes/defaultTheme";

const styles = StyleSheet.create({
  signIn: {
    marginTop: 44,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  signInText: {
    fontSize: 16,
    marginRight: theme.spacing.default,
  },
});

export default styles;

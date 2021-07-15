import { StyleSheet } from "react-native";
import theme from "@themes/defaultTheme";

const styles = StyleSheet.create({
  forgotPassword: {
    flexDirection: "row-reverse",
  },
  signUp: {
    marginTop: 44,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  signUpText: {
    fontSize: 16,
    marginRight: theme.spacing.default,
  },
});

export default styles;

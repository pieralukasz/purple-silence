import { StyleSheet } from "react-native";
import theme from "@themes/defaultTheme";

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingBottom: theme.spacing.default,
  },
  textInfo: {
    fontSize: 16,
  },
  textPhoneNumber: {
    color: theme.colors.primary,
    paddingVertical: theme.spacing.default,
    fontWeight: "bold",
  },
  resendButton: {
    marginTop: theme.spacing.default,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import theme from "@themes/defaultTheme";

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.default,
    paddingHorizontal: theme.spacing.default,
  },
  title: {
    color: theme.colors.primary,
    fontWeight: "500",
  },
  switches: {
    marginTop: theme.spacing.default,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import theme from "@themes/defaultTheme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: theme.spacing.default,
  },
  title: {
    color: theme.colors.primary,
  },
  label: {
    fontSize: 14,
  },
});

export default styles;

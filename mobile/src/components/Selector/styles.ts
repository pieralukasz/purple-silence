import { StyleSheet } from "react-native";
import theme from "@themes/defaultTheme";

const styles = StyleSheet.create({
  selector: {
    width: "100%",
    flex: 1,
    paddingTop: theme.spacing.default * 1.5,
  },
  title: {
    color: theme.colors.primary,
    fontWeight: "500",
  },
  text: {
    marginTop: theme.spacing.default * 1.5,
    fontSize: 16,
  },
  value: {
    marginTop: 4,
  },
  divider: {
    marginTop: theme.spacing.default * 1.5,
  },
});

export default styles;

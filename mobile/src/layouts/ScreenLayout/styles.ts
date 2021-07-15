import { StyleSheet } from "react-native";
import theme from "@themes/defaultTheme";

const styles = StyleSheet.create({
  title: {
    marginVertical: 32,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.placeholder,
    marginBottom: 16,
  },
  view: {
    paddingHorizontal: 20,
  },
});

export default styles;

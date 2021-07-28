import { Platform, StyleSheet } from "react-native";
import theme from "@themes/defaultTheme";

const getScreenSpace =
  Platform.OS === "ios" ? { marginHorizontal: 20 } : { paddingHorizontal: 20 };

const styles = StyleSheet.create({
  title: {
    marginVertical: 32,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.placeholder,
    marginBottom: 16,
  },
  view: { ...getScreenSpace },
});

export default styles;

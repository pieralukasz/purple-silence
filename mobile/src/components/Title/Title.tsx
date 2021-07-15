import React from "react";

import { Text } from "react-native-paper";
import { TextStyle } from "react-native";

import styles from "./styles";

interface TitleProps {
  titleStyles?: TextStyle;
}

const Title: React.FC<TitleProps> = ({ titleStyles, children }) => {
  return <Text style={{ ...styles.title, ...titleStyles }}>{children}</Text>;
};

export default Title;

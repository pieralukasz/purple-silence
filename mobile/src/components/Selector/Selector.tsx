import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, Divider } from "react-native-paper";

import attachAccessibilityID from "@utils/attachAccessibilityID";

import styles from "./styles";

export interface SelectorProps {
  onPress: () => void;
  reference: string;
  title: string;
  value?: string;
  dataTestId: string;
}

const Selector: React.FC<SelectorProps> = ({
  onPress,
  reference,
  title,
  value,
  dataTestId,
}) => {
  return (
    <TouchableOpacity
      {...attachAccessibilityID(dataTestId)}
      style={styles.selector}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{reference}</Text>
      {value && <Text style={styles.value}>{value}</Text>}
      <Divider style={styles.divider} />
    </TouchableOpacity>
  );
};

export default Selector;

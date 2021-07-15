import React from "react";
import { View, ViewStyle } from "react-native";

import { ActivityIndicator, useTheme } from "react-native-paper";

import styles from "./styles";

interface FullScreenPreloaderProps {
  visible: boolean;
  loaderStyles?: ViewStyle;
}

const FullScreenPreloader: React.FC<FullScreenPreloaderProps> = ({
  visible,
  loaderStyles,
}) => {
  const { colors } = useTheme();

  return (
    <>
      {visible && (
        <View
          style={{
            ...styles.mainContainer,
            ...loaderStyles,
          }}>
          <ActivityIndicator size="large" animating color={colors.primary} />
        </View>
      )}
    </>
  );
};

export default FullScreenPreloader;

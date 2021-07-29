import React, { memo, useCallback } from "react";
import { View } from "react-native";
import { IconButton, useTheme } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ArrowLeft from "@assets/icons/ArrowLeftIcon.svg";
import attachAccessibilityID from "@utils/attachAccessibilityID";

import styles from "./styles";

const Header: React.FC = () => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  const theme = useTheme();

  const backButtonPress = useCallback(() => {
    if (!navigation) {
      return;
    }
    navigation.goBack();
  }, [navigation]);

  return (
    <View
      style={{
        paddingTop: top,
        ...styles.header,
      }}>
      <View style={styles.headerInner}>
        {navigation.canGoBack() ? (
          <IconButton
            {...attachAccessibilityID("back-button")}
            onPress={backButtonPress}
            icon={() => (
              <ArrowLeft
                fill={
                  theme.dark
                    ? theme.customColors.white
                    : theme.customColors.black
                }
              />
            )}
          />
        ) : (
          <View style={styles.headerEmpty} />
        )}
      </View>
    </View>
  );
};

export default memo(Header);

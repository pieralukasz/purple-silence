import React, { useCallback, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextStyle,
  ViewStyle,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import { Text } from "react-native-paper";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import FullScreenPreloader from "@components/FullScreenPreloader/FullScreenPreloader";
import Title from "@components/Title";

import useKeyboardStatus from "@hooks/useKeyboardStatus";

import styles from "./styles";

interface ScreenLayoutProps {
  title?: string;
  titleStyles?: TextStyle;
  subtitle?: string;
  subtitleStyles?: TextStyle;
  viewStyles?: ViewStyle;
  loading?: boolean;
  scrollEnabled?: boolean;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  title,
  titleStyles,
  subtitle,
  subtitleStyles,
  viewStyles,
  loading = false,
  scrollEnabled = false,
}) => {
  const isKeyboardOpen = useKeyboardStatus();

  const { bottom, left, right } = useSafeAreaInsets();

  const [isScroll, setIsScroll] = useState<boolean>(false);

  const checkIfContentIsLessThanWindowHeight = useCallback(
    (width: number, height: number) => {
      if (height > Dimensions.get("window").height) {
        setIsScroll(true);
      }
    },
    []
  );

  return (
    <>
      {loading && <FullScreenPreloader visible={loading} />}
      <Pressable onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={{
            paddingBottom: bottom + (isScroll ? 20 : 0),
            paddingLeft: left,
            paddingRight: right,
          }}>
          <KeyboardAvoidingView
            {...(Platform.OS === "ios"
              ? {
                  behavior: "padding",
                  keyboardVerticalOffset: 0,
                }
              : {})}>
            <ScrollView
              onContentSizeChange={checkIfContentIsLessThanWindowHeight}
              scrollEnabled={scrollEnabled || isKeyboardOpen || isScroll}
              keyboardShouldPersistTaps="handled"
              style={{
                ...styles.view,
                ...viewStyles,
              }}>
              {title && (
                <Title titleStyles={{ ...styles.title, ...titleStyles }}>
                  {title}
                </Title>
              )}
              {subtitle && (
                <Text style={{ ...styles.subtitle, ...subtitleStyles }}>
                  {subtitle}
                </Text>
              )}
              {children}
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </Pressable>
    </>
  );
};

export default ScreenLayout;

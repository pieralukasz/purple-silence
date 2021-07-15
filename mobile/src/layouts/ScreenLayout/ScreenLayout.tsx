import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextStyle,
  ViewStyle,
  View,
  Pressable,
} from "react-native";
import { Text } from "react-native-paper";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import styles from "@layouts/ScreenLayout/styles";
import FullScreenPreloader from "@components/FullScreenPreloader/FullScreenPreloader";
import useKeyboardStatus from "@hooks/useKeyboardStatus";
import Title from "@components/Title";

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

  return (
    <>
      {loading && <FullScreenPreloader visible={loading} />}
      <Pressable onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={{
            paddingBottom: bottom,
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
              scrollEnabled={scrollEnabled || isKeyboardOpen}
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

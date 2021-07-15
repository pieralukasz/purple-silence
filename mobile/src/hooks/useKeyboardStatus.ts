import { useState, useRef, useEffect } from "react";
import { EmitterSubscription, Keyboard, Platform } from "react-native";

/**
 * Returns if the keyboard is open / closed
 *
 * @return {bool} isKeyboardOpen
 */
const useKeyboardStatus = (): boolean => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const keyboardShowListener = useRef<null | EmitterSubscription>(null);
  const keyboardHideListener = useRef<null | EmitterSubscription>(null);

  useEffect(() => {
    keyboardShowListener.current = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      () => setIsKeyboardOpen(true)
    );
    keyboardHideListener.current = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => setIsKeyboardOpen(false)
    );

    return () => {
      if (keyboardShowListener.current && keyboardHideListener.current) {
        keyboardShowListener.current.remove();
        keyboardHideListener.current.remove();
      }
    };
  });

  return isKeyboardOpen;
};

export default useKeyboardStatus;

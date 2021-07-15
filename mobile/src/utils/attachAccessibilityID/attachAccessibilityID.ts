import { Platform } from "react-native";

type AttachAccessibilityIDType = Partial<{
  testID: string;
  accessibilityLabel: string;
  accessible: boolean;
}>;

const attachAccessibilityID = (id: string): AttachAccessibilityIDType => {
  return Platform.OS === "ios"
    ? { testID: id }
    : { accessibilityLabel: id, accessible: true };
};

export default attachAccessibilityID;

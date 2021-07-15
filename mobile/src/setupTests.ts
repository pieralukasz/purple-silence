import "react-native-gesture-handler/jestSetup";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mockNetInfo from "@react-native-community/netinfo/jest/netinfo-mock";

jest.mock("react-native-reanimated", () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

jest.mock("@react-native-community/netinfo", () => mockNetInfo);

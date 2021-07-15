import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

const useResetNavigation = (): ((route: string) => void) => {
  const navigation = useNavigation();

  return useCallback(
    (route: string) => {
      navigation.reset({
        ...navigation,
        routes: [
          {
            name: route,
          },
        ],
      });
    },
    [navigation]
  );
};

export default useResetNavigation;

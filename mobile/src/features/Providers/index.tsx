import React from "react";

import { Provider as PaperProvider } from "react-native-paper";
import { ApolloProvider } from "@apollo/client";
import { SafeAreaProvider } from "react-native-safe-area-context";

import theme from "@themes/defaultTheme";
import UserProvider from "@features/User/UserProvider";
import useApolloClient from "../../apollo/useApolloClient";

const Providers: React.FC = ({ children }) => {
  const client = useApolloClient();

  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <PaperProvider theme={theme}>
          <SafeAreaProvider>{children}</SafeAreaProvider>
        </PaperProvider>
      </UserProvider>
    </ApolloProvider>
  );
};

export default Providers;

import React from "react";
import { NavigationContainerRef, Route } from "@react-navigation/native";

/**
 * Ref for <NavigationContainer>
 */
export const rootNavigationRef = React.createRef<NavigationContainerRef>();

/**
 * Function for navigating from anywhere in the application
 */
export const navigate = (name: string, params?: any): void => {
  rootNavigationRef.current?.navigate(name, params);
};

export const getCurrentRoute = (): Route<string> | undefined =>
  rootNavigationRef.current?.getCurrentRoute();

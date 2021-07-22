import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { ProtectedNavigatorParams } from "@screens/Protected/ProtectedNavigatorParams";
import { DashboardRoute } from "@screens/Protected/routes";

import DashboardView from "./DashboardView";

type ProtectedDashboardNavigationProp = StackNavigationProp<
  ProtectedNavigatorParams,
  typeof DashboardRoute
>;

type ProtectedDashboardRouteProp = RouteProp<
  ProtectedNavigatorParams,
  typeof DashboardRoute
>;

interface ProtectedDashboardProps {
  navigation: ProtectedDashboardNavigationProp;
  route: ProtectedDashboardRouteProp;
}

const DashboardScreen: React.FC<ProtectedDashboardProps> = () => {
  return <DashboardView />;
};

export default DashboardScreen;

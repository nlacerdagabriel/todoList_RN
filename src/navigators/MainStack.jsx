import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../pages/HomeScreen";
const MainStack = createNativeStackNavigator();

export default () => (
  <MainStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#5647D9" },
      headerTintColor: "#FFF",
      headerTitleAlign: "center",
    }}
  >
    <MainStack.Screen
      options={{ title: "Minhas Tarefas" }}
      name="Home"
      component={HomeScreen}
    />
  </MainStack.Navigator>
);

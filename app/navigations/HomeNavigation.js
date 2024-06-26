import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import PlaceDetail from "../Components/Home/PlaceDetail";

export default function HomeNavigation() {
  const isAndroid = true;

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,

        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}
    >
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="place-detail"
        options={{ title: "" }}
        component={PlaceDetail}
        screenOptions={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

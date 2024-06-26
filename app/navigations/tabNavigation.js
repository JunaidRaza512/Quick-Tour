import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Favourite from "../screens/Favourite";
import SearchPlace from "../screens/SearchPlace";
import Profile from "../screens/Profile";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import HomeNavigation from "./HomeNavigation";
export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size }) => (
            <AntDesign name="home" size={size} color="blue" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPlace}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ size }) => (
            <AntDesign name="search1" size={size} color="blue" />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarLabel: "Favourite",
          tabBarIcon: ({ size }) => (
            <MaterialIcons name="favorite" size={size} color="blue" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ size }) => (
            <FontAwesome name="user-circle" size={24} color="blue" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

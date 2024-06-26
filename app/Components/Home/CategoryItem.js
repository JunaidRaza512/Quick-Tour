import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import Colors from "../../Shared/Colors";

export default function CategoryItem({ category }) {
  return (
    <View style={styles.container}>
      <Image source={category.icon} style={{ width: 40, height: 30 }} />
      <Text style={{ fontSize: 13, fontWeight: "500" }}>{category.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: "center",
    margin: 5,
    width: 95,
    height: 95,
    justifyContent: "center",
    borderRadius: 15,
    //borderWidth: 0.5,
    elevation: 2,
    backgroundColor: Colors.GRAY,
  },
});

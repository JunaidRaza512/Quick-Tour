import { StyleSheet, View, Image, TextInput, Dimensions } from "react-native";
import React from "react";
import logo from "../../../assets/logo.png";
import Colors from "../../Shared/Colors";
export default function Header() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: 10,
        alignItems: "center",
      }}
    >
      <Image source={logo} style={styles.logo} />
      <View>
        <TextInput placeholder="Search" style={styles.searchBar} />
      </View>
      <Image
        source={require("./../../../assets/user.png")}
        style={styles.userImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 40,
  },
  searchBar: {
    borderWidth: 1,
    padding: 4,
    borderRadius: 50,
    paddingLeft: 10,
    width: Dimensions.get("screen").width * 0.63,
    borderColor: Colors.PRIMARY,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});

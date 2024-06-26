import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";

export default function PlaceItemBig({ place }) {
  return (
    <View style={{ marginTop: 10 }}>
      {place?.photos ? (
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo" +
              "?maxwidth=400" +
              "&photo_reference=" +
              place?.photos[0]?.photo_reference +
              "&key=AIzaSyB5K3BNqHDiDzBpTQO5sQ1LpNmFVNjt_wI",
          }}
          style={{ width: "100%", height: 130, borderRadius: 15 }}
        />
      ) : null}
      <Text
        numberOfLines={2}
        style={{ fontSize: 18, marginBottom: 2, fontWeight: "600" }}
      >
        {place.name}
      </Text>
      <Text
        style={{ fontSize: 16, marginBottom: 5, color: Colors.DARK_GRAY }}
        numberOfLines={2}
      >
        {place.vicinity}
      </Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          flexDirection: "row",
        }}
      >
        <AntDesign name="star" size={20} color={Colors.YELLOW} />
        <Text>{place.rating ? place.rating : "No Review Yet"}</Text>
      </View>

      {/* <HorizontalLine /> */}
    </View>
  );
}

const styles = StyleSheet.create({});

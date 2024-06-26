import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function PlaceItem({ place }) {
  console.log(place);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginTop: 7,
      }}
    >
      {/* {place?.photos ? (
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo" +
              "?maxwidth=400" +
              "&photo_reference=" +
              place?.photos[0]?.photo_reference +
              "&key=AIzaSyB5K3BNqHDiDzBpTQO5sQ1LpNmFVNjt_wI",
          }}
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      ) : (
        <Image
          source={require("./../../../assets/placeholder.jpg")}
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      )} */}
      {place?.photos?.[0]?.photo_reference ? (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos[0].photo_reference}&key=AIzaSyB5K3BNqHDiDzBpTQO5sQ1LpNmFVNjt_wI`,
          }}
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      ) : (
        <Image
          source={require("./../../../assets/placeholder.jpg")}
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      )}
      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={2}
          style={{ fontSize: 18, marginBottom: 5, fontWeight: "500" }}
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
      </View>
      {/* <HorizontalLine/> */}
    </View>
  );
}

const styles = StyleSheet.create({});

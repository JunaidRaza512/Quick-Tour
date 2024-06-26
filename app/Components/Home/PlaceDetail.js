import { Linking, Platform, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlaceDetailItem from "./PlaceDetailItem";
import GoogleMapView from "./GoogleMapView";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import Colors from "../../Shared/Colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function PlaceDetail() {
  const [place, setPlace] = useState([]);
  const param = useRoute().params;
  useEffect(() => {
    if (param) {
      setPlace(param.places);
    }
  }, []);

  const onDirectionClick = () => {
    const url = Platform.select({
      ios:
        "maps:" +
        place.geometry.location.lat +
        "," +
        place.geometry.location.lng +
        "?q=" +
        place.vicinity,
      android:
        "geo:" +
        place.geometry.location.lat +
        "," +
        place.geometry.location.lng +
        "?q=" +
        place.vicinity,
    });

    Linking.openURL(url);
  };
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView style={{ flex: 1 }}>
    <ScrollView
      style={{ padding: 20, backgroundColor: "#fff", flex: 1, marginTop: -10 }}
    >
      <PlaceDetailItem place={place} onDirectionClick={onDirectionClick} />
      <GoogleMapView placeList={[place]} />
      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 5,
          alignItem: "center",
          margin: 8,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
        }}
        onPress={() => onDirectionClick()}
      >
        <Ionicons name="navigate-circle-outline" size={30} color="white" />

        <Text
          style={{
            fontWeight: "400",
            textAlign: "center",
            color: Colors.WHITE,
          }}
        >
          Get Direction on Google Map
        </Text>
      </TouchableOpacity>
    </ScrollView>
    //   </SafeAreaView>
    // </SafeAreaProvider>
  );
}

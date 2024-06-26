import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../context/UserLocationContext";
import MarkerPlace from "./MarkerPlace";

export default function GoogleMapView({ placeList }) {
  const [mapRegion, setmapRegion] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setmapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

  return (
    <View style={{ marginTop: 10 }}>
      <Text
        style={{
          fontSize: 18,
          marginBottom: 10,
          fontWeight: "600",
          // fontFamily: "Raleway_bold",
        }}
      >
        Near By Places
      </Text>

      <View style={{ borderRadius: 20, overflow: "hidden" }}>
        {location ? (
          <MapView
            style={{
              width: Dimensions.get("screen").width * 0.89,
              height: Dimensions.get("screen").height * 0.23,
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={mapRegion}
          >
            <Marker title="You" coordinate={mapRegion} />
            {placeList.map(
              (item, index) =>
                index <= 5 && <MarkerPlace item={item} key={index} /> //will show first five location based on type if available
            )}
          </MapView>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

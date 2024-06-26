import { View } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Dimensions } from "react-native";
import MarkerPlace from "../Home/MarkerPlace";
import { UserLocationContext } from "../../context/UserLocationContext";

export default function GoogleMapViewFull({ placeList }) {
  const [mapRegion, setmapRegion] = useState([]);

  const { location, setLocation } = useContext(UserLocationContext);
  console.log(location);

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
    <View>
      {location ? (
        <MapView
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height * 0.89,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker title="You" coordinate={mapRegion} />
          {placeList.map(
            (item, index) =>
              index <= 4 && <MarkerPlace item={item} key={index} />
          )}
        </MapView>
      ) : null}
    </View>
  );
}

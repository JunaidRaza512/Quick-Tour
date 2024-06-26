import { View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import GoogleMapViewFull from "../Components/search/GoogleMapViewFull";
import SearchBar from "../Components/search/SearchBar";
import { UserLocationContext } from "../context/UserLocationContext";
import GlobalApi from "../services/GlobalApi";

import BusinessList from "../Components/search/BusinessList";

export default function SearchPlace() {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);
  useEffect(() => {
    GetNearBySearchPlace("restaurant");
  }, []);
  const GetNearBySearchPlace = (value) => {
    GlobalApi.searchByText(value).then((resp) => {
      setPlaceList(resp.data.results);
      //console.log(placeList);
    });
  };
  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ position: "absolute", zIndex: 20 }}>
        <SearchBar setSearchText={(value) => GetNearBySearchPlace(value)} />
      </View>
      <GoogleMapViewFull placeList={placeList} />
      <View style={{ position: "absolute", zIndex: 20, bottom: 0 }}>
        <BusinessList placeList={placeList} />
      </View>
    </View>
  );
}

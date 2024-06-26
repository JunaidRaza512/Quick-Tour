import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import PlaceItem from "./PlaceItem";
import PlaceItemBig from "./PlaceItemBig";
import { useNavigation } from "@react-navigation/native";

export default function PlacesList({ placeList, navigtion }) {
  const navigator = useNavigation();

  const onPlaceClick = (item) => {
    navigator.navigate("place-detail", { places: item });
  };
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 10 }}>
        Found {placeList.length} Places
      </Text>

      <FlatList
        data={placeList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              key={index}
              onPress={() => onPlaceClick(item)}
            >
              {index % 4 == 0 ? (
                <PlaceItemBig place={item} />
              ) : (
                <PlaceItem place={item} />
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

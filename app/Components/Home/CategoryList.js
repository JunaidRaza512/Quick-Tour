import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import { TouchableOpacity } from "react-native";

export default function CategoryList({ setSelectedCategory }) {
  //const [selectedCategory, setselectedCategory] = useState([]);
  const categoryList = [
    {
      id: 1,
      name: "Gas Station",
      value: "gas_station",
      icon: require("./../../../assets/gas.png"),
    },
    {
      id: 2,
      name: "Restaurants",
      value: "restaurant",
      icon: require("./../../../assets/food.png"),
    },
    {
      id: 3,
      name: "Cafe",
      value: "cafe",
      icon: require("./../../../assets/cafe.png"),
    },
  ];

  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => setSelectedCategory(item.value)}>
        <CategoryItem category={item} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ marginTop: 10 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          //fontFamily:'raleway-bold',
        }}
      >
        Categories
      </Text>

      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5 }}
        renderItem={_renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

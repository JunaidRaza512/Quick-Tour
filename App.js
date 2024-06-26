import { StyleSheet, View } from "react-native";
import TabNavigation from "./app/navigations/tabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { UserLocationContext } from "./app/context/UserLocationContext";
import { useFonts } from "expo-font";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  // const [fontsLoaded, fontError] = useFonts({
  //   Raleway: require("./assets/fonts/Raleway-Regular.ttf"),
  //   Raleway_bold: require("./assets/fonts/Raleway-SemiBold.ttf"),
  // });
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <UserLocationContext.Provider value={{ location, setLocation }}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </UserLocationContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

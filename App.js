import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MainNav from "./Navigation/MainNav";

import Arrow from "./assets/svg/arrow-left.svg"; // icon back

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MainNav />
      <StatusBar style="auto" />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
});

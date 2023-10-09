import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import bgimg from "./assets/PhotoBG.png";
import Login from "./Screens/LoginScreen";
// import Registration  from "./Screens/RegistrationScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgimg} resizeMode="cover" style={styles.image}>
        <Login />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/LoginScreen";
import Registration from "./Screens/RegistrationScreen";
import Posts from "./Screens/PostsScreen";
import LogOutButton from "./Components/LogOutButton";
import Arrow from "./assets/svg/arrow-left.svg";

const MainStack = createStackNavigator();

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
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={Registration}
          options={{
            title: "Registration",
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Posts}
          options={{
            headerBackImage: () => {},
            title: "Публікації",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#fff",
              borderBottomColor: "#E5E5E5",
              borderBottomWidth: 1,
            },
            headerTintColor: "red",
            headerTitleStyle: {
              fontFamily: "Roboto-Medium",
              color: "#212121",
              fontSize: 17,
            },
            headerRight: () => <LogOutButton />,
          }}
        />
      </MainStack.Navigator>
      {/* <StatusBar style="auto" /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
});

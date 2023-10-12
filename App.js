import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostScreen from "./Screens/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";

import LogOutButton from "./Components/LogOutButton";
import Arrow from "./assets/svg/arrow-left.svg"; // icon back

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
      <MainStack.Navigator initialRouteName="Profile">
        <MainStack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{
            title: "Register",
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={PostsScreen}
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

        {/* <MainStack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{
            title: "CreatePost",
          }}
        />
        <MainStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
          }}
        /> */}
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

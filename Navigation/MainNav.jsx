import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import RegistrationScreen from "../Screens/RegistrationScreen";
import PostsScreen from "../Screens/PostsScreen";
import CreatePostScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";

import LogOutButton from "../Components/LogOutButton";

import BottomTabs from "./BottomTabs";
const MainStack = createStackNavigator();

const MainNav = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
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
        component={BottomTabs}
        options={{
          headerShown: false,
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

      <MainStack.Screen
        name="Create"
        component={CreatePostScreen}
        options={{
          headerBackImage: () => {},
          title: "Створити публікацію",
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
        }}
      />
      <MainStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerBackImage: () => {},
          title: "Створити публікацію",
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
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainNav;

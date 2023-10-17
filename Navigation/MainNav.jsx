import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import RegistrationScreen from "../Screens/RegistrationScreen";
import PostsScreen from "../Screens/PostsScreen";
import CreatePostScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";

import LogOutButton from "../Components/LogOutButton";
import ArrowBackButton from "../Components/ArrowBack";

import BottomTabs from "./BottomTabs";
import Home from "../Screens/Home";
import { Text } from "react-native";

import Arrow from "../assets/svg/arrow-left.svg";
const MainStack = createStackNavigator();

const createOption = (title, headerShown, arrow) => {
  const options = {
    headerShown: true,
    headerBackImage: () => {
      return arrow ? <Arrow /> : null;
    },
    // headerBackImage: () => {
    //   return <Arrow />;
    // },
    title: "generic title",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "#fff",
      borderBottomColor: "#E5E5E5",
      borderBottomWidth: 1,
    },
    headerTitleStyle: {
      fontFamily: "Roboto-Medium",
      color: "#212121",
      fontSize: 17,
    },
    headerRight: () => <LogOutButton />,
  };
  return { ...options, title, headerShown };
};

const MainNav = () => {
  return (
    <MainStack.Navigator initialRouteName="Register">
      <MainStack.Screen
        name="Register"
        component={RegistrationScreen}
        options={createOption("Реєстрація", false)}
      />
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={createOption("Логін", false)}
      />
      <MainStack.Screen
        name="Home"
        component={Home}
        options={createOption("Публікації", true, true)}
      />

      <MainStack.Screen
        name="Posts"
        component={PostsScreen}
        options={createOption("Публікації")}
      />

      <MainStack.Screen
        name="Create"
        component={CreatePostScreen}
        options={{
          headerBackImage: () => <ArrowBackButton />,
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
          headerRight: () => <LogOutButton />,
        }}
      />
      <MainStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerBackImage: () => {
            Arrow;
          },
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

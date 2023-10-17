import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../Screens/PostsScreen";
import CreatePostScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { getHeaderTitle } from "@react-navigation/elements";
import { Text, StyleSheet, View } from "react-native";
import Header from "../Components/Header";

import Grid from "../assets/svg/grid.svg";
import Union from "../assets/svg/addU.svg";
import User from "../assets/svg/user.svg";

import LogOutButton from "../Components/LogOutButton";
import ArrowBackButton from "../Components/ArrowBack";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,

        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          const buttonStyles = {
            backgroundColor: focused ? "#FF6C00" : "transparent",
            borderRadius: 0,
            width: 70,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          };
          if (route.name === "Posts") {
            icon = (
              <View style={[buttonStyles, { borderRadius: 20 }]}>
                <Grid color={focused ? "white" : "#212121CC"} />
              </View>
            );
          }
          if (route.name === "Create") {
            icon = (
              <View style={[buttonStyles, { borderRadius: 20 }]}>
                <Union color={focused ? "white" : "#212121CC"} />
              </View>
            );
          }
          if (route.name === "Profile") {
            icon = (
              <View style={[buttonStyles, { borderRadius: 20 }]}>
                <User color={focused ? "white" : "#212121CC"} />
              </View>
            );
          }
          return icon;
        },
        tabBarVisible: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          paddingHorizontal: "23%",
          textAlign: "center",
        },
      })}>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          tabBarLabel: "center",
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreatePostScreen}
        options={{
          title: "Створити публікацію",
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarVisible: false,
          // headerShown: false, // Убрать заголовок для этого экрана
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

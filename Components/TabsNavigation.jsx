import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePost from "../Screens/CreatePostsScreen";
import Posts from "../Screens/PostsScreen";

import Grid from "../assets/svg/grid.svg";
import Union from "../assets/svg/addU.svg";
import User from "../assets/svg/user.svg";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Posts") {
            iconName = focused ? "grid" : "grid";
          } else if (route.name === "CreatePost") {
            iconName = focused ? "grid" : "grid";
          } else if (route.name === "Profile") {
            iconName = focused ? "grid" : "grid";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}>
      <Tabs.Screen name="Posts" component={HomeScreen} />
      <Tabs.Screen name="CreatePost" component={CreatePostScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default BottomTabs;

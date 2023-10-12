import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../Screens/PostsScreen";
import CreatePostScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";

import Grid from "../assets/svg/grid.svg";
import Union from "../assets/svg/addU.svg";
import User from "../assets/svg/user.svg";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,

        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "Posts") {
            icon = <Grid color={focused ? "white" : "#212121CC"} />;
          }
          if (route.name === "Create") {
            icon = <Union color={focused ? "white" : "#212121CC"} />;
          }
          if (route.name === "Profile") {
            icon = <User color={focused ? "white" : "#212121CC"} />;
          }
          return icon;
        },
        tabBarOptions: {
          style: {
            backgroundColor: "red", // Цвет фона всей нижней навигации
            paddingTop: 10, // Верхний отступ (может быть любым)
            paddingBottom: 10, // Нижний отступ (может быть любым)
          },
        },
      })}>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarLabel: "center",
        }}
      />
      <Tab.Screen name="Create" component={CreatePostScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;

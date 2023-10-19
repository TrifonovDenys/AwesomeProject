import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";
import Home from "../Screens/Home";
import PostsScreen from "../Screens/PostsScreen";
import CreatePostScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import MapScreen from "../Screens/MapScreen";
import CommentsScreen from "../Screens/CommentsScreen";

import "react-native-gesture-handler";
import LogOutButton from "../Components/LogOutButton";
import Arrow from "../assets/svg/arrow-left.svg";
import { optionMain } from "../Options/Options";

const MainStack = createStackNavigator();

const MainNav = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Register"
        component={RegistrationScreen}
        options={optionMain("Реєстрація", false)}
      />
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={optionMain("Логін", false)}
      />
      <MainStack.Screen
        name="Home"
        component={Home}
        options={optionMain("Публікації", false)}
      />
      <MainStack.Screen
        name="Posts"
        component={PostsScreen}
        options={optionMain("Публікації", false)}
      />
      <MainStack.Screen
        name="Create"
        component={CreatePostScreen}
        options={optionMain("Створити публікацію")}
      />

      <MainStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={optionMain("Профіль", false)}
      />

      <MainStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={optionMain("Мапа", true, true)}
      />

      <MainStack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={optionMain("Коментарі", true, true)}
      />
    </MainStack.Navigator>
  );
};

export default MainNav;

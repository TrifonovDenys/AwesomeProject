import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import LogOut from "../assets/svg/log-out.svg";
import { useNavigation } from "@react-navigation/native";

const LogOutButton = () => {
  const navigation = useNavigation();

  const handleLogOut = () => {
    navigation.navigate("Login");
    console.log("LogOut");
  };

  return (
    <TouchableOpacity style={styles.head} onPress={handleLogOut}>
      <LogOut style={styles.headIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headIcon: {
    marginRight: 16,
  },
});

export default LogOutButton;

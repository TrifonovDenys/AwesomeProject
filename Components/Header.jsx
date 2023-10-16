import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerTitleStyle}>{title}</Text>
    </View>
  );
};

styles = StyleSheet.create({
  headerStyle: {
    height: 80,
    display: "flex",
    justifyContent: "flex-end",
    paddingVertical: 11,
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomColor: "#E5E5E5",
    borderWidth: 1,
  },
  headerTitleStyle: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 17,
  },
});

export default Header;

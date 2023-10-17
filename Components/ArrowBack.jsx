import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Arrow from "../assets/svg/arrow-left.svg";

const ArrowBackButton = () => {
  return (
    <TouchableOpacity style={styles.head}>
      <Arrow style={styles.headIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  head: {
    position: "absolute",
    top: -10,
  },
  headIcon: {
    // marginRight: 16,
  },
});

export default ArrowBackButton;

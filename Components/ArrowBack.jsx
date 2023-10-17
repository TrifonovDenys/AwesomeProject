import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Arrow from "../assets/svg/arrow-left.svg";

const ArrowBackButton = ({ targetScreen }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (targetScreen === "Posts" || targetScreen === "Profile") {
      // Перейти на целевой экран (Posts или Profile)
      navigation.navigate(targetScreen);
    } else {
      // Если не указан целевой экран, то просто вернуться на предыдущий
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity style={styles.head} onPress={handleGoBack}>
      <Arrow style={styles.headIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  head: {
    position: "absolute",
    bottom: 10,
  },
  headIcon: {
    marginLeft: 16,
  },
});

export default ArrowBackButton;

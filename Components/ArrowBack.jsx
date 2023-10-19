import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Arrow from "../assets/svg/arrow-left.svg";

import { BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ArrowBackButton = ({ onPress }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
    return true; // Возвращаем true, чтобы предотвратить действие по умолчанию (например, выход из приложения)
  };

  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);

  return (
    <TouchableOpacity
      onPress={onPress || (() => navigation.goBack())}
      style={styles.head}>
      <Arrow style={styles.headIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  head: {
    position: "absolute",
    bottom: 13,
  },
  headIcon: {
    marginLeft: 16,
  },
});

export default ArrowBackButton;

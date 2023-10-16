import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Camera from "../assets/svg/camera.svg";
import Trash from "../assets/svg/trash.svg";
import MapPin from "../assets/svg/map-pin.svg";
import ButtonSubmit from "../Components/Button";
const CreatePostScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <View style={styles.addPhotoWrapper}>
          <View style={styles.addPhoto}>
            <Camera />
          </View>
          <Text>Завантажте фото</Text>
        </View>
        <SafeAreaView style={styles.form}>
          <TextInput placeholder="Назва..." placeholderTextColor="#BDBDBD" />
          <View>
            <MapPin />
            <TextInput
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
            />
          </View>
          <ButtonSubmit>Опубліковати</ButtonSubmit>
        </SafeAreaView>
        <Trash />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 32,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
  },
  addPhoto: {
    height: 240,
  },
});

export default CreatePostScreen;

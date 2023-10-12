import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import ButtonSubmit from "../Components/Button";
import bgimg from "../assets/PhotoBG.png";
const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
    setIsPasswordFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
    setIsEmailFocused(false);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleRegistration = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
    navigation.navigate("Home");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ImageBackground source={bgimg} resizeMode="cover" style={styles.image}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Увійти</Text>
          <View style={styles.inputBlock}>
            <TextInput
              style={[styles.input, isEmailFocused && styles.inputFocused]}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={[styles.inputBlock, styles.passwordBlock]}>
            <TextInput
              style={[styles.input, isPasswordFocused && styles.inputFocused]}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Text onPress={handleShowPassword} style={styles.togglePassword}>
              {showPassword ? "Сховати" : "Показати"}
            </Text>
          </View>
          <View style={styles.buttonBlock}>
            <ButtonSubmit onPress={handleRegistration}>Увійти</ButtonSubmit>
            <Text style={styles.singupText}>
              Немає акаунту?{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => navigation.navigate("Register")}>
                Зареєструватися
              </Text>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto-Regular",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 110,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    paddingBottom: 32,
    paddingTop: 32,
    color: "#212121",
    fontSize: 30,
  },
  input: {
    width: "100%",
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 15,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    color: "#212121",
    borderRadius: 10,
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
  },
  inputBlock: {
    width: "100%",
    position: "relative",
    marginBottom: 16,
  },
  passwordBlock: {
    marginBottom: 42,
  },
  togglePassword: {
    position: "absolute",
    right: 15,
    top: 25,
    transform: [{ translateY: -7.5 }],
    color: "#1B4371",
  },
  buttonBlock: {
    width: "100%",
  },
  singupText: {
    textAlign: "center",
    color: "#1B4371",
  },
});

export default LoginScreen;

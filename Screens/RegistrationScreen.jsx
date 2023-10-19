import React, { useState } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import bgimg from "../assets/PhotoBG.png";
import AddPhoto from "../assets/svg/add.svg";
import ButtonSubmit from "../Components/Button";

const RegistrationScreen = () => {
  const navigation = useNavigation();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginFocus = () => {
    setIsLoginFocused(true);
    setIsEmailFocused(false);
    setIsPasswordFocused(false);
  };

  const handleEmailFocus = () => {
    setIsLoginFocused(false);
    setIsEmailFocused(true);
    setIsPasswordFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsLoginFocused(false);
    setIsEmailFocused(false);
    setIsPasswordFocused(true);
  };

  const handleLoginBlur = () => {
    setIsEmailFocused(false);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleRegistration = () => {
    console.log("Login:", login);
    console.log("Email:", email);
    console.log("Password:", password);
    setLogin("");
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
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={-82}>
          <SafeAreaView
            style={styles.scrollView}
            automaticallyAdjustKeyboardInsets={true}>
            <View style={styles.avatarContainer}>
              <View style={styles.iconContainer}>
                <AddPhoto />
              </View>
            </View>
            <Text style={styles.title}>Реєстрація</Text>

            <View style={styles.inputBlock}>
              <TextInput
                style={[styles.input, isLoginFocused && styles.inputFocused]}
                onFocus={handleLoginFocus}
                onBlur={handleLoginBlur}
                placeholder="Логін"
                placeholderTextColor="#BDBDBD"
                value={login}
                onChangeText={(text) => setLogin(text)}
              />
            </View>

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

            <View style={styles.inputBlock}>
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
          </SafeAreaView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <View style={styles.buttonBlock}>
        <ButtonSubmit onPress={handleRegistration}>Увійти</ButtonSubmit>
        <Text style={styles.loginText}>
          Немає акаунту?{" "}
          <Text
            style={{ textDecorationLine: "underline" }}
            onPress={() => navigation.navigate("Login")}>
            Зареєструватися
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    fontFamily: "Roboto-Regular",

    justifyContent: "flex-end",
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
    right: "50%",
    transform: [{ translateX: 30 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  iconContainer: {
    position: "absolute",
    right: -12.5,
    bottom: 15,
  },
  title: {
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    paddingBottom: 32,
    paddingTop: 92,
    color: "#212121",
    fontSize: 30,
  },
  image: {
    flex: 1,
  },
  scrollView: {
    position: "relative",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "flex-end",
    paddingBottom: 42,
    gap: 16,
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
  },
  togglePassword: {
    position: "absolute",
    right: 15,
    top: 25,
    transform: [{ translateY: -7.5 }],
    color: "#1B4371",
  },
  buttonBlock: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    paddingBottom: 78,
    width: "100%",
  },
  loginText: {
    textAlign: "center",
    color: "#1B4371",
  },
});
export default RegistrationScreen;

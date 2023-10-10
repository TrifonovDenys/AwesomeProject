import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import ButtonSubmit from "../Components/Button";

const Registration = () => {
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
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.inputBlock}>
          <TextInput
            style={[styles.input, isLoginFocused && styles.inputFocused]}
            onFocus={handleLoginFocus}
            onBlur={handleLoginBlur}
            placeholder="Логін"
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
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Text onPress={handleShowPassword} style={styles.togglePassword}>
            {showPassword ? "Сховати" : "Показати"}
          </Text>
        </View>

        <View style={styles.buttonBlock}>
          <ButtonSubmit onPress={handleRegistration}>
            Зареєструватися
          </ButtonSubmit>
          <Text style={styles.loginText}>
            Вже є акаунт?{" "}
            <Text style={{ textDecorationLine: "underline" }}>Увійти</Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 110,
  },
  title: {
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
  loginText: {
    textAlign: "center",
    color: "#1B4371",
  },
});

export default Registration;

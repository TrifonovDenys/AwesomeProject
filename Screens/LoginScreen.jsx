import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import ButtonSubmit from "../Components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
    setIsPasswordFocused(false); // Снимаем фокус с пароля
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
    setIsEmailFocused(false); // Снимаем фокус с email
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
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Увійти</Text>
      <TextInput
        style={[
          styles.input,
          isEmailFocused && styles.inputFocused,
          { marginBottom: 16 },
        ]}
        onFocus={handleEmailFocus}
        onBlur={handleEmailBlur}
        placeholder="Адреса електронної пошти"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.passwordBlock}>
        <TextInput
          style={[
            styles.input,
            isPasswordFocused && styles.inputFocused,
            { marginBottom: 42 },
          ]}
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
      <ButtonSubmit onPress={handleRegistration}>Увійти</ButtonSubmit>
      <Text style={styles.singupText}>
        Немає акаунту?{" "}
        <Text style={{ textDecorationLine: "underline" }}>Зареєструватися</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    bottom: 0,
  },
  title: {
    textAlign: "center",
    paddingBottom: 32,
    paddingTop: 32,
    color: 212121,
    fontSize: 30,
  },
  input: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 15,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    color: "#212121",
    borderRadius: 10,
    marginBottom: 16,
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
  },

  passwordBlock: {
    position: "relative",
  },
  togglePassword: {
    position: "absolute",
    right: 15,
    top: "50%",
    transform: [{ translateY: -33 }],
    color: "#1B4371",
  },
  singupText: {
    textAlign: "center",
    paddingBottom: 111,
    color: "#1B4371",
  },
});

export default Login;

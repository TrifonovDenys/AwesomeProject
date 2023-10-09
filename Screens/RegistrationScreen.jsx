import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";

const Registration = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View>
      <Text>Реєстрація</Text>
      <TextInput
        placeholder="Логін"
        value={login}
        onChangeText={(text) => setLogin(text)}
      />
      <TextInput
        placeholder="Адреса електронної пошти"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Пароль"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Зареєструватися" onPress={handleRegistration} />

      <Text>Вже є акаунт? Увійти</Text>
    </View>
  );
};

export default Registration;

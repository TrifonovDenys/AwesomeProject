import React from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";

const New = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TextInput style={styles.input} placeholder="Input 1" />
      <TextInput style={styles.input} placeholder="Input 2" />
      <View>
        <TextInput style={styles.input} placeholder="Input 3" />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // Разместить внизу экрана
  },
  input: {
    backgroundColor: "grey",
    padding: 10,
    marginBottom: 10,
  },
});
export default New;

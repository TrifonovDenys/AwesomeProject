import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonSubmit = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
    borderRadius: 100,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
});

export default ButtonSubmit;

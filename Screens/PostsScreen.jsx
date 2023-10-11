import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";

import userImage from "../assets/User.png";

import Grid from "../assets/svg/grid.svg";
import Union from "../assets/svg/addU.svg";
import User from "../assets/svg/user.svg";
const Posts = () => {
  const [grid, setGrid] = useState(true);
  const [union, setUnion] = useState(false);
  const [user, setUser] = useState(false);

  const handleGridIsActive = () => {
    setGrid(true);
    setUnion(false);
    setUser(false);
  };

  const handleUnionIsActive = () => {
    setGrid(false);
    setUnion(true);
    setUser(false);
  };

  const handleUserIsActive = () => {
    setGrid(false);
    setUnion(false);
    setUser(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.user}>
          <View style={styles.userImg}>
            <Image source={userImage} />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userLogin}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={grid && styles.active}
          onPress={handleGridIsActive}>
          <Grid style={grid ? { color: "#fff" } : { color: "#212121" }} />
        </TouchableOpacity>

        <TouchableOpacity
          style={union && styles.active}
          onPress={handleUnionIsActive}>
          <Union style={union ? { color: "#fff" } : { color: "#212121" }} />
        </TouchableOpacity>

        <TouchableOpacity
          style={user && styles.active}
          onPress={handleUserIsActive}>
          <User style={user ? { color: "#fff" } : { color: "#212121" }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  userImg: {
    borderRadius: 16,
  },
  userLogin: {
    fontFamily: "Roboto-Bold",
    color: "#212121",
    fontSize: 13,
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    color: "#212121",
    opacity: 0.8,
    fontSize: 11,
  },
  footer: {
    borderTopColor: "#E5E5E5",
    borderTopWidth: 1,
    paddingTop: 10,
    paddingBottom: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 30,
  },
  active: {
    width: 70,
    backgroundColor: "#FF6C00",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default Posts;

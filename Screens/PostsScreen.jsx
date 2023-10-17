import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

import userImage from "../assets/User.png";


const PostsScreen = () => {
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
});

export default PostsScreen;

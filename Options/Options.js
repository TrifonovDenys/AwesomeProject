import LogOutButton from "../Components/LogOutButton";
import Arrow from "../assets/svg/arrow-left.svg";

export const optionMain = (title, headerShown, arrow) => {
  const options = {
    headerShown: true,
    headerBackImage: () => {
      return arrow ? <Arrow /> : null;
    },
    title: "generic title",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "#fff",
      borderBottomColor: "#E5E5E5",
      borderBottomWidth: 1,
    },
    headerTitleStyle: {
      fontFamily: "Roboto-Medium",
      color: "#212121",
      fontSize: 17,
    },
    headerRight: () => <LogOutButton />,
  };
  return { ...options, title, headerShown };
};

export const optionTab = (title, headerShown, arrow) => {
  const options = {
    headerShown: true,
    headerBackImage: () => {
      return arrow ? <Arrow /> : null;
    },
    title: "generic title",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "#fff",
      borderBottomColor: "#E5E5E5",
      borderBottomWidth: 1,
    },
    headerTitleStyle: {
      fontFamily: "Roboto-Medium",
      color: "#212121",
      fontSize: 17,
    },
    headerRight: () => {
      return arrow ? <LogOutButton /> : null;
    },
  };
  return { ...options, title, headerShown };
};

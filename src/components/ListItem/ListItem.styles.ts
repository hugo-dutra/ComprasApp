import { StyleSheet } from "react-native";

export const ListItemStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#333333",
    flex: 1
  },
  image: {
    flex: 1
  },
  text: {
    flex: 3,
    marginVertical: 5

  },
  button: {
    flex: 1
  }
})
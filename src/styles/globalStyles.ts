import { StyleSheet } from "react-native";
import { appColors } from "../constants/appColor";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: appColors.text,
  },
  button: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColors.white,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  shadow: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  section: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3D56F0",
    width: 30,
    height: 30,
    borderRadius: 100,
  },

  tag: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    marginRight: 12,
    backgroundColor: appColors.white,
  },

  card: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: appColors.white,
    margin: 12,
  },
});

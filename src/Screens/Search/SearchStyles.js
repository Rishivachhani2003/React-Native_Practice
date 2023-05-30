import { View, TextInput, Button, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  MainContainer: {
    marginHorizontal: hp("1%"),
    marginVertical: wp("1%"),
    flexDirection: "row",
    borderColor: "#000080",
  },
  container: {
    // flex: 1,
    margin: hp("2%"),
    justifyContent: "center",
    color: "#000080",
  },
  input: {
    height: hp("4%"),
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: hp("1%"),
    marginBottom: hp("1%"),
  },
});

export default styles;

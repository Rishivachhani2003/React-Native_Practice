import React from "react";
import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  MainContainer: {
    marginHorizontal: hp("1%"),
    marginVertical: wp("1%"),
    flexDirection: "row",
    borderColor: "#000080",
  },
  SideColumn: {
    flexDirection: "column",
  },
  SideMainContainer: {
    marginHorizontal: hp("1%"),
    marginVertical: wp("1%"),

    flexDirection: "column",
    display: "flex",
  },
  item_style: {
    backgroundColor: "#B591FF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
  item: {
    // backgroundColor: "#f9c2ff",
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
});

export default styles;

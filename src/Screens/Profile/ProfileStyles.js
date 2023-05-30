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
});

export default styles;

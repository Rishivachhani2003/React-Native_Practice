import { View, Text, Button, FlatList } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView } from "react-native-gesture-handler";
import styles from "./ProfileStyles";

const Profile = ({ navigation }) => {
  // const [cartElement, SetCartElement] = useState();
  // fetch("https://fakestoreapi.com/carts/3")
  //   .then((res) => res.json())
  //   .then((json) => console.log(json))
  //   .then((cartElement) => SetCartElement(cartElement));

  // const renderData = ({ item }) => {
  //   return (
  //     <View style={{ margin: hp("1.5%") }}>
  //       {/* <Image
  //         style={{ borderColor: "#A3E4D7" }}
  //         source={require("../../Assets/Head_phone_1.jpeg")}
  //       ></Image> */}
  //       <Text>{item.id}</Text>
  //       <Text>{item.date}</Text>
  //       <Text>{item.price} USD</Text>
  //       <Text>{item.category}</Text>
  //       <Text>{item.description}</Text>
  //     </View>
  //   );
  // };
  return (
    <SafeAreaView>
      <View style={styles.MainContainer}>
        <Text>Profile Screen</Text>
        {/* <FlatList data={cartElement} renderItem={renderData} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Profile;

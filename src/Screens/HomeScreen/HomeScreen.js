import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, FlatList } from "react-native";
import styles from "./HomeScreenStyles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SearchBar } from "react-native-screens";
import jsonformatter from "../../Database/jsonformatter.json";
// import * as RNFS from "react-native-fs";
import axios from "axios";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen({ navigation }) {
  const [apiData, SetApiData] = useState();
  const [descendingData, setDescendingData] = useState();

  const HandleSortItem = () => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((res) => res.json())
      .then((descendingData) => setDescendingData(descendingData));
  };

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((apiData) => SetApiData(apiData));

  const renderData = ({ item }) => {
    return (
      <View style={{ margin: hp("1.5%") }}>
        <Image
          style={{
            width: hp("25%"),
            height: hp("25%"),
            backgroundColor: "#000080",
          }}
          source={{
            uri: item.image,
          }}
        />
        {/* <Text>{item.id}</Text> */}
        <Text>{item.title}</Text>
        <Text>{item.price} USD</Text>
        <Text>{item.category}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <Button title="Sort" onPress={() => HandleSortItem()}>
        Sort
      </Button>
      <View style={styles.MainContainer}>
        <FlatList data={apiData} renderItem={renderData} />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

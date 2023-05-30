import React, { useState, useEffect } from "react";
import { View, TextInput, Button, FlatList, Text, Image } from "react-native";
import { SearchBar } from "react-native-screens";
import styles from "./SearchStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [apiData, SetApiData] = useState([]);

  const handleSearch = () => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((apiData) => SetApiData(apiData));
  };

  const renderData = ({ item }) => {
    return (
      <View
        style={{
          margin: hp("1.5%"),
        }}
      >
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
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
        <Text>{item.category}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter your search query"
          value={searchText}
          onChangeText={(searchText) => setSearchText(searchText)}
        />
        <Button
          style={{ color: "#000080" }}
          title="Search"
          onPress={handleSearch}
        />
      </View>
      <View style={styles.MainContainer}>
        <FlatList data={apiData} renderItem={renderData} />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

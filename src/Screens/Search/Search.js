import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import styles from './SearchStyles';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Perform search logic based on searchText
    console.log('Searching for:', searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your search query"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};


export default SearchScreen;

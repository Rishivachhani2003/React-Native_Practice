import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput,TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: hp('5%'),
      marginBottom: hp('5%'),
    },
    input: {
      width: wp('80%'),
      height: hp('5%'),
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: hp('2%'),
      padding: wp('2%'),
    },
    button: {
      backgroundColor: 'blue',
      width: wp('80%'),
      height: hp('5%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: hp('2.5%'),
    },
  });
  
  
    

export default styles;
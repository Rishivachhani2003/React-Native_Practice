import React, { useState } from 'react';
import { View, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './SignUpScreenStyles';

function SignUpScreen({ navigation }) {
  const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [reenterPassword, setreenterPassword] = useState('');


  signUpButtonPress = () => {
    if (!inputEmail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {

      Alert.alert(" email is not valid");
      return false;
    }
    else if (!inputPassword.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,12}$/)) {

      Alert.alert("Password not valid\nPassword must be 6 to 14 characters long and contain one Uppercase, one Lowercase, one Special Character and one Number");
      return false;
    }
    else if (!reenterPassword.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,12}$/)) {

      Alert.alert("Password not valid\nPassword must be 6 to 14 characters long and contain one Uppercase, one Lowercase, one Special Character and one Number");
      return false;
    }
    else if (inputPassword != reenterPassword) {

      Alert.alert("Password do not match");
      return false;
    }
    else {
      const Email = inputEmail;
      const Password = inputPassword;

      AsyncStorage.setItem('Email', JSON.stringify(Email), (err) => {
        if (err) {
          console.log("an error");
          throw err;
        }
        console.log("success");
      }).catch((err) => {
        console.log("error is: " + err);
      });

        AsyncStorage.setItem('Password', JSON.stringify(Password), (err) => {
          if (err) {
            console.log("an error");
            throw err;
          }
          console.log("success");
        }).catch((err) => {
          console.log("error is: " + err);
        });
      console.log('signupdone')
      navigation.navigate("Login");
      return false;


    }
  }

  signInButtonPress = () => {
    navigation.navigate("Login")
  }


  return (

    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        value={inputEmail}
        placeholder="Email"
        onChangeText={(inputEmail) => setEmail(inputEmail)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={inputPassword}
        onChangeText={(inputPassword) => setPassword(inputPassword)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={reenterPassword}
        onChangeText={(reenterPassword) => setreenterPassword(reenterPassword)}
      />
      <TouchableOpacity style={styles.button} onPress={() => signUpButtonPress()}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'green', }]} onPress={() => signInButtonPress()}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};


export default SignUpScreen;
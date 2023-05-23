import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './LoginScreenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen({ navigation }) {
    const [inputEmail, setEmail] = useState('');
    const [inputPassword, setPassword] = useState('');


     const loginButtonPress=()=> {
        const uName = async () => {
            try {
              const jsonValue = await AsyncStorage.getItem('Email')
              return jsonValue != null ? JSON.parse(jsonValue) : null
            } catch(e) {
              // read error
            }
          
            console.log('Done.')
          
          }

          const uPassword = async () => {
            try {
              const jsonValue = await AsyncStorage.getItem('Password')
              return jsonValue != null ? JSON.parse(jsonValue) : null
            } catch(e) {
              // read error
            }
          
            console.log('Done.')
          
          }

          if(uName===inputEmail && uPassword===inputPassword){
            Alert.alert("enter valid username and valid password")
            
          }
          else if(uName.length>0 && uPassword.length>0){
                Alert.alert("enter username and password")
          }
          else{
            navigation.navigate("Main")
          }
        
      




    }

    ForgotBtnPressed = () => {
        navigation.navigate("ForgotPassword")
    }

    SignUpBtnPressed = () => {
        navigation.navigate("SignUp")
    }


    return (



        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaaaaa"
                value={inputEmail}
                onChangeText={(inputEmail) => setEmail(inputEmail)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#aaaaaa"
                secureTextEntry={true}
                value={inputPassword}
                onChangeText={(inputPassword) => setPassword(inputPassword)}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => loginButtonPress()}>
                <Text style={styles.buttonTitle}>
                    Log in
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ForgotBtnPressed()}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => SignUpBtnPressed()}>

                <Text style={styles.bottomTitle}>Don't have account? Sign Up Here</Text>
            </TouchableOpacity>
        </View>
    );
};






export default LoginScreen;
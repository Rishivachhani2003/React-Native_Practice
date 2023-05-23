import React, { useState } from 'react';
import { View, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import styles from './ForgotPasswordStyles';
import LoginScreen from '../Login/LoginScreen';




function ForgotPassword({ navigation }) {
    const [inputEmail, setEmail] = useState('');
    const [inputPassword, setPassword] = useState('');
    const [reenterPassword, setreenterPassword] = useState('');


    confirmPassword = () => {
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

            alert("Password do not match");
            return false;



        }
        else {

            Alert.alert("Password change Successfully")
            HandleLogin();
            // console.log("login button pressed")
        }
    }

    HandleLogin = () => {
        navigation.navigate("Login")
    }
    return (

        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
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
            <TouchableOpacity style={styles.button} onPress={() => confirmPassword()}>
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};


export default ForgotPassword;
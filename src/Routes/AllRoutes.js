import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';
import AsyncStorage from '@react-native-async-storage/async-storage';


function AllRoutes() {

    const uName = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('Email')
            return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch (e) {
            // read error
        }

        console.log('Done.')

    }

    const uPassword = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('Password')
            return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch (e) {
            // read error
        }

        console.log('Done.')

    }
    if(uName=== null && uPassword === null ){
        return(
        <><AuthRoutes/></>
            )
    }else{
        return(
        <><AppRoutes/></>
            )
    }
};



export default AllRoutes;
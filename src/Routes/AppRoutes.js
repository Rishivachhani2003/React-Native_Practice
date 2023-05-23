import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../Screens/Settings/Settings";
import Search from "../Screens/Search/Search";
import Profile from "../Screens/Profile/Profile";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "../Screens/Login/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { log } from "react-native-reanimated";
import Logout from "../Screens/Logout/Logout";
import Drawernavigation from "./DrawerNavigation";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppRoutes({ navigation }) {
  const handleLogout = () => {
    removeAppKeys();
    navigation.navigate("Login");
  };
  removeAppKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      console.log(`Keys: ${keys}`);
      console.log(keys); // Just to see what's going on
      await AsyncStorage.multiRemove(keys);
    } catch (e) {
      console.log(e);
    }
    console.log("Done");
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerTitle: false, headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} headerMode={false} />

        <Tab.Screen
          name="Search"
          component={Search}
          // headerMode={false}
        />

        <Tab.Screen
          name="Settings"
          component={Settings}
          // headerMode={false}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          // headerMode={false}
        />

        <Tab.Screen name="Drawer" component={Drawernavigation} />
        {/* 
        <Tab.Screen
          name="Logout"
          component={Logout}
          listeners={{ tabPress: () => handleLogout() }} */}
        {/* // listeners={{tabPress: ()=>this.props.navigation.navigate("Login")}} */}

        {/* // headerMode={false} */}
        {/* /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;

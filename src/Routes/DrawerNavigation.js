import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import Profile from "../Screens/Profile/Profile";
import Logout from "../Screens/Logout/Logout";
import LoginScreen from "../Screens/Login/LoginScreen";

const Drawer = createDrawerNavigator();

function Drawernavigation() {
  const handleLogout = () => {
    removeAppKeys();
    // navigation.navigate("Login");
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
  // const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerTitle: false, headerShown: false }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} headerMode={false} />

      <Drawer.Screen name="Profile" component={Profile} headerMode={false} />

      <Drawer.Screen
        name="Logout"
        component={LoginScreen}
        headerMode={false}
        listeners={{ tabPress: () => handleLogout() }}
      />
    </Drawer.Navigator>
  );
}

export default Drawernavigation;

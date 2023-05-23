import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/Login/LoginScreen";
import SignUpScreen from "../Screens/Signup/SignUpScreen";
import ForgotPassword from "../Screens/ForgotPassword/ForgotPassword";
import MainScreen from "../Screens/MainScreen/MainScreen";
import Logout from "../Screens/Logout/Logout";
import Drawernavigation from "./DrawerNavigation";

const Stack = createNativeStackNavigator();
function AuthRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTitle: false, headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Main" component={MainScreen} />
        {/* <Stack.Screen name="Logout" component={Logout} /> */}
        <Stack.Screen name="Drawer" component={Drawernavigation} />
        {/*  */}
        {/* <Stack.Screen 
          name="Logout"
           component={Logout}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthRoutes;

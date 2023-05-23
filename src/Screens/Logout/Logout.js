import React from "react";
import { View, Text, Button, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";

function Logout({ navigation }) {
  const HandlelogoutBtn = () => {
    // AsyncStorage.removeItem("Email");
    // AsyncStorage.removeItem("Password");
    // navigation.navigate("Login");
  };

  return (
    <View style={{ color: "black ", margin: 100 }}>
      {/* <Pressable onPress={()=>HandlelogoutBtn()}><Text>Logout</Text></Pressable> */}
      <Button
        title="Logout"
        onPress={() => HandlelogoutBtn()}
        style={{ padding: 20, backgroundColor: "#000080" }}
      >
        <Text style={{ color: "black", margin: 10 }}>Logout</Text>
      </Button>
    </View>
  );
}

export default Logout;

import { View, Text, Button } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => {
          AsyncStorage.clear();
        }}
        title="Logout"
      />
    </View>
  );
};

export default HomeScreen;

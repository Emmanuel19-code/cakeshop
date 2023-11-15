import {
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderThree = ({iconname}) => {
    const navigation = useNavigation()
  return (
    <View className="flex-row items-center">
      <TouchableOpacity
        className="flex-1"
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="chevron-back-outline" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("cart")}>
        <Feather name="shopping-bag" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderThree;



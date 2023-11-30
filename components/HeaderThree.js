import {
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeProvider";

const HeaderThree = ({iconname}) => {
    const navigation = useNavigation()
    const {dark} = useTheme()
  return (
    <View className={dark?"flex-row items-center text-gray-700":"flex-row items-center"}>
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



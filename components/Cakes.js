import { Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeProvider";
import { AntDesign } from "@expo/vector-icons";

const Cakes = ({productid, rating, price, productName, image }) => {
  const navigation = useNavigation();
  const {dark} = useTheme()
  return (
    <TouchableOpacity
      className={
        dark
          ? "bg-gray-600 shadow-sm w-40 h-36 rounded m-1 mb-3 p-1"
          : "bg-white shadow-sm w-40 h-36 rounded m-1 mb-3 p-1"
      }
      onPress={() => navigation.navigate("product", { productid: productid })}
    >
      <Image source={require("../assets/Image6.jpg")} className="w-full h-20" />
      <Text className="text-xs font-bold">{productName}</Text>
      <Text className="font-bold text-xs">{price}</Text>
      <View className="flex-row items-center">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AntDesign
              name="star"
              size={14}
              color={dark ? "#111827" : "yellow"}
            />
          ))}
      </View>
      <View className="absolute bg-orange-300 left-1 top-1 px-1">
        <Text className="text-xs text-white">42%</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cakes;

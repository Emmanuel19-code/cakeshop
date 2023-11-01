import { Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Cakes = ({ rating, price, productName, image }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white shadow-sm w-40 h-36 rounded m-1 mb-3 p-1"
      onPress={() => navigation.navigate("product")}
    >
      <Image source={require("../assets/Image6.jpg")} className="w-full h-20" />
      <Text className="text-xs font-bold">{productName}</Text>
      <Text className="font-bold text-xs">{price}</Text>
      <View className="flex-row items-center">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <Text>&#x2B50;</Text>
          ))}
      </View>
      <View className="absolute bg-orange-300 left-1 top-1 px-1">
        <Text className="text-xs text-white">42%</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cakes;

import { Text,  View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeProvider";

const BannerContent = ({ imagePath, _percentage, productid }) => {
  const navigation = useNavigation();
  const {dark} = useTheme()
  return (
    <View
      className={
        dark
          ? "bg-gray-600 w-72 h-40 p-3 rounded m-1 flex-row"
          : "bg-black w-72 h-40 p-3 rounded m-1 flex-row"
      }
    >
      <View className="flex-1">
        <View className="flex-row items-center">
          <Text className="text-orange-400 text-2xl font-bold">20%</Text>
          <Text className="text-white font-bold text-2xl">OFF</Text>
        </View>
        <Text
          className={
            dark ? "text-gray-900 font-extrabold text-xs w-36" : "text-white text-xs w-36"
          }
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nobis
          dolore veniam reiciendis omnis facilis repudiandae.
        </Text>
        <TouchableOpacity
          className={
            dark
              ? "bg-gray-700 mt-1 w-20 p-1 rounded"
              : "bg-orange-300 w-20 p-1  rounded "
          }
          onPress={() =>
            navigation.navigate("product", { productid: productid })
          }
        >
          <Text className="text-white">order now</Text>
        </TouchableOpacity>
      </View>
      <View className="justify-center m-1">
        <Image source={imagePath} className="w-20 h-20" />
      </View>
    </View>
  );
};
export default BannerContent;

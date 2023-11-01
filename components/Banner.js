//import { Image } from "expo-image";
import { Text, ScrollView, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const Banner = (images, percentage) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-10 p-1"
    >
      <View className="bg-black w-72 h-40 p-3 rounded m-1 flex-row">
        <View className="flex-1">
          <View className="flex-row items-center">
            <Text className="text-orange-400 text-2xl font-bold">20%</Text>
            <Text className="text-white font-bold text-2xl">OFF</Text>
          </View>
          <Text className="text-white text-xs w-36">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nobis
            dolore veniam reiciendis omnis facilis repudiandae.
          </Text>
          <TouchableOpacity className="bg-orange-300 w-20 p-1  rounded ">
            <Text className="text-white">order now</Text>
          </TouchableOpacity>
        </View>
        <View className="justify-center m-1">
          <Image
            source={require("../assets/Image8.jpg")}
            className="w-20 h-20"
          />
        </View>
      </View>
      <View className="bg-black w-72 h-40 p-3 rounded m-1 flex-row">
        <View className="flex-1">
          <View className="flex-row items-center">
            <Text className="text-orange-400 text-2xl font-bold">20%</Text>
            <Text className="text-white font-bold text-2xl">OFF</Text>
          </View>
          <Text className="text-white text-xs w-36">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nobis
            dolore veniam reiciendis omnis facilis repudiandae.
          </Text>
          <TouchableOpacity className="bg-orange-300 w-20 p-1  rounded ">
            <Text className="text-white">order now</Text>
          </TouchableOpacity>
        </View>
        <View className="justify-center m-1">
          <Image
            source={require("../assets/Image7.jpg")}
            className="w-20 h-20"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Banner;

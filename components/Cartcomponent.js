import { Image, Text, View } from "react-native";
import React from "react";

const Cartcomponent = () => {
  return (
    <View className="bg-white shadow w-full h-auto p-2 rounded flex-row m-1">
      <Image
        source={require("../assets/Image6.jpg")}
        className="w-36 h-40 rounded"
      />
      <View className="m-2">
        <Text>Vanilla Combo</Text>
        <Text className="font-medium">Best Price $15</Text>
        <Text className="font-medium">Send extra gift with cake</Text>
        <Text className="font-medium">Rose flower $15</Text>
        <Text className="font-medium">Chocolate bar $15</Text>
        <View>
          <View className="flex-row items-center">
            <Text className="flex-1 font-medium">Price</Text>
            <Text className="text-orange-400">$15</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="flex-1 font-medium">Size</Text>
            <Text className="text-orange-400">small</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="flex-1 font-bold text-lg">Subtotal</Text>
            <Text className="text-orange-400">$15</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cartcomponent;

import { Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Cartcomponent = ({ id, price, size, productName, image }) => {
  return (
    <View className="bg-white shadow w-full h-auto p-2 rounded  m-1" key={id}>
      <View className="bg-white shadow w-full h-auto p-2 rounded flex-row m-1">
        <Image
          source={require("../assets/Image6.jpg")}
          className="w-36 h-40 rounded"
        />
        <View className="m-2">
          <Text className="font-bold text-lg">{productName}</Text>
          <Text className="font-medium">Best Price $15</Text>
          <Text className="font-medium">Send extra gift with cake</Text>
          <Text className="font-medium">Rose flower $15</Text>
          <Text className="font-medium">Chocolate bar $15</Text>
          <View>
            <View className="flex-row items-center">
              <Text className="flex-1 font-medium">Price</Text>
              <Text className="text-orange-400">{price}</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="flex-1 font-medium">Size</Text>
              <Text className="text-orange-400">{size}</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="flex-1 font-bold text-lg">Subtotal</Text>
              <Text className="text-orange-400">$15</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex-row-reverse ">
        <TouchableOpacity className="bg-blue-200 p-1 rounded" onPress={()=>alert("hello")}>
          <Text className="text-white">Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cartcomponent;

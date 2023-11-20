import { Text, TouchableOpacity, View,Image } from "react-native";
import React from "react";

const AccountOptions = ({option,text}) => {
  return (
    <View className="items-center ">
      <TouchableOpacity className="m-2">
        <Image
          source={require("../assets/Image21.png")}
          className="w-12 h-12 rounded-full bg-white "
        />
      </TouchableOpacity>
      <View className="flex-row items-center justify-center ">
        <Text className="text-gray-400">{text}</Text>
        <TouchableOpacity>
          <Text className="text-teal-300 ml-1">{option}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountOptions;

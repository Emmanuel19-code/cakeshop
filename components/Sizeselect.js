import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";


const Sizeselect = () => {
    const [selectsize,setSelectsize] = useState()
  return (
    <View className="">
      <Text className="text-gray-200 text-lg">Cake Size</Text>
      <TouchableOpacity
        className={
          selectsize === "Small"
            ? "bg-gray-100 rounded-full p-1 w-20 h-10 m-1 justify-center items-center opacity-20"
            : "bg-gray-100 rounded-full transparent p-1 w-20 h-10 m-1 justify-center items-center"
        }
        onPress={() => {
          setSelectsize("Small");
        }}
      >
        <Text>Small</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selectsize === "Medium"
            ? "bg-gray-100 rounded-full p-1 w-20 h-10 m-1 justify-center items-center opacity-20"
            : "bg-gray-100 rounded-full transparent p-1 w-20 h-10 m-1 justify-center items-center"
        }
        onPress={() => {
          setSelectsize("Medium");
        }}
      >
        <Text>Medium</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={
          selectsize === "Large"
            ? "bg-gray-100 rounded-full p-1 w-20 h-10 m-1 justify-center items-center opacity-20"
            : "bg-gray-100 rounded-full transparent p-1 w-20 h-10 m-1 justify-center items-center"
        }
        onPress={() => {
          setSelectsize("Large");
        }}
      >
        <Text>Large</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sizeselect;

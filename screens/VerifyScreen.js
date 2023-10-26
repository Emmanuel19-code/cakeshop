import { Text, TouchableOpacity, View, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const VerifyScreen = () => {
  const navigation = useNavigation()
  return (
    <View className="p-2 flex-1">
      <View className="mt-10 ">
        <TouchableOpacity className="mb-2">
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="font-bold text-3xl">Verify</Text>
        <Text className="text-sm text-slate-500 font-bold">
          Enter the 4 digit code sent to your number ending *****6783
        </Text>
      </View>
      <View className="mt-4 flex-1">
        <View className="m-2 flex-row items-center justify-center">
          <View className="w-10 h-10 p-2 m-1 border-2 border-gray-400 rounded">
            <TextInput />
          </View>
          <View className="w-10 h-10 p-2 m-1 border-2 border-gray-400 rounded">
            <TextInput />
          </View>
          <View className="w-10 h-10 p-2 m-1 border-2 border-gray-400 rounded">
            <TextInput />
          </View>
          <View className="w-10 h-10 p-2 m-1 border-2 border-gray-400 rounded">
            <TextInput />
          </View>
        </View>
        <Text className="text-center text-slate-400">Resends in 00:28</Text>
      </View>
      <View className="justify-center items-center mb-2">
        <TouchableOpacity
          className="w-64 p-2 rounded bg-teal-500"
          onPress={() => navigation.navigate("mainpage")}
        >
          <Text className="text-white text-xl text-center">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyScreen;

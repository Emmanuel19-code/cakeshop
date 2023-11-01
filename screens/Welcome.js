import { Text, TouchableOpacity, View, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

const Welcome = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return (
    <View className="p-2">
      <View className="mt-10 ">
        <TouchableOpacity className="mb-2">
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="font-bold text-2xl">Welcome</Text>
        <Text className="text-sm text-slate-500 font-bold">
          Sign in to continue
        </Text>
      </View>
      <View className="mt-20">
        <View className="m-2">
          <Text>Email Address</Text>
          <View className="w-full p-2 border-2 border-gray-400 rounded">
            <TextInput
              placeholder="Enter email Address"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>
        <View className="m-2">
          <Text>Password</Text>
          <View className="w-full p-2 border-2 border-gray-400 rounded">
            <TextInput
              placeholder="Enter password"
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        <View className="flex-row items-center m-2">
          <View className="flex-1 flex-row items-center">
            <Checkbox />
            <Text>Remeber me </Text>
          </View>
          <TouchableOpacity>
            <Text className="text-teal-400">Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity className="bg-teal-300 w-80 m-2 p-2">
        <Text className="text-white font-bold text-center text-xl">
          Sign In
        </Text>
      </TouchableOpacity>
      <Text className="text-center text-slate-400 mt-5">or login with</Text>
      <View></View>
    </View>
  );
};

export default Welcome;

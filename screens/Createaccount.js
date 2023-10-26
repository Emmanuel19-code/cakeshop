import { Text, TouchableOpacity, View, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Createaccount = () => {
    const navigation = useNavigation()
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
      <View className="mt-5">
        <View className="m-2">
          <Text className="font-bold">Full Name</Text>
          <View className="w-full p-2 border-2 border-gray-400 rounded">
            <TextInput placeholder="Enter full name" />
          </View>
        </View>
        <View className="m-2">
          <Text className="font-bold">Email Address</Text>
          <View className="w-full p-2 border-2 border-gray-400 rounded">
            <TextInput placeholder="Enter email Address" />
          </View>
        </View>
        <View className="m-2">
          <Text className="font-bold">Phone Number</Text>
          <View className="w-full p-2 border-2 border-gray-400 rounded">
            <TextInput placeholder="Enter phone number" />
          </View>
        </View>
        <View className="m-2">
          <Text className="font-bold">Password</Text>
          <View className="w-full p-2 border-2 border-gray-400 rounded">
            <TextInput placeholder="Enter password" />
          </View>
        </View>
      </View>
      <TouchableOpacity
        className="bg-slate-200 w-80 m-2 p-2"
        onPress={() => navigation.navigate("verify")}
      >
        <Text className="text-teal-300 font-bold text-center text-xl">
          Sign Up
        </Text>
      </TouchableOpacity>
      <Text className="text-center text-slate-400 mt-5">or Sign up with</Text>
      <View></View>
      <View className="flex-row justify-center">
        <Text className="text-slate-400">Already have an account?</Text>
        <TouchableOpacity>
          <Text className="text-teal-300 ml-1">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Createaccount;



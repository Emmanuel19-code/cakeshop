import { Text, TouchableOpacity, View, TextInput,Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import InputFieldLogin from "../components/InputFieldLogin";
import AccountOptions from "../components/AccountOptions";

const Createaccount = () => {
  const navigation = useNavigation();
  const [fullname,setFullname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [phone,setPhone] = useState("")
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
        <InputFieldLogin
          inputname={"Full Name"}
          placeholderText={"Please enter your full name"}
        />
        <InputFieldLogin
          inputname={"Email Address"}
          placeholderText={"Please enter your email Address"}
        />
        <InputFieldLogin
          inputname={"Phone Number"}
          placeholderText={"Please enter your phone number"}
        />
        <InputFieldLogin
          inputname={"Password"}
          placeholderText={"Please enter your password"}
        />
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
      <AccountOptions
       option={"login"}
       text={"Already having an account ?"}
      />
    </View>
  );
};

export default Createaccount;

import { Text, TouchableOpacity, View, Image} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import InputFieldLogin from "../components/InputFieldLogin";
import AccountOptions from "../components/AccountOptions";
import { TextstyleOne, TextstyleTwo } from "../constants/TextStyles";
import { useTheme } from "../context/ThemeProvider";

const Welcome = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ischecked,setIschecked] = useState(false)
  const { dark, colors, setScheme } = useTheme();
  return (
    <View className="p-2">
      <View className="mt-10 ">
        <TouchableOpacity className="mb-2">
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="font-bold text-2xl">Welcome</Text>
        <Text className={dark?TextstyleTwo:TextstyleOne}>
          Sign in to continue
        </Text>
      </View>
      <View className="mt-20">
        <InputFieldLogin
          inputname={"Email Address"}
          placeholderText={"Enter your email"}
        />
        <InputFieldLogin
          inputname={"Password"}
          placeholderText={"Enter Password"}
        />
        <View className="flex-row items-center m-2">
          <View className="flex-1 flex-row items-center">
            <Checkbox 
             value={ischecked}
             onValueChange={setIschecked}
            />
            <Text className="ml-1">Remeber me </Text>
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
      <AccountOptions
      option={"Sign Up"}
      text={"Don't have an account yet ?"}
      />
    </View>
  );
};

export default Welcome;

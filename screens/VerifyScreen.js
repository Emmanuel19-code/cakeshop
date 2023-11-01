import { Text, TouchableOpacity, View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const VerifyScreen = () => {
  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(60); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    if (seconds === 0) {
      setTimeout(() => {
        handleResendOTP();
      }, 1000);
    }
    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const handleResendOTP = () => {
    // You can implement your OTP resend logic here.
    // This can include making an API call to request a new OTP.
    // After requesting a new OTP, you can reset the timer to 5 minutes.
    alert("Resedning otp token");
    setSeconds(60); // Reset the timer to 5 minutes
  };
  return (
    <View className="p-2 flex-1">
      <View className="mt-10 ">
        <TouchableOpacity className="mb-2">
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="font-bold text-3xl">Verify</Text>
        <Text className="text-sm text-slate-500 font-bold">
          Enter the 4 digit code sent to your number ending ******6783 or email
          *****@gmail.com
        </Text>
      </View>
      <View className="mt-4 flex-1">
        <View className="m-2 flex-row items-center justify-center">
          <View className="w-10 h-10 p-2 m-1 border-2 border-gray-400 rounded">
            <TextInput keyboardType="numeric" />
          </View>
          <View className="w-10 h-10 p-2 m-1 border-2 border-gray-400 rounded">
            <TextInput keyboardType="numeric" />
          </View>
          <View className="w-10 h-10 p-2 m-1 border-2 border-gray-400 rounded">
            <TextInput keyboardType="numeric"/>
          </View>
          <View className="w-10 h-10 p-2 m-1 border-2 border-gray-400 rounded">
            <TextInput keyboardType="numeric"/>
          </View>
        </View>
        <View className="flex-row items-center justify-center">
          <Text className="text-center text-slate-400">Resends in </Text>
          <Text>
            {minutes < 10 ? "0" : ""}
            {minutes}:{remainingSeconds < 10 ? "0" : ""}
            {remainingSeconds}
          </Text>
        </View>
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

import { Text, TouchableOpacity, View, TextInput } from "react-native";
import React, { useState, useEffect,useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const VerifyScreen = ({email,phonenumber}) => {
  const navigation = useNavigation();
  const [timer, setTimer] = useState({ seconds: 180, disable: true });
  const { seconds, disable } = timer;

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setTimer((prevState) => ({
          ...prevState,
          seconds: prevState.seconds - 1,
        }));
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const otpInputRefs = Array(4)
    .fill()
    .map(() => useRef(null));

  useEffect(() => {
    otpInputRefs[0]?.current?.focus();
  }, []);

  const handleInputChange = (text, index) => {
    if (text.length === 1 && index < otpInputRefs.length - 1) {
      otpInputRefs[index + 1]?.current?.focus();
    }
    setTimer((prevState) => ({ ...prevState, disable: text.length <= 0 }));
  };

  const handleResendOTP = () => {
    // Call API here
    alert("Resending OTP token");
    setTimer({ seconds: 180, disable: true });
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
          {otpInputRefs.map((ref, index) => (
            <View className="w-10 h-10 p-2 m-1 border-2 border-gray-400 rounded">
              <TextInput
                key={index}
                keyboardType="numeric"
                className="text-center"
                maxLength={1}
                ref={ref}
                onChangeText={(text) => handleInputChange(text, index)}
                autoFocus={index === 0}
              />
            </View>
          ))}
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
          className={disable?"w-64 p-2 rounded bg-gray-400":"w-64 p-2 rounded bg-teal-500"}
          onPress={() => navigation.navigate("mainpage")}
          disabled={disable}
        >
          <Text className="text-white text-xl text-center">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyScreen;

{
  /*
<View className="w-10 h-10 p-2 m-1 border-2 border-gray-400 rounded">
            <TextInput
              keyboardType="numeric"
              className="text-center"
             
            />
          </View>
          <View className="w-10 h-10 p-2 m-1 border-2 border-gray-400 rounded">
            <TextInput
              keyboardType="numeric"
              className="text-center"
              
            />
          </View>
          <View className="w-10 h-10 p-2 m-1 border-2 border-gray-400 rounded">
            <TextInput
              keyboardType="numeric"
              className="text-center"
             
            />
          </View>


*/
}
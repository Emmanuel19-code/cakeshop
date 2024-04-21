import {
  Text,
  View,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const SelectModepayment = () => {
    const [payment, setPayment] = useState("");
  return (
    <View className="p-2 border border-gray-200 shadow">
      <Text className="text-lg font-bold">Payment Method</Text>
      <Pressable
        className="flex-row items-center m-1"
        onPress={() => setPayment("cash")}
      >
        <FontAwesome name="money" size={24} color="black" />
        <Text className="ml-2 text-lg flex-1">Cash On delivery</Text>
        {payment === "cash" ? (
          <AntDesign name="checkcircle" size={24} color="#4A98E9" />
        ) : (
          <Entypo name="circle" size={24} color="#56636f" />
        )}
      </Pressable>
      <Pressable
        className="flex-row items-center m-1"
        onPress={() => setPayment("digital")}
      >
        <AntDesign name="creditcard" size={24} color="black" />
        <Text className="ml-2 text-lg flex-1">Digital Payment</Text>
        {payment === "digital" ? (
          <AntDesign name="checkcircle" size={24} color="#4A98E9" />
        ) : (
          <Entypo name="circle" size={24} color="#56636f" />
        )}
      </Pressable>
      <ConfirmButton routename={"onlinepayment"} name={"Confirm"} />
    </View>
  );
};

export default SelectModepayment;

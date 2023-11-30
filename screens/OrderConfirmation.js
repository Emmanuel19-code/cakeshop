import { Text, ScrollView, View, TouchableOpacity, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import OrderProduct from "../components/OrderProduct";
import HeaderOne from "../components/HeaderOne";
import ConfirmButton from "../components/ConfirmButton";
import { Entypo } from "@expo/vector-icons";



const OrderConfirmation = ({deliverlocation,name}) => {
  const [payment,setPayment] = useState("")
  return (
    <View className="bg-white h-screen">
      <HeaderOne headertitle={"Order Confirmation"} />
      <View className="bg-white shadow-2xl border border-gray-200 w-full p-1 mt-2 flex-row items-center">
        <Image
          source={require("../assets/Image10.jpg")}
          className="w-10 h-10 rounded-full"
        />
        <View className="ml-1">
          <Text className="font-bold text-lg">Esther</Text>
          <View>
            <Text>Deliver to</Text>
            <Text>No 4 Hibiscus street</Text>
          </View>
        </View>
      </View>
      <ScrollView className="p-2">
        <Text className="text-lg font-bold">Order Summary</Text>
        <OrderProduct />
        <OrderProduct />
        <OrderProduct />
        <OrderProduct />
        <OrderProduct />
        <View className="mb-5 mt-5">
          <View className="flex-row justify-evenly">
            <Text className="font-medium">Subtotal</Text>
            <Text className="text-orange-400">$12</Text>
          </View>
          <View className="flex-row justify-evenly">
            <Text className="font-medium">Discount</Text>
            <Text className="text-orange-400">$12</Text>
          </View>
          <View className="flex-row justify-evenly">
            <Text className="font-medium">Delivery fee</Text>
            <Text className="text-orange-400 mr-3">$12</Text>
          </View>
          <View className="flex-row justify-evenly">
            <Text className="font-bold text-lg">Total</Text>
            <Text className="text-orange-400 ml-1 font-bold">$12</Text>
          </View>
        </View>
      </ScrollView>
      <View className="p-2 border border-gray-200 shadow">
        <Text className="text-lg font-bold">Payment Method</Text>
        <Pressable className="flex-row items-center m-1" onPress={()=>setPayment("cash")}>
          <FontAwesome name="money" size={24} color="black" />
          <Text className="ml-2 text-lg flex-1">Cash On delivery</Text>
          {payment === "cash" ? (
            <AntDesign name="checkcircle" size={24} color="#4A98E9" />
          ) : (
            <Entypo name="circle" size={24} color="#56636f" />
          )}
        </Pressable>
        <Pressable className="flex-row items-center m-1" onPress={()=>setPayment("digital")}>
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
    </View>
  );
};

export default OrderConfirmation;

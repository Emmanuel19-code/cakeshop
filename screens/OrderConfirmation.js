import { Text, ScrollView, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import DeliveryDateSelect from "../components/DeliveryDateSelect";
import OrderProduct from "../components/OrderProduct";



const OrderConfirmation = () => {
    const navigation = useNavigation()
  return (
    <View className="bg-white h-screen">
      <View className="flex-row items-center bg-teal-600 p-2 shadow-lg">
        <TouchableOpacity className="" onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-xl">Order Confirmation</Text>
      </View>
      <View className="bg-white shadow-2xl border border-gray-200 w-full p-2 mt-2 flex-row items-center">
        <Image
          source={require("../assets/Image10.jpg")}
          className="w-20 h-20 rounded-full"
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
          <View className="flex-row justify-center justify-evenly">
            <Text className="font-medium">Subtotal</Text>
            <Text className="text-orange-400">$12</Text>
          </View>
          <View className="flex-row justify-center justify-evenly">
            <Text className="font-medium">Discount</Text>
            <Text className="text-orange-400">$12</Text>
          </View>
          <View className="flex-row justify-center justify-evenly">
            <Text className="font-medium">Delivery fee</Text>
            <Text className="text-orange-400 mr-3">$12</Text>
          </View>
          <View className="flex-row justify-center justify-evenly">
            <Text className="font-bold text-lg">Total</Text>
            <Text className="text-orange-400 ml-1 font-bold">$12</Text>
          </View>
        </View>
      </ScrollView>
      <View className="p-2 border border-gray-200 shadow">
        <Text className="text-lg font-bold">Payment Method</Text>
        <View className="flex-row items-center m-1">
          <FontAwesome name="money" size={24} color="black" />
          <Text className="ml-2 text-lg">Cash On delivery</Text>
        </View>
        <View className="flex-row items-center m-1">
          <AntDesign name="creditcard" size={24} color="black" />
          <Text className="ml-2 text-lg">Digital Payment</Text>
        </View>
        <View className="mt-2 items-center">
            <TouchableOpacity className="bg-teal-400 w-44 p-1 rounded">
                 <Text className="text-white text-lg text-center">Confirm</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderConfirmation;
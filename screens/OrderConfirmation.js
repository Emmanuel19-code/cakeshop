import { Text, ScrollView, View, Image} from "react-native";
import React  from "react";
import OrderProduct from "../components/OrderProduct";
import HeaderOne from "../components/HeaderOne";
import ConfirmButton from "../components/ConfirmButton";




const OrderConfirmation = ({deliverlocation,name}) => {
  
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
      <Text className="text-lg font-bold">Order Summary</Text>
      <ScrollView className="p-2">
        <OrderProduct />
        <OrderProduct />
        <OrderProduct />
        <OrderProduct />
        <OrderProduct />
      </ScrollView>
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
      <ConfirmButton routename={"modepayment"} name={"Select Mode of Payment"} />
    </View>
  );
};

export default OrderConfirmation;

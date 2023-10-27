import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Cartcomponent from "../components/Cartcomponent";
import { useNavigation } from "@react-navigation/native";
import DeliveryDate from "../components/DeliveryDate";
import DeliveryDateSelect from "../components/DeliveryDateSelect";

const Delivery = () => {
    const navigation = useNavigation()
  return (
    <View className="bg-white h-screen">
      <View className="flex-row items-center bg-teal-600 p-2">
        <TouchableOpacity className="" onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-xl">Delivery</Text>
      </View>
      <View className="bg-white shadow-2xl border border-gray-200 w-full p-2 mt-5">
        <View className=" ">
          <Text>Deliver to</Text>
          <View>
            <Text>No 4 Hibiscus street</Text>
          </View>
        </View>
      </View>
      <View className="bg-white w-full border border-gray-200 mt-2 shadow-xl p-1">
        <Text className="font-medium m-2">Book a date and time</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <DeliveryDate />
          <DeliveryDate />
          <DeliveryDate />
          <DeliveryDate />
          <DeliveryDate />
          <DeliveryDate />
        </ScrollView>
      </View>
      <View className="p-1">
        <DeliveryDateSelect />
        <DeliveryDateSelect />
        <DeliveryDateSelect />
        <DeliveryDateSelect />
        <DeliveryDateSelect />
      </View>
      <View className="items-center m-2">
        <TouchableOpacity
          className="bg-teal-400 w-40 rounded p-1"
          onPress={() => navigation.navigate("orderconfirmation")}
        >
          <Text className="text-white text-xl text-center">Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Delivery;

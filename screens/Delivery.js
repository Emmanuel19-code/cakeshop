import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Cartcomponent from "../components/Cartcomponent";
import { useNavigation } from "@react-navigation/native";
import DeliveryDate from "../components/DeliveryDate";
import DeliveryDateSelect from "../components/DeliveryDateSelect";
import HeaderOne from "../components/HeaderOne";

const Delivery = (deliverylocation) => {
    const navigation = useNavigation()
  return (
    <View className="bg-white h-screen">
      <HeaderOne headertitle={"Delivery"} />
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
          <DeliveryDate day={"Tues"} daydate={1} />
          <DeliveryDate day={"Wed"} daydate={2} />
          <DeliveryDate day={"Thurs"} daydate={3} />
          <DeliveryDate day={"Fri"} daydate={4} />
          <DeliveryDate day={"Sat"} daydate={5} />
          <DeliveryDate day={"Fir"} daydate={6} />
        </ScrollView>
      </View>
      <View className="p-1">
        <DeliveryDateSelect />
        <DeliveryDateSelect />
        <DeliveryDateSelect />
        <DeliveryDateSelect />
        <DeliveryDateSelect />
      </View>
      <ConfirmButton routename={"orderconfirmation"} name={"Confirm Order"}/>
    </View>
  );
};

export default Delivery;

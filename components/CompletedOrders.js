import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../context/ThemeProvider";

const CompletedOrders = ({
  id,
  productName,
  quantity,
  price,
  deliverydate,
  status,
}) => {
  const navigation = useNavigation();
  const { dark } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("trackorder", { orderid: id })}
      className=""
    >
      <View className="p-1">
        <View
          className={
            dark
              ? "bg-gray-600 shadow rounded p-1 flex-row items-center h-20"
              : "bg-white shadow rounded p-1 flex-row items-center h-20"
          }
        >
          <Image
            source={require("../assets/Image5.jpg")}
            className="w-14 h-14 rounded-full"
          />
          <View className="ml-2 flex-1">
            <Text className={dark ? "text-gray-900 font-bold" : ""}>
              {productName}
            </Text>
            <Text className={dark ? "text-gray-900 font-bold" : ""}>
              {quantity} item with 2 Gifts - ghs {price}
            </Text>
            <Text className={dark?"text-gray-900 font-bold":"text-orange-400"}>{deliverydate}</Text>
          </View>
          <View
            className={
              status === "Pending"
                ? "bg-teal-400 p-2 rounded"
                : "bg-slate-200 p-2 rounded"
            }
          >
            <Text className={"text-white"}>{status}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CompletedOrders;

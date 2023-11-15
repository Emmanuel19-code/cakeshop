import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

const PendingOrderDetails = () => {
  const route = useRoute(); 
  const { orderid } = route.params;
  return (
    <View className="">
      <Text>{JSON.stringify(orderid)}</Text>
    </View>
  );
};

export default PendingOrderDetails;

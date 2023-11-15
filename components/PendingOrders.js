import { Text, View,Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const PendingOrders = ({productName,quantity,deliverydate,deliverylocation,price,deliverytime}) => {
  const navigation = useNavigation()
  return (
    <ScrollView className="p-3">
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("pendingoderdetails", { orderid: 2 })
        }
      >
        <View className="bg-white shadow p-2 rounded">
          <Text className="text-lg font-bold">PendingOrders</Text>
          <Image
            source={require("../assets/Image8.jpg")}
            className="w-full h-40 rounded"
          />
          <Text className="font-bold mt-2">{productName}</Text>
          <Text className="">
            {quantity} item(s) - ghs {price}
          </Text>
          <Text className="">Deliver to {deliverylocation}</Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-orange-400">
              {deliverydate} - {deliverytime}
            </Text>
            <TouchableOpacity
              className="bg-teal-500 px-2 py-1"
              onPress={() => navigation.navigate("trackorder")}
            >
              <Text className="text-white font-bold">Track Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default PendingOrders


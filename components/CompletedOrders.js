import { Image, Text, View } from 'react-native'
import React from 'react'

const CompletedOrders = (id,productName,quantity,price,deliverydate) => {
  return (
    <View className="p-3 ">
      <View className="bg-white shadow rounded p-1 flex-row items-center h-20">
        <Image
          source={require("../assets/Image5.jpg")}
          className="w-14 h-14 rounded-full"
        />
        <View className="ml-2 flex-1">
          <Text>{productName}</Text>
          <Text>{quantity} item with 2 Gifts - ghs {price}</Text>
          <Text className="text-orange-400">{deliverydate}</Text>
        </View>
        <View className="bg-slate-400 p-2 rounded">
            <Text className="text-white">Completed</Text>
        </View>
      </View>
    </View>
  );
}

export default CompletedOrders


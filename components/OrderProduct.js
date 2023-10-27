import {  Text, View,Image } from 'react-native'
import React from 'react'

const OrderProduct = () => {
  return (
    <View className="m-1">
      <View className="flex-row items-center border-b border-gray-200 p-2">
        <Image
          source={require("../assets/Image6.jpg")}
          className="w-36 h-40  rounded"
        />
        <View className="m-2">
          <Text className="font-bold text-lg">Vanilla Combo</Text>
          <View className="flex-row items-center">
            <Text className="font-medium">Best Price </Text>
            <Text className="text-orange-400">$15</Text>
          </View>
          <Text className="font-medium">Send extra gift with cake</Text>
          <View className="flex-row items-center">
            <Text className="font-medium">Rose flower </Text>
            <Text className="text-orange-400">$15</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="font-medium">Chocolate bar </Text>
            <Text className="text-orange-400">$15</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default OrderProduct


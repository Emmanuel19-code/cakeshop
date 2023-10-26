import { StyleSheet, Text, View,Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const PendingOrders = () => {
  return (
    <ScrollView className="p-3">
      <View className="bg-white shadow p-2 rounded">
        <Text className="text-lg font-bold">PendingOrders</Text>
        <Image
          source={require("../assets/Image8.jpg")}
          className="w-full h-40 rounded"
        />
        <Text className="font-bold mt-2">Vanila Combo</Text>
        <Text className="">1 item - ghs 24</Text>
        <Text className="">Deliver to Oyarifa salem</Text>
        <View className="flex-row items-center justify-between">
          <Text className="text-orange-400">Wed 28 October - 11:00 AM</Text>
          <TouchableOpacity className="bg-teal-500 px-2 py-1">
            <Text className="text-white font-bold">View</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default PendingOrders

const styles = StyleSheet.create({})
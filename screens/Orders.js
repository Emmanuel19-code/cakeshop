import { StatusBar, Text, TouchableOpacity, View,ScrollView} from 'react-native'
import React from 'react'
import PendingOrders from '../components/PendingOrders'
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import CompletedOrders from '../components/CompletedOrders';

const Orders = () => {
  return (
    <ScrollView>
      <View className="flex-row items-center justify-between bg-teal-600 w-full p-2">
        <View className="flex-row items-center">
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg">My Orders</Text>
        </View>
        <TouchableOpacity>
          <Feather name="shopping-bag" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <PendingOrders />
      <CompletedOrders />
      <CompletedOrders />
      <CompletedOrders />
      <CompletedOrders />
    </ScrollView>
  );
}

export default Orders


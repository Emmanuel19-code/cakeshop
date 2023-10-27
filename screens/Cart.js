import {Text, ScrollView ,View,TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import Cartcomponent from '../components/Cartcomponent';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const navigation = useNavigation()
  return (
    <View className="h-screen">
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <View className="flex-row items-center bg-teal-600 p-2">
          <TouchableOpacity className="" onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-xl">Cart</Text>
        </View>
        <Cartcomponent />
        <Cartcomponent />
        <Cartcomponent />
        <Cartcomponent />
        <View className="flex-row-reverse m-1">
          <TouchableOpacity className="bg-gray-400 p-2 w-24 mr-2 rounded">
            <Text className="text-white text-center">Clear Cart</Text>
          </TouchableOpacity>
        </View>
        <View className="items-center mt-10">
          <TouchableOpacity
            className="bg-teal-600 rounded w-32 p-2"
            onPress={() => navigation.navigate("delivery")}
          >
            <Text className="text-white text-center">Checkout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default Cart


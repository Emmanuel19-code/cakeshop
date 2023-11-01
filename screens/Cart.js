import {Text, ScrollView ,View,TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import Cartcomponent from '../components/Cartcomponent';
import { useNavigation } from '@react-navigation/native';
import HeaderOne from '../components/HeaderOne';
import ConfirmButton from '../components/ConfirmButton';

const Cart = () => {
    const navigation = useNavigation()
  return (
    <View className="h-screen">
      <ScrollView showsVerticalScrollIndicator={false} className="">
       <HeaderOne headertitle={"Cart"}/>
        <Cartcomponent />
        <Cartcomponent />
        <Cartcomponent />
        <Cartcomponent />
        <View className="flex-row-reverse m-1">
          <TouchableOpacity className="bg-gray-400 p-2 w-24 mr-2 rounded">
            <Text className="text-white text-center">Clear Cart</Text>
          </TouchableOpacity>
        </View>
        <ConfirmButton
        routename={"delivery"}
        name={"Checkout"}
        />
      </ScrollView>
    </View>
  );
}

export default Cart


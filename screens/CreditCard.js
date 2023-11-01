import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderOne from '../components/HeaderOne';
import ConfirmButton from '../components/ConfirmButton';

const CreditCard = () => {
  return (
    <View className="bg-white h-screen">
      <HeaderOne headertitle={"Online Payment"} />
      <View className="bg-white shadow border-gray-300 border-2">
        <View>
          <Text>Master Card</Text>
        </View>
        <View>
          <Text>Paypal</Text>
        </View>
        <View>
          <Text>Payoneer</Text>
        </View>
      </View>
      <ConfirmButton name={"Confirm"}/>
    </View>
  );
}

export default CreditCard


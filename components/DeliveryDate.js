import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'


const DeliveryDate = () => {
  return (
    <TouchableOpacity className="w-12 m-2 h-14 mt-1 border items-center justify-center border-teal-400 rounded">
      <Text>Mon</Text>
      <Text className="font-bold">10</Text>
    </TouchableOpacity>
  );
}

export default DeliveryDate


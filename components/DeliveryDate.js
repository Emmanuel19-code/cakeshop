import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'


const DeliveryDate = ({day,daydate}) => {
  return (
    <TouchableOpacity className="w-12 m-2 h-14 mt-1 border items-center justify-center border-teal-400 rounded">
      <Text>{day}</Text>
      <Text className="font-bold">{daydate}</Text>
    </TouchableOpacity>
  );
}

export default DeliveryDate


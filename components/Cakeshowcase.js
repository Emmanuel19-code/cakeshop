import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cakes from './Cakes'

const Cakeshowcase = () => {
  return (
    <View className="w-96 flex-wrap flex-row p-1 ">
      <Cakes rating={5}/>
      <Cakes rating={4}/>
      <Cakes rating={1}/>
      <Cakes rating={2}/>
      <Cakes rating={3}/>
      <Cakes rating={4}/>
      <Cakes />
      <Cakes />
    </View>
  );
}

export default Cakeshowcase

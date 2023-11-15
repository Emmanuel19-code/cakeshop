import { View } from 'react-native'
import React from 'react'
import Cakes from './Cakes'

const Cakeshowcase = () => {
  return (
    <View className="w-96 flex-wrap flex-row p-1 ">
      <Cakes rating={5} productid={1}/>
      <Cakes rating={4} productid={1}/>
      <Cakes rating={1} productid={1}/>
      <Cakes rating={2} productid={1}/>
      <Cakes rating={3} productid={1}/>
      <Cakes rating={4} productid={1}/>
      <Cakes rating={4} productid={1}/>
      <Cakes rating={4} productid={1}/>
    </View>
  );
}

export default Cakeshowcase

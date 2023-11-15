import { Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const CakeTypes = ({caketypeId,productName,imagePath}) => {
  return (
    <View>
      <TouchableOpacity className="m-1 bg-blue-200 w-14 h-14 items-center justify-center rounded-full">
        <Image
          source={require("../assets/Image2.jpg")}
          className="w-12 h-12 object-contain rounded-full"
        />
      </TouchableOpacity>
      <Text>{productName}</Text>
    </View>
  );
}

export default CakeTypes


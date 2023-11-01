import { Text, View } from 'react-native'
import React from 'react'

const DeliveryDateSelect = (fromtime,toTime) => {
  return (
    <View className="m-1">
      <View className="flex-row items-center border-b border-gray-200 p-2">
             <Text className="flex-1"> 8 : 00 AM ~ 9 : 00 AM</Text>
         <View>
            <Text>Free</Text>
         </View>
      </View>
    </View>
  )
}

export default DeliveryDateSelect


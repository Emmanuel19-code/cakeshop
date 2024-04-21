import { View, Text } from 'react-native'
import React from 'react'

const BannerSkeleton = () => {
  return (
    <View className="bg-white shadow w-72 h-40 rounded m-1 flex-row p-3">
      <View className="flex-1">
        <View className="m-1 bg-gradient-to-tr from-slate-300 w-12 p-1">

        </View>
        <View className="bg-gradient-to-tr from-slate-300 m-1 w-20 h-20 bg-slate-400">

        </View>
        <Text className="bg-gradient-to-tr from-slate-300 w-10 h-2 p-1"></Text>
      </View>
      <View className="bg-gradient-to-tr from-slate-300 w-20 h-20">
         
      </View>
    </View>
  );
}

export default BannerSkeleton
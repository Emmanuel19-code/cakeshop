import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderTwo = ({name}) => {
  return (
    <View className="flex-row items-center justify-between bg-teal-600 w-full p-2">
      <View className="flex-row items-center">
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg">{name}</Text>
      </View>
      <TouchableOpacity>
        <Feather name="shopping-bag" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default HeaderTwo


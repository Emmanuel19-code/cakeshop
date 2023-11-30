import {  Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import {Feather} from "@expo/vector-icons"
import { useTheme } from '../context/ThemeProvider';

const HeaderTwo = ({name}) => {
  const {dark} = useTheme()
  return (
    <View className={dark?"flex-row items-center justify-between bg-gray-700 w-full p-2 z-50":"flex-row items-center justify-between bg-teal-600 w-full p-2 z-50"}>
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


import {  Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeProvider';

const HeaderOne = ({headertitle}) => {
  const navigation = useNavigation()
  const {dark} = useTheme()
  return (
    <View className="">
      <View className={dark?"flex-row items-center bg-gray-700 p-2 z-50":"flex-row items-center bg-teal-600 p-2 z-50"}> 
        <TouchableOpacity className="" onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-xl ml-4">{headertitle}</Text>
      </View>
    </View>
  );
}

export default HeaderOne

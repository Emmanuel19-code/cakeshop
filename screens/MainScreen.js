import { ScrollView, Text,  View, TouchableOpacity } from 'react-native'
import React from 'react'
import MainScreenScrollview from '../components/MainScreenScrollview';
import Banner from '../components/Banner';
import { Ionicons,Feather } from "@expo/vector-icons";
import Cakeshowcase from '../components/Cakeshowcase';
import SearchField from '../components/SearchField';
import { useTheme } from '../context/ThemeProvider';

const MainScreen = () => {
  const {dark} = useTheme()
  return (
    <ScrollView className={dark?"bg-gray-700 p-2":"p-2"}>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text>Perfect cakes</Text>
        </View>
        <TouchableOpacity>
          <Feather name="shopping-bag" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <SearchField/>
      <MainScreenScrollview />
      <Banner />
      <Cakeshowcase/>
    </ScrollView>
  );
}

export default MainScreen


import { ScrollView, Text,  View, TouchableOpacity } from 'react-native'
import React from 'react'
import MainScreenScrollview from '../components/MainScreenScrollview';
import Banner from '../components/Banner';
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Cakeshowcase from '../components/Cakeshowcase';
import SearchField from '../components/SearchField';

const MainScreen = () => {
  return (
    <ScrollView className="p-2">
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


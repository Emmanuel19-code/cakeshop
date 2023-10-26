import { ScrollView, Text, TextInput, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MainScreenScrollview from '../components/MainScreenScrollview';
import Banner from '../components/Banner';
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Cakeshowcase from '../components/Cakeshowcase';

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
      <View className="bg-slate-300 p-2 mt-5 rounded flex-row items-center">
        <EvilIcons name="search" size={24} color="black" />
        <TextInput placeholder="search your cake" />
      </View>
      <MainScreenScrollview />
      <Banner />
      <Cakeshowcase/>
    </ScrollView>
  );
}

export default MainScreen


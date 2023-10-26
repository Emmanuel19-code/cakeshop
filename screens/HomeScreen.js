import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation()
  return (
    <View className="p-5 items-center flex-1">
      <View className="p-2 flex-1">
        <Image source={require("../assets/Image3.jpg")} className="w-80 h-72 flex-1 object-contain" />
      </View>
      <View className="">
        <Text className="font-bold text-xl">Get Started with PerfectCakez</Text>
        <TouchableOpacity className="bg-teal-300 p-1 w-64 rounded" onPress={()=>navigation.navigate("welcome")}>
          <Text className="text-center text-white text-lg">
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-64 bg-slate-200 mt-4 p-1" onPress={()=>navigation.navigate("createaccount")}>
          <Text className="text-center text-teal-400 text-lg">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({})
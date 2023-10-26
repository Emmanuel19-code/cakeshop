import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EvilIcons } from "@expo/vector-icons";

const FavouritesContainer = ({image,rating,price,name}) => {
  return (
    <View className="p-2">
      <View className="p-3 bg-white shadow rounded flex-row items-center justify-between">
        <View className="">
          <Image
            source={require("../assets/Image5.jpg")}
            className="w-40 h-40"
          />
          <Text>Vanila Combo</Text>
          <View className="flex-row items-center">
            {Array(5)
              .fill()
              .map((_, i) => (
                <Text>&#x2B50;</Text>
              ))}
          </View>
          <View className="absolute bg-orange-300 left-1 top-1 px-1">
            <Text className="text-xs text-white">42%</Text>
          </View>
          <Text className="text-orange-500 font-medium">$24</Text>
        </View>
        <View className="items-center">
          <TouchableOpacity>
            <EvilIcons name="trash" size={30} color="black" />
          </TouchableOpacity>
          <Text className="font-bold text-xs">Remove from favourites</Text>
        </View>
      </View>
    </View>
  );
}

export default FavouritesContainer


import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import FavouritesContainer from "../components/FavouritesContainer";


const Favourites = () => {
  return (
    <ScrollView>
      <View className="flex-row items-center justify-between bg-teal-600 w-full p-2">
        <View className="flex-row items-center">
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg">Favourites</Text>
        </View>
        <TouchableOpacity>
          <Feather name="shopping-bag" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FavouritesContainer />
      <FavouritesContainer />
    </ScrollView>
  );
};

export default Favourites;

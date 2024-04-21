import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Entypo,Feather} from "@expo/vector-icons";


const UserReview = () => {
  return (
    <View className="p-2 border-b">
      <View className="flex-row items-center">
        <Image
          source={require("../assets/Image10.jpg")}
          className="w-12 h-12 rounded-full"
        />
        <Text className="flex-1 ml-2">Esther</Text>
        <TouchableOpacity>
          <Feather name="more-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center">
        <View className="flex-row items-center">
          {Array(5)
            .fill()
            .map((_, i) => (
              <Entypo name="star" size={20} color="teal" />
            ))}
        </View>
        <Text className="ml-2">21/1/23</Text>
      </View>
      <Text>It's easy to use</Text>
      <View className="flex-row items-center">
        <Text className="flex-1">Was this review helpful</Text>
        <View className="flex-row items-center#">
          <TouchableOpacity className="border m-2 px-3 py-1 rounded">
            <Text>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border m-2 px-3 py-1 rounded">
            <Text>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserReview;

import { Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';



const PersonalInfo = () => {
  const navigation = useNavigation()
  return (
    <View>
      <View className="bg-teal-700 h-screen">
        <View className=" w-full h-1/4 p-1">
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={30} color="white" />
          </TouchableOpacity>
          <View className="items-center">
            <View className="w-32 h-32 rounded-full border-gray-200 border-2 items-center justify-center">
              <Image  source={require("../assets/Image10.jpg")}
              className="w-32 h-32 rounded-full"
              />

            </View>
            <Text className="text-white font-bold text-xl">Esther</Text>
            <Text className="text-xs text-white">esther@gmail.com</Text>
          </View>
        </View>
        <View className="bg-white shadow p-2 w-full absolute bottom-12 rounded-t-3xl border-gray-300">
          <View className="flex-row items-center m-2 bg-white shadow border p-3 rounded-lg border-gray-200">
            <EvilIcons name="user" size={30} color="#0f766e" />
            <Text className="text-xl  flex-1 ml-2 ">Profile Details</Text>
            <TouchableOpacity>
              <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center m-2 bg-white shadow border p-3 rounded-lg border-gray-200">
            <Ionicons name="location-outline" size={30} color="#0f766e" />
            <Text className="text-xl  flex-1 ml-2 ">Address</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("currentlocation")}>
              <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center m-2 bg-white shadow border p-3 rounded-lg border-gray-200">
            <MaterialIcons name="favorite-border" size={30} color="#0f766e" />
            <Text className="text-xl  flex-1 ml-2 ">Favorites</Text>
            <TouchableOpacity>
              <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center m-2 bg-white shadow border p-3 rounded-lg border-gray-200">
            <Ionicons name="call-outline" size={24} color="#0f766e" />
            <Text className="text-xl  flex-1 ml-2 ">Call</Text>
            <TouchableOpacity>
              <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View className="items-center">
            <TouchableOpacity className="border bg-white border-gray-200 p-2 flex-row items-center mb-10">
              <MaterialIcons name="logout" size={24} color="#0f766e" />
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default PersonalInfo

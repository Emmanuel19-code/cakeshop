import { Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import PersonalsubContainer from '../components/PersonalsubContainer';



const PersonalInfo = () => {
  return (
    <View>
      <View className="bg-teal-700 h-screen">
        <View className=" w-full h-1/4 p-1">
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={30} color="white" />
          </TouchableOpacity>
          <View className="items-center">
            <View className="w-32 h-32 rounded-full border-gray-200 border-2 items-center justify-center">
              <Image
                source={require("../assets/Image10.jpg")}
                className="w-32 h-32 rounded-full"
              />
            </View>
            <Text className="text-white font-bold text-xl">Esther</Text>
            <Text className="text-xs text-white">esther@gmail.com</Text>
          </View>
        </View>
        <View className="bg-white shadow p-2 w-full absolute bottom-12 rounded-t-3xl border-gray-300">
          <PersonalsubContainer
            IconComponent={EvilIcons}
            icon_name={"user"}
            title={"Profile Details"}
          />
          <PersonalsubContainer
            IconComponent={Ionicons}
            icon_name={"location-outline"}
            title={"Address"}
            routename={"currentlocation"}
          />
          <PersonalsubContainer
            IconComponent={MaterialIcons}
            icon_name={"favorite-border"}
            routename={"favorites"}
            title={"Favorites"}
          />
          <PersonalsubContainer
            IconComponent={Ionicons}
            icon_name={"call-outline"}
            routename={"favorites"}
            title={"Call"}
          />
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

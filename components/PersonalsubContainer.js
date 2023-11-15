import { Text, View, TouchableOpacity} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const PersonalsubContainer = ({ IconComponent, icon_name, title ,routename}) => {
    const navigation = useNavigation()
  return (
    <View className="flex-row items-center m-2 bg-white shadow border p-3 rounded-lg border-gray-200">
      <IconComponent name={icon_name} size={30} color="#0f766e" />
      <Text className="text-xl  flex-1 ml-2 ">{title}</Text>
      <TouchableOpacity onPress={()=>navigation.navigate(routename)}>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default PersonalsubContainer;

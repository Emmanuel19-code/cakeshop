import { Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const ConfirmButton = ({routename,name}) => {
    const navigation = useNavigation()
  return (
    <View className="mt-2 items-center">
      <TouchableOpacity  className="bg-teal-400 w-44 rounded p-1"
          onPress={() => navigation.navigate(routename)}>
        <Text className="text-white text-lg text-center">{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ConfirmButton


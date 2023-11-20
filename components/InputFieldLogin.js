import { View, Text,TextInput } from 'react-native'
import React from 'react'

const InputFieldLogin = ({inputname,placeholderText}) => {
  return (
    <View className="m-2">
      <Text>{inputname}</Text>
      <View className="w-full p-2 border-2 border-gray-400 rounded">
        <TextInput
          placeholder={placeholderText}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
    </View>
  );
}

export default InputFieldLogin
{
  /*
    
    <View className="m-2">
          <Text className="font-bold">Full Name</Text>
          <View className="w-full p-2 border-2 border-gray-400 rounded">
            <TextInput
              placeholder="Enter full name"
              value={fullname}
              onChangeText={(text) => setFullname(text)}
            />
          </View>
        </View>
    */
}
import { View, Text } from 'react-native'
import React,{useState} from 'react'
import Checkbox from "expo-checkbox";

const AddOns = ({flavorname,price}) => {
    const [ischecked, setIschecked] = useState(false);
  return (
    <View className="flex-row items-center m-1">
      <Checkbox value={ischecked} onValueChange={setIschecked} />
      <Text className="flex-1 m-1">{flavorname}</Text>
      <Text>${price}</Text>
    </View>
  );
}

export default AddOns
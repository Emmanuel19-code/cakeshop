import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const DeliveryDateSelect = ({
  id,
  fromtime,
  toTime,
  pricing,
  selectedItemId,
  onItemSelect,
}) => {
  const handleSelect = () => {
    onItemSelect(id);
  };
  return (
    <TouchableOpacity className="m-1" onPress={handleSelect}>
      <View
        className={
          selectedItemId === id
            ? "flex-row items-center border-b bg-gray-200 border-gray-200 p-2"
            : "flex-row items-center border-b border-gray-200 p-2"
        }
      >
        <Text className="flex-1">
          {fromtime} ~ {toTime}
        </Text>
        <View>
          <Text>{pricing}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DeliveryDateSelect;
